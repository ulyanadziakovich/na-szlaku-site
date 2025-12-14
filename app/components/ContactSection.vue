<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-grid">
        <!-- Lokalizacja -->
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div class="contact-text">
            Bieszczadzka 18<br>
            38-700 Ustrzyki Dolne
          </div>
        </div>

        <!-- Telefon -->
        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <a href="tel:537660808" class="contact-text contact-link">537 660 808</a>
        </div>

        <!-- Email -->
        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <a href="mailto:wlodarczyk65@wp.pl" class="contact-text contact-link">wlodarczyk65@wp.pl</a>
        </div>

        <!-- Godziny otwarcia -->
        <div class="contact-item">
          <div class="contact-icon">🕐</div>
          <div class="contact-text">
            Pn - nie czynne.<br>
            Wt - Nd 11:00-17:00<br>
      
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Brak dodatkowej logiki - tylko wyświetlanie informacji kontaktowych
</script>

<style scoped>
.contact-section {
  background: #000000;
  padding: 2.5rem 2rem;
  position: relative;
}

.contact-container {
  max-width: 1400px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  align-items: start;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.contact-icon {
  font-size: 2.5rem;
  filter: grayscale(1) brightness(1.5) sepia(1) hue-rotate(15deg) saturate(3);
  margin-bottom: 0.5rem;
}

.contact-text {
  font-size: 0.95rem;
  color: #e0e0e0;
  line-height: 1.6;
  font-weight: 400;
}

.contact-link {
  text-decoration: none;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #d4af37;
}

/* Responsywność */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .contact-section {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-section {
    padding: 2rem 1rem;
  }

  .contact-icon {
    font-size: 2rem;
  }

  .contact-text {
    font-size: 0.9rem;
  }
}
</style>
