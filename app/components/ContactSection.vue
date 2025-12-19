<template>
  <section class="contact-section">
    <!-- Dekoracyjne grafiki warzyw -->
    <div class="veggie-decorations">
      <img src="/tomato.png" alt="Pomidor" class="veggie veggie-1" />
      <img src="/garlic.png" alt="Czosnek" class="veggie veggie-2" />
    </div>

    <div class="contact-container">
      <div class="contact-grid">
        <!-- Lokalizacja -->
        <div class="contact-item">
          <div class="contact-icon">🏠</div>
          <div class="contact-text">
            Bieszczadzka 18<br>
            38-700 Ustrzyki Dolne
          </div>
        </div>

        <!-- Telefon -->
        <div class="contact-item">
          <div class="contact-icon">☎️</div>
          <a href="tel:537660808" class="contact-text contact-link">537 660 808</a>
        </div>

        <!-- Email -->
        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <a href="mailto:wlodarczyk65@wp.pl" class="contact-text contact-link">wlodarczyk65@wp.pl</a>
        </div>

        <!-- Godziny otwarcia -->
        <div class="contact-item">
          <div class="contact-icon">⏰</div>
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
  background: #ffffff;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Dekoracyjne grafiki warzyw */
.veggie-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.veggie {
  position: absolute;
  width: 60px;
  height: auto;
  opacity: 0.2;
  animation: floatVeggie 18s infinite ease-in-out;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.veggie-1 {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.veggie-2 {
  bottom: 25%;
  left: 8%;
  animation-delay: 4s;
  width: 55px;
}

@keyframes floatVeggie {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-12px) rotate(4deg); }
  50% { transform: translateY(-6px) rotate(-4deg); }
  75% { transform: translateY(-18px) rotate(2deg); }
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
  margin-bottom: 0.5rem;
}

.contact-text {
  font-size: 0.95rem;
  color: #333333;
  line-height: 1.6;
  font-weight: 400;
}

.contact-link {
  text-decoration: none;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #8b5a3f;
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
