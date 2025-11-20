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
          <!-- Logo in mobile menu -->
          <NuxtLink to="/" class="mobile-logo" @click="closeMobileMenu">
            <img src="/logo.png" alt="Logo restauracji" class="logo-img" />
          </NuxtLink>

          <ul class="mobile-menu-list">
          <!-- Catering -->
          <li>
            <NuxtLink to="/catering" @click="closeMobileMenu">Catering</NuxtLink>
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
            <div class="hours-item"><span class="day">Poniedziałek</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Wtorek</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Środa</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Czwartek</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Piątek</span><span class="time">9:00 - 20:00</span></div>
            <div class="hours-item"><span class="day">Sobota</span><span class="time">10:00 - 20:00</span></div>
            <div class="hours-item"><span class="day">Niedziela</span><span class="time">10:00 - 18:00</span></div>
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
              <p>Vouchery do naszej restauracji na 10 obiadów.</p>
              <p><strong>Kontakt:</strong> <a href="tel:537660808">537 660 808</a></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop menu (hidden on mobile) -->
      <ul class="desktop-menu">
        <li>
          <NuxtLink to="/catering">Catering</NuxtLink>
        </li>
        <li class="dropdown">
          <button @click="toggleHours" @blur="closeHours" class="dropdown-toggle">
            Godziny otwarcia
            <span class="arrow" :class="{ open: hoursOpen }">▼</span>
          </button>
          <div v-if="hoursOpen" class="dropdown-content">
            <div class="hours-item"><span class="day">Poniedziałek</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Wtorek</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Środa</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Czwartek</span><span class="time">9:00 - 17:00</span></div>
            <div class="hours-item"><span class="day">Piątek</span><span class="time">9:00 - 20:00</span></div>
            <div class="hours-item"><span class="day">Sobota</span><span class="time">10:00 - 20:00</span></div>
            <div class="hours-item"><span class="day">Niedziela</span><span class="time">10:00 - 18:00</span></div>
          </div>
        </li>
        <li>
          <NuxtLink to="/#o-nas" @click="onOnasClick">O nas</NuxtLink>
        </li>
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
              <p>Vouchery do naszej restauracji na 10 obiadów.</p>
              <p><strong>Kontakt:</strong> <a href="tel:537660808">537 660 808</a></p>
            </div>
          </div>
        </li>
        <li>
          <NuxtLink to="/galeria">Galeria</NuxtLink>
        </li>
      </ul>

      <!-- Desktop logo (hidden on mobile) -->
      <NuxtLink to="/" class="desktop-logo">
        <img src="/logo.png" alt="Logo restauracji" class="logo-img" />
      </NuxtLink>
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
</script>


<style scoped>
.navigation {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 50px;
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
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 3px;
  background: linear-gradient(
    to right,
    #1a4d2e 0%,
    #1a4d2e 15%,
    transparent 15%,
    transparent 20%,
    #1a4d2e 20%,
    #1a4d2e 80%,
    transparent 80%,
    transparent 85%,
    #1a4d2e 85%,
    #1a4d2e 100%
  );
  z-index: 0;
  pointer-events: none;
}

/* Hamburger button (mobile only) */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2000;
  position: relative;
}

.hamburger-btn span {
  width: 100%;
  height: 3px;
  background: #1a4d2e;
  border-radius: 2px;
  transition: all 0.3s;
  transform-origin: center;
}

.hamburger-btn.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile menu overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
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

.mobile-logo {
  flex-shrink: 0;
  display: block;
}

.mobile-logo .logo-img {
  height: 100px;
  width: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
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
  color: #1a4d2e;
  font-size: 1.4rem;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
  border-radius: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.mobile-menu-list a:hover,
.mobile-menu-list .dropdown-toggle:hover {
  background: rgba(26, 77, 46, 0.1);
}

.mobile-menu-list .dropdown-content {
  margin-top: 1rem;
  background: #f9f7f4;
  border-radius: 8px;
  padding: 1rem;
}

/* Desktop logo and menu */
.desktop-logo {
  display: flex;
  position: absolute;
  z-index: 1001;

}

.desktop-logo .logo-img {
  height: 120px;
  width: auto;
  display: block;
  transition: opacity 0.3s;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
  position: relative;
  z-index: 2;
  margin-top: 50%;
  text-align: center;
}

.desktop-logo:hover .logo-img {
  opacity: 0.85;
}

.desktop-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
  margin-left: auto;
  height: 100%;
  position: relative;
  z-index: 1;
  background: white;
  padding: 0 10px;
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
  color: #333;
  font-size: 1.3rem;
  font-weight: 500;
  transition: color 0.3s;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.desktop-menu a:hover,
.desktop-menu .dropdown-toggle:hover {
  color: #666;
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
  background-color: white;
  min-width: 250px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 8px;
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
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item a {
  color: #081c06;
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
  color: #333;
  line-height: 1.5;
}

.voucher-info p:first-child {
  font-weight: 600;
  color: #1a4d2e;
}

.voucher-info a {
  color: #1a4d2e;
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
  border-bottom: 1px solid #f0f0f0;
}

.hours-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: 500;
  color: #333;
}

.time {
  color: #666;
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
    height: auto;
    position: fixed;
    top: 20px;
    left: 20px;
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
  }

  .desktop-logo,
  .desktop-menu {
    display: none;
  }

  /* Pełny ekran – bez paddingu, bez logo */
  .mobile-menu-overlay {
    padding: 2rem 0;
    background: white;
    display: block;
    overflow-y: auto;
  }

  .mobile-menu-content {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    padding: 2rem 0;
    margin: 0;
  }

  /* Ukrywamy logo w menu mobilnym */
  .mobile-logo {
    display: none !important;
  }

  /* Lista – zajmuje cały ekran */
  .mobile-menu-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
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
    min-height: 80px;
  }

  /* Ogromne napisy na całą szerokość */
  .mobile-menu-list a,
  .mobile-menu-list .dropdown-toggle {
    width: 100%;
    padding: 2rem 1.5rem;
    font-size: 2.8rem;           /* bardzo duże */
    font-weight: 600;
    color: #1a4d2e;
    background: transparent;
    border: none;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background 0.3s ease;
  }

  .mobile-menu-list a:hover,
  .mobile-menu-list .dropdown-toggle:hover {
    background: rgba(26, 77, 46, 0.08);
  }

  /* Strzałka – mała, po prawej */
  .arrow {
    font-size: 1.6rem;
    margin-left: 1rem;
    transition: transform 0.3s ease;
  }
  .arrow.open {
    transform: rotate(180deg);
  }

  /* Dropdowny – też na całą szerokość */
  .mobile-menu-list .dropdown {
    width: 100%;
  }

  .mobile-menu-list .dropdown-content {
    position: static;
    width: 80%;
    background: rgba(26, 77, 46, 0.05);
    padding: 1.5rem 2rem;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    animation: none;
  }

  .mobile-menu-list .hours-item,
  .mobile-menu-list .contact-item {
    padding: 1rem 0;
    font-size: 1.3rem;
    border-bottom: 1px solid rgba(26, 77, 46, 0.15);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    
  }

  .mobile-menu-list .hours-item:last-child,
  .mobile-menu-list .contact-item:last-child {
    border-bottom: none;
  }

  .mobile-menu-list .contact-item strong,
  .mobile-menu-list .contact-item a {
    color: #1a4d2e !important;
    font-size: 1.3rem !important;
    font-weight: 600;
    text-decoration: none;
  }

  .mobile-menu-list .hours-item .day,
  .mobile-menu-list .hours-item .time {
    color: #1a4d2e !important;
    font-size: 1.3rem !important;
    font-weight: 600;
  }

  .mobile-menu-list .voucher-info p {
    font-size: 1.3rem;
    text-align: center;
    margin: 0.8rem 0;
    line-height: 1.6;
    color: #1a4d2e;
  }
}

/* Na bardzo małych ekranach – trochę mniejszy tekst, ale nadal pełna szerokość */
@media (max-width: 480px) {
  .mobile-menu-list a,
  .mobile-menu-list .dropdown-toggle {
    font-size: 2.2rem;
    padding: 1.5rem 1rem;
  }

  .arrow {
    font-size: 1.4rem;
  }

  .mobile-menu-list .hours-item,
  .mobile-menu-list .contact-item {
    font-size: 1.1rem;
  }

  .mobile-menu-list .contact-item strong,
  .mobile-menu-list .contact-item a,
  .mobile-menu-list .hours-item .day,
  .mobile-menu-list .hours-item .time {
    font-size: 1.1rem !important;
    color: #1a4d2e !important;
    font-weight: 600;
  }

  .mobile-menu-list .voucher-info p {
    font-size: 1.1rem;
  }

  .mobile-menu-list .dropdown-content {
    padding: 1rem 1.5rem;
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
    background: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  /* KLUCZOWA POPRAWKA */
  .modal-content {
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    width: 90vw;           /* zamiast width: 100% */
    max-width: 400px;      /* sztywne ograniczenie */
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    box-sizing: border-box;
  }

  /* Tytuł nie może wychodzić poza ekran */
  .modal-title {
    font-size: 1.8rem;
    color: #1a4d2e;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: center;
    padding-right: 3rem;
    word-wrap: break-word;
  }

  .modal-body {
    color: #333;
  }

  /* Godziny – tekst nie może się rozjeżdżać */
  .modal-body .hours-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
    font-size: 1.15rem;
    flex-wrap: wrap;           /* <--- to najważniejsze! */
    gap: 0.5rem;
  }

  .modal-body .hours-item:last-child {
    border-bottom: none;
  }

  .modal-body .hours-item .day {
    font-weight: 600;
    color: #1a4d2e;
    flex: 1;
    min-width: 120px;
  }

  .modal-body .hours-item .time {
    color: #444;
    font-weight: 500;
    text-align: right;
  }

  /* Kontakt i vouchery – też bezpieczne */
  .modal-body .contact-item,
  .modal-body .voucher-info p {
    text-align: center;
    padding: 0.8rem 0;
    word-wrap: break-word;
  }

  .modal-body .contact-item {
    border-bottom: 1px solid #eee;
  }

  .modal-body .contact-item:last-child {
    border-bottom: none;
  }

  .modal-body .contact-item strong {
    display: block;
    color: #1a4d2e;
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  .modal-body .contact-item a {
    color: #1a4d2e;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .modal-body .contact-item a:hover {
    text-decoration: underline;
  }

  .modal-body .voucher-info p {
    margin: 0.8rem 0;
    line-height: 1.5;
    color: #444;
    font-size: 0.95rem;
  }

  .modal-body .voucher-info p:first-child {
    font-weight: 600;
    color: #1a4d2e;
    font-size: 1.1rem;
  }

  .modal-body .voucher-info a {
    color: #1a4d2e;
    font-weight: 600;
    text-decoration: none;
  }

  .modal-body .voucher-info a:hover {
    text-decoration: underline;
  }

  .modal-close {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    background: rgba(26,77,46,0.1);
    border: none;
    font-size: 2.2rem;
    color: #1a4d2e;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
  }

  .modal-close:hover {
    background: rgba(26, 77, 46, 0.2);
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
    width: 92vw;
    max-width: 340px;
    padding: 1.8rem 1.2rem;
  }

  .modal-title {
    font-size: 1.6rem;
  }

  .modal-body .hours-item {
    font-size: 1.05rem;
  }
}
</style>