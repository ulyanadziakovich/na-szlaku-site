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

          <!-- O nas -->
          <li>
            <NuxtLink to="/#o-nas" @click="handleOnasClick">O nas</NuxtLink>
          </li>

          <!-- Kontakt (dropdown) -->
          <li class="dropdown">
            <button @click="toggleContact" class="dropdown-toggle">
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

          <!-- Vouchery (dropdown) -->
          <li class="dropdown">
            <button @click="toggleVoucher" class="dropdown-toggle">
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

          <!-- Galeria -->
          <li>
            <NuxtLink to="/galeria" @click="closeMobileMenu">Galeria</NuxtLink>
          </li>
        </ul>
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
const closeHours = () => setTimeout(() => hoursOpen.value = false, 200)
const closeContact = () => setTimeout(() => contactOpen.value = false, 200)
const closeVoucher = () => setTimeout(() => voucherOpen.value = false, 200)

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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-menu-overlay.open {
  transform: translateX(0);
}

.mobile-logo {
  display: block;
  margin: 2rem auto 3rem;
  text-align: center;
}

.mobile-logo .logo-img {
  height: 120px;
  width: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 400px;
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
    height: 60px;
  }

  .nav-container {
    padding: 0 20px;
  }

  .nav-container::before {
    display: none;
  }

  /* Show hamburger on mobile */
  .hamburger-btn {
    display: flex;
  }

  /* Hide desktop logo and menu on mobile */
  .desktop-logo,
  .desktop-menu {
    display: none;
  }

  /* Mobile dropdown styles */
  .mobile-menu-list .dropdown-content {
    position: static;
    transform: none;
    box-shadow: none;
    margin-top: 0.5rem;
  }

  .mobile-menu-list .hours-item,
  .mobile-menu-list .contact-item {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(26, 77, 46, 0.1);
    font-size: 1rem;
  }

  .mobile-menu-list .hours-item:last-child,
  .mobile-menu-list .contact-item:last-child {
    border-bottom: none;
  }

  .mobile-menu-list .voucher-info p {
    font-size: 1rem;
    margin: 0.75rem 0;
  }

  .mobile-menu-list .arrow {
    font-size: 0.9rem;
    margin-left: 0.5rem;
    display: inline-block;
    transition: transform 0.3s;
  }

  .mobile-menu-list .arrow.open {
    transform: rotate(180deg);
  }
}
</style>