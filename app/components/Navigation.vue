<template>
  <nav class="navigation">
    <div class="nav-container">
      <!-- Hamburger button (mobile only) -->
      <button
        class="hamburger-btn"
        @click="toggleMobileMenu"
        :class="{ active: mobileMenuOpen }"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile overlay menu -->
      <div class="mobile-menu-overlay" :class="{ open: mobileMenuOpen }">
        <div class="mobile-menu-content">
          <ul class="mobile-menu-list">
          <!-- Catering -->
          <li>
            <NuxtLink to="/#catering" @click="handleCateringClick">Catering</NuxtLink>
          </li>

          <!-- Godziny otwarcia (dropdown) -->
          <li class="dropdown">
            <button @click="toggleHours" class="dropdown-toggle">
              Godziny otwarcia
            </button>
          </li>

          <!-- O nas -->
          <li>
            <NuxtLink to="/#o-nas" @click="handleOnasClick">O nas</NuxtLink>
          </li>

          <!-- Kontakt (dropdown) -->
          <li class="dropdown">
            <button @click="toggleContact" class="dropdown-toggle">
              Kontakt
            </button>
          </li>

          <!-- Vouchery (dropdown) -->
          <li class="dropdown">
            <button @click="toggleVoucher" class="dropdown-toggle">
              Vouchery
            </button>
          </li>

          <!-- Galeria -->
          <li>
            <NuxtLink to="/galeria" @click="closeMobileMenu">Galeria</NuxtLink>
          </li>
        </ul>
        </div>
      </div>

      <!-- Modale dla mobile -->
      <!-- Modal Godziny otwarcia -->
      <div v-if="hoursOpen" class="modal-overlay" @click="closeHours">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeHours">×</button>
          <h3 class="modal-title">Godziny otwarcia</h3>
          <div class="modal-body">
            <div v-for="item in openingHours" :key="item.day" class="hours-item">
              <span class="day">{{ item.day }}</span>
              <span class="time" :class="{ closed: item.closed }">{{ item.time }}</span>
            </div>
            <div class="hours-note">* W porze zimowej godziny pracy mogą być skrócone</div>
          </div>
        </div>
      </div>

      <!-- Modal Kontakt -->
      <div v-if="contactOpen" class="modal-overlay" @click="closeContact">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeContact">×</button>
          <h3 class="modal-title">Kontakt</h3>
          <div class="modal-body">
            <div class="contact-item">
              <strong>Telefon:</strong>
              <a href="tel:537660808">537 660 808</a>
            </div>
            <div class="contact-item">
              <strong>E-mail:</strong>
              <a href="mailto:wlodarczyk65@wp.pl">wlodarczyk65@wp.pl</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Vouchery -->
      <div v-if="voucherOpen" class="modal-overlay" @click="closeVoucher">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeVoucher">×</button>
          <h3 class="modal-title">Vouchery</h3>
          <div class="modal-body">
            <div class="voucher-info">
              <p>"Voucher na obiady — więcej smaku, mniej wydatków!"</p>
              <p>Vouchery do naszej restauracji na 10 obiadów za 270 zł. Jeden obiad: zupa, drugie danie, kompot.</p>
              <p><strong>Kontakt:</strong> <a href="tel:537660808">537 660 808</a></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop menu - lewa strona -->
      <ul class="desktop-menu desktop-menu-left">
        <li>
          <NuxtLink to="/#catering" @click="onCateringClick">Catering</NuxtLink>
        </li>
        <li class="dropdown">
          <button @click="toggleHours" @blur="closeHours" class="dropdown-toggle">
            Godziny otwarcia
            <span class="arrow" :class="{ open: hoursOpen }">▼</span>
          </button>
          <div v-if="hoursOpen" class="dropdown-content">
            <div v-for="item in openingHours" :key="item.day" class="hours-item">
              <span class="day">{{ item.day }}</span>
              <span class="time" :class="{ closed: item.closed }">{{ item.time }}</span>
            </div>
            <div class="hours-note">* W porze zimowej godziny pracy mogą być skrócone</div>
          </div>
        </li>
        <li>
          <NuxtLink to="/#o-nas" @click="onOnasClick">O nas</NuxtLink>
        </li>
      </ul>

      <!-- Desktop menu - prawa strona -->
      <ul class="desktop-menu desktop-menu-right">
        <li class="dropdown">
          <button @click="toggleContact" @blur="closeContact" class="dropdown-toggle">
            Kontakt
            <span class="arrow" :class="{ open: contactOpen }">▼</span>
          </button>
          <div v-if="contactOpen" class="dropdown-content contact-dropdown">
            <div class="contact-item">
              <strong>Telefon:</strong>
              <a href="tel:537660808">537 660 808</a>
            </div>
            <div class="contact-item">
              <strong>E-mail:</strong>
              <a href="mailto:wlodarczyk65@wp.pl">wlodarczyk65@wp.pl</a>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <button @click="toggleVoucher" @blur="closeVoucher" class="dropdown-toggle">
            Vouchery
            <span class="arrow" :class="{ open: voucherOpen }">▼</span>
          </button>
          <div v-if="voucherOpen" class="dropdown-content voucher-dropdown">
            <div class="voucher-info">
              <p>"Voucher na obiady — więcej smaku, mniej wydatków!"</p>
              <p>Vouchery do naszej restauracji na 10 obiadów za 270 zł. Jeden obiad: zupa, drugie danie, kompot.</p>
              
            </div>
          </div>
        </li>
        <li>
          <NuxtLink to="/galeria">Galeria</NuxtLink>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from '#app'

const hoursOpen = ref(false)
const contactOpen = ref(false)
const voucherOpen = ref(false)
const mobileMenuOpen = ref(false)

// Godziny otwarcia - jedna definicja dla całej aplikacji
const openingHours = [
  { day: 'Poniedziałek', time: 'Zamknięte', closed: true },
  { day: 'Wtorek', time: '11:00 - 17:00', closed: false },
  { day: 'Środa', time: '11:00 - 17:00', closed: false },
  { day: 'Czwartek', time: '11:00 - 17:00', closed: false },
  { day: 'Piątek', time: '11:00 - 17:00', closed: false },
  { day: 'Sobota', time: '11:00 - 17:00', closed: false },
  { day: 'Niedziela', time: '11:00 - 17:00', closed: false }
]

const toggleHours = () => {
  hoursOpen.value = !hoursOpen.value
  contactOpen.value = false
  voucherOpen.value = false
}
const toggleContact = () => {
  contactOpen.value = !contactOpen.value
  hoursOpen.value = false
  voucherOpen.value = false
}
const toggleVoucher = () => {
  voucherOpen.value = !voucherOpen.value
  hoursOpen.value = false
  contactOpen.value = false
}
const closeHours = () => hoursOpen.value = false
const closeContact = () => contactOpen.value = false
const closeVoucher = () => voucherOpen.value = false

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scroll when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
  hoursOpen.value = false
  contactOpen.value = false
  voucherOpen.value = false
}

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const route = useRoute()
const onOnasClick = (e) => {
  if (route.path === '/') {
    e.preventDefault()
    scrollTo('o-nas')
  }
}

const handleOnasClick = (e) => {
  if (route.path === '/') {
    e.preventDefault()
    scrollTo('o-nas')
  }
  closeMobileMenu()
}

const onCateringClick = (e) => {
  if (route.path === '/') {
    e.preventDefault()
    scrollTo('catering')
  }
}

const handleCateringClick = (e) => {
  if (route.path === '/') {
    e.preventDefault()
    scrollTo('catering')
  }
  closeMobileMenu()
}

const scrollToTop = (e) => {
  if (route.path === '/') {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>


<style scoped>
.navigation {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
}

.nav-container::before {
  display: none;
}

/* Hamburger button (mobile only) - elegancki styl */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: #faf8f5;
  border: 1px solid rgba(139, 90, 63, 0.2);
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  z-index: 2000;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.hamburger-btn:hover {
  border-color: #8b5a3f;
  box-shadow: 0 4px 12px rgba(139, 90, 63, 0.2);
}

.hamburger-btn span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: #8b5a3f;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.active {
  background: #faf8f5;
  border-color: #8b5a3f;
}

.hamburger-btn.active span {
  background: #8b5a3f;
}

.hamburger-btn.active span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile menu overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #3d3832 0%, #4a4139 50%, #3d3832 100%);
  z-index: 1500;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  padding: 2rem;
}

.mobile-menu-overlay.open {
  transform: translateX(0);
}

.mobile-menu-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  max-width: 800px;
  margin: 2rem auto 0;
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.mobile-menu-list li {
  margin-bottom: 1.5rem;
  text-align: center;
}

.mobile-menu-list a,
.mobile-menu-list .dropdown-toggle {
  display: flex;
  padding: 1rem;
  text-decoration: none;
  color: #f5e6d3;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: background 0.3s, color 0.3s;
  border-radius: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Playfair Display', Georgia, serif;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.mobile-menu-list a:hover,
.mobile-menu-list .dropdown-toggle:hover {
  background: rgba(212, 175, 55, 0.2);
  color: #8b5a3f;
}

.mobile-menu-list .dropdown-content {
  margin-top: 1rem;
  background: rgba(139, 111, 71, 0.2);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #8b6f47;
}

.desktop-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
  background: #ffffff;
  padding: 0 10px;
}

.desktop-menu-left {
  margin-right: auto;
}

.desktop-menu-right {
  margin-left: auto;
}

.desktop-menu li {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.desktop-menu a,
.desktop-menu .dropdown-toggle {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  text-decoration: none;
  color: #3d3832;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: color 0.3s;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Playfair Display', Georgia, serif;
}

.desktop-menu a:hover,
.desktop-menu .dropdown-toggle:hover {
  color: #8b5a3f;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  font-size: 0.7rem;
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ffffff);
  min-width: 250px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  border-radius: 8px;
  border: 2px solid #8b7f74;
  padding: 1rem;
  margin-top: 0.5rem;
  animation: slideDown 0.3s ease;
  z-index: 1000;
}

.contact-dropdown {
  min-width: 280px;
  text-align: left;
}

.contact-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(139, 127, 116, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #f5e6d3;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item strong {
  color: #8b5a3f;
}

.contact-item a {
  color: #000000;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.voucher-dropdown {
  min-width: 320px;
  text-align: left;
}

.voucher-info {
  padding: 0.5rem 0;
}

.voucher-info p {
  margin: 0.75rem 0;
  color: #000000;
  line-height: 1.5;
}

.voucher-info p:first-child {
  font-weight: 600;
  color: #8b5a3f;
}

.voucher-info a {
  color: #8b5a3f;
  text-decoration: none;
  font-weight: 600;
}

.voucher-info a:hover {
  text-decoration: underline;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(139, 127, 116, 0.3);
}

.hours-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: 500;
  color: #f5e6d3;
}

.time {
  color: #8b5a3f;
}

.time.closed {
  color: #ff6b6b;
  font-weight: 600;
}

.hours-note {
  margin-top: 1rem;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #e8d5c0;
  font-style: italic;
  text-align: center;
  border-top: 1px solid rgba(139, 111, 71, 0.3);
}

@keyframes slideDown {
  from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* Responsywność */
@media (max-width: 968px) {
  .desktop-menu {
    gap: 1.8rem;
    padding: 0 8px;
  }

  .desktop-menu a,
  .desktop-menu .dropdown-toggle {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .navigation {
    background: transparent;
    box-shadow: none;
    border-bottom: none;
    height: auto;
    position: fixed;
    top: 16px;
    left: 16px;
    width: auto;
  }

  .nav-container {
    padding: 0;
    max-width: none;
  }

  .nav-container::before {
    display: none;
  }

  .hamburger-btn {
    display: flex;
    width: 48px;
    height: 48px;
  }

  .hamburger-btn span {
    width: 20px;
  }

  .hamburger-btn.active span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }

  .hamburger-btn.active span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  .desktop-menu {
    display: none;
  }

  /* Pełny ekran - eleganckie jasne tło */
  .mobile-menu-overlay {
    padding: 0;
    background: #faf8f5;
    display: block;
    overflow-y: auto;
  }

  .mobile-menu-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    padding: 4rem 2rem;
    margin: 0;
    box-sizing: border-box;
  }

  /* Lista – elegancka i minimalistyczna */
  .mobile-menu-list {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .mobile-menu-list li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-bottom: 1px solid rgba(139, 90, 63, 0.15);
  }

  .mobile-menu-list li:last-child {
    border-bottom: none;
  }

  /* Eleganckie napisy - mniejsze i bardziej wyrafinowane */
  .mobile-menu-list a,
  .mobile-menu-list .dropdown-toggle {
    width: 100%;
    padding: 1.5rem 1rem;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #3d3832;
    background: transparent;
    border: none;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: color 0.3s ease;
    font-family: 'Playfair Display', Georgia, serif;
  }

  .mobile-menu-list a:hover,
  .mobile-menu-list .dropdown-toggle:hover {
    background: transparent;
    color: #8b5a3f;
  }

  /* Strzałka – subtelna */
  .arrow {
    font-size: 0.8rem;
    margin-left: 0.75rem;
    transition: transform 0.3s ease;
    color: #8b5a3f;
  }
  .arrow.open {
    transform: rotate(180deg);
  }

  /* Dropdowny – eleganckie */
  .mobile-menu-list .dropdown {
    width: 100%;
  }

  .mobile-menu-list .dropdown-content {
    position: static;
    width: 100%;
    background: rgba(139, 90, 63, 0.05);
    padding: 1rem 1.5rem 1.5rem;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    animation: none;
    border: none;
    border-top: 1px solid rgba(139, 90, 63, 0.1);
  }

  .mobile-menu-list .hours-item,
  .mobile-menu-list .contact-item {
    padding: 0.75rem 0;
    font-size: 1rem;
    border-bottom: 1px solid rgba(139, 90, 63, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    text-align: left;
  }

  .mobile-menu-list .hours-item:last-child,
  .mobile-menu-list .contact-item:last-child {
    border-bottom: none;
  }

  .mobile-menu-list .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .mobile-menu-list .contact-item strong {
    color: #8b5a3f !important;
    font-size: 0.85rem !important;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .mobile-menu-list .contact-item a {
    color: #3d3832 !important;
    font-size: 1.1rem !important;
    font-weight: 400;
    text-decoration: none;
  }

  .mobile-menu-list .hours-item .day {
    color: #3d3832 !important;
    font-size: 1rem !important;
    font-weight: 400;
  }

  .mobile-menu-list .hours-item .time {
    color: #8b5a3f !important;
    font-size: 1rem !important;
    font-weight: 500;
  }

  .mobile-menu-list .hours-note {
    font-size: 0.85rem;
    color: #8b8b8b;
    margin-top: 0.75rem;
    text-align: center;
    font-style: italic;
  }

  .mobile-menu-list .voucher-info p {
    font-size: 1rem;
    text-align: center;
    margin: 0.6rem 0;
    line-height: 1.6;
    color: #3d3832;
  }

  .mobile-menu-list .voucher-info p:first-child {
    color: #8b5a3f;
    font-style: italic;
  }
}

/* Na bardzo małych ekranach */
@media (max-width: 480px) {
  .mobile-menu-content {
    padding: 3rem 1.5rem;
  }

  .mobile-menu-list a,
  .mobile-menu-list .dropdown-toggle {
    font-size: 1.15rem;
    padding: 1.25rem 0.75rem;
    letter-spacing: 2px;
  }

  .arrow {
    font-size: 0.7rem;
  }

  .mobile-menu-list .hours-item,
  .mobile-menu-list .contact-item {
    font-size: 0.95rem;
  }

  .mobile-menu-list .contact-item strong {
    font-size: 0.8rem !important;
  }

  .mobile-menu-list .contact-item a {
    font-size: 1rem !important;
    color: #3d3832 !important;
  }

  .mobile-menu-list .hours-item .day,
  .mobile-menu-list .hours-item .time {
    font-size: 0.95rem !important;
  }

  .mobile-menu-list .voucher-info p {
    font-size: 0.95rem;
  }

  .mobile-menu-list .dropdown-content {
    padding: 0.75rem 1rem 1rem;
  }

  .mobile-menu-list .hours-note {
    font-size: 0.8rem;
  }
}

/* Modale - UKRYTE NA DESKTOP, widoczne tylko na mobile */
.modal-overlay {
  display: none; /* domyślnie ukryte na desktop */
}

/* Modały widoczne TYLKO na mobile */
@media (max-width: 768px) {
  .modal-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .modal-content {
    background: #faf8f5;
    border-radius: 16px;
    border: 1px solid rgba(139, 90, 63, 0.2);
    padding: 2rem 1.5rem;
    width: 85vw;
    max-width: 360px;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    box-sizing: border-box;
  }

  .modal-title {
    font-size: 1.5rem;
    color: #8b5a3f;
    margin-bottom: 1.5rem;
    font-weight: 400;
    text-align: center;
    padding-right: 2.5rem;
    word-wrap: break-word;
    font-family: 'Playfair Display', Georgia, serif;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .modal-body {
    color: #3d3832;
  }

  .modal-body .hours-item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(139, 90, 63, 0.1);
    font-size: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .modal-body .hours-item:last-child {
    border-bottom: none;
  }

  .modal-body .hours-item .day {
    font-weight: 400;
    color: #3d3832;
    flex: 1;
    min-width: 110px;
    font-family: 'Playfair Display', Georgia, serif;
  }

  .modal-body .hours-item .time {
    color: #8b5a3f;
    font-weight: 500;
    text-align: right;
    font-family: 'Playfair Display', Georgia, serif;
  }

  .modal-body .hours-item .time.closed {
    color: #c44;
    font-weight: 500;
  }

  .modal-body .hours-note {
    margin-top: 1rem;
    padding-top: 1rem;
    font-size: 0.85rem;
    color: #8b8b8b;
    font-style: italic;
    text-align: center;
    border-top: 1px solid rgba(139, 90, 63, 0.1);
  }

  .modal-body .contact-item,
  .modal-body .voucher-info p {
    text-align: center;
    padding: 0.75rem 0;
    word-wrap: break-word;
  }

  .modal-body .contact-item {
    border-bottom: 1px solid rgba(139, 90, 63, 0.1);
  }

  .modal-body .contact-item:last-child {
    border-bottom: none;
  }

  .modal-body .contact-item strong {
    display: block;
    color: #8b5a3f;
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .modal-body .contact-item a {
    color: #3d3832;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 400;
    font-family: 'Playfair Display', Georgia, serif;
  }

  .modal-body .contact-item a:hover {
    color: #8b5a3f;
  }

  .modal-body .voucher-info p {
    margin: 0.6rem 0;
    line-height: 1.6;
    color: #3d3832;
    font-size: 0.95rem;
    font-family: 'Playfair Display', Georgia, serif;
  }

  .modal-body .voucher-info p:first-child {
    font-weight: 400;
    color: #8b5a3f;
    font-size: 1rem;
    font-style: italic;
  }

  .modal-body .voucher-info a {
    color: #8b5a3f;
    font-weight: 500;
    text-decoration: none;
  }

  .modal-body .voucher-info a:hover {
    text-decoration: underline;
  }

  .modal-close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: 1px solid rgba(139, 90, 63, 0.3);
    font-size: 1.5rem;
    color: #8b5a3f;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .modal-close:hover {
    background: rgba(139, 90, 63, 0.1);
    border-color: #8b5a3f;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Na małych ekranach jeszcze mniejszy modal */
@media (max-width: 480px) {
  .modal-content {
    width: 90vw;
    max-width: 320px;
    padding: 1.5rem 1.25rem;
  }

  .modal-title {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }

  .modal-body .hours-item {
    font-size: 0.95rem;
    padding: 0.6rem 0;
  }

  .modal-body .hours-item .day,
  .modal-body .hours-item .time {
    font-size: 0.95rem;
  }

  .modal-body .contact-item strong {
    font-size: 0.8rem;
  }

  .modal-body .contact-item a {
    font-size: 1rem;
  }

  .modal-body .voucher-info p {
    font-size: 0.9rem;
  }

  .modal-close {
    width: 32px;
    height: 32px;
    font-size: 1.3rem;
  }
}
</style>