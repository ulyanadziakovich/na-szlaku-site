<template>
  <footer class="footer-section">
    <div class="footer-container">
      <!-- Główna część footera -->
      <div class="footer-content">
        <!-- Logo/Nazwa -->
        <div class="footer-brand">
          <h3 class="brand-name">Przystanek na Szlaku</h3>
          <p class="brand-tagline">Domowe smaki codziennie</p>
        </div>

        <!-- Kontakt -->
        <div class="footer-column">
          <h4 class="column-title">Kontakt</h4>
          <div class="contact-info">
            <a href="tel:537660808" class="contact-link">
              <span class="contact-label">Telefon</span>
              <span class="contact-value">537 660 808</span>
            </a>
            <a href="mailto:wlodarczyk65@wp.pl" class="contact-link">
              <span class="contact-label">E-mail</span>
              <span class="contact-value">wlodarczyk65@wp.pl</span>
            </a>
          </div>
        </div>

        <!-- Adres -->
        <div class="footer-column">
          <h4 class="column-title">Adres</h4>
          <address class="address-text">
            Bieszczadzka 18<br>
            38-700 Ustrzyki Dolne
          </address>
        </div>

        <!-- Godziny -->
        <div class="footer-column">
          <h4 class="column-title">Godziny otwarcia</h4>
          <div class="hours-text">
            <p><span class="day">Poniedziałek</span> <span class="closed">zamknięte</span></p>
            <p><span class="day">Wtorek – Niedziela</span> <span class="time">11:00 – 17:00</span></p>
          </div>
        </div>
      </div>

      <!-- Separator -->
      <div class="footer-divider"></div>

      <!-- Dolna część footera -->
      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} Przystanek na Szlaku. Wszelkie prawa zastrzeżone.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/p/Przystanek-na-Szlaku-100091893895594/" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  background: #ffffff;
  padding: 4rem 2rem 2rem;
  position: relative;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 3rem;
  align-items: start;
}

/* Brand */
.footer-brand {
  padding-right: 2rem;
}

.brand-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #6a5f52;
  margin: 0 0 0.5rem;
  letter-spacing: 1px;
}

.brand-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.95rem;
  color: #8b7f74;
  margin: 0;
  font-style: italic;
}

/* Columns */
.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.column-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #8b5a3f;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Contact info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-label {
  font-size: 0.75rem;
  color: #8b7f74;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1rem;
  color: #675f58;
}

.contact-link:hover .contact-value {
  color: #8b5a3f;
}

/* Address */
.address-text {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1rem;
  font-style: normal;
  color: #675f58;
  line-height: 1.7;
  margin: 0;
}

/* Hours */
.hours-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hours-text p {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.95rem;
  color: #675f58;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.hours-text .day {
  font-size: 0.8rem;
  color: #8b7f74;
}

.hours-text .time {
  color: #675f58;
}

.hours-text .closed {
  color: #c44;
}

/* Divider */
.footer-divider {
  height: 1px;
  background: rgba(139, 90, 63, 0.3);
  margin: 3rem 0 1.5rem;
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.85rem;
  color: #8b7f74;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(139, 90, 63, 0.2);
  color: #161616;
  text-decoration: none;
  transition: all 0.3s;
}

.social-link:hover {
  background: #2a2725;
  color: #fffdfd;
}

/* Responsywność */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
    text-align: center;
    margin-bottom: 1rem;
  }

  .footer-column {
    align-items: center;
    text-align: center;
  }

  .contact-link {
    align-items: center;
  }

  .hours-text p {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .brand-name {
    font-size: 1.3rem;
  }

  .column-title {
    font-size: 0.8rem;
  }

  .footer-divider {
    margin: 2rem 0 1rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .copyright {
    font-size: 0.8rem;
    order: 2;
  }

  .social-links {
    order: 1;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 2.5rem 1rem 1.5rem;
  }

  .brand-name {
    font-size: 1.2rem;
  }

  .brand-tagline {
    font-size: 0.9rem;
  }

  .contact-value,
  .address-text,
  .hours-text p {
    font-size: 0.95rem;
  }

  .copyright {
    font-size: 0.75rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-link svg {
    width: 18px;
    height: 18px;
  }
}
</style>
