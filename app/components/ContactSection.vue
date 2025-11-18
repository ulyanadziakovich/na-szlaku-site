<template>
  <section class="contact-section">
    <div class="contact-container">
      <h2 class="contact-title">Kontakt</h2>

      <div class="contact-content">
        <!-- Lewa strona - informacje -->
        <div class="contact-info">
          <div class="info-group">
            <div class="info-label">Zadzwoń do nas</div>
            <a href="tel:537660808" class="info-value phone">537 660 808</a>
          </div>

          <div class="decorative-line"></div>

          <div class="info-group">
            <div class="info-label">Napisz do nas</div>
            <a href="mailto:wlodarczyk65@wp.pl" class="info-value email">wlodarczyk65@wp.pl</a>
          </div>

          <div class="decorative-line"></div>

          <div class="info-group">
            <div class="info-label">Odwiedź nas</div>
            <div class="info-value address">
              Restauracja Na Szlaku<br>
              ul. Józefa Dwernickiego 18<br>
              Ustrzyki Dolne
            </div>
          </div>

        </div>

        <!-- Prawa strona - animowane rośliny -->
        <div class="contact-empty-space">
          <AnimatedPlants />
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
  background: linear-gradient(135deg, #f9f7f4 0%, #ede8e0 100%);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    #1a4d2e 10%,
    #1a4d2e 30%,
    transparent 30%,
    transparent 35%,
    #1a4d2e 35%,
    #1a4d2e 65%,
    transparent 65%,
    transparent 70%,
    #1a4d2e 70%,
    #1a4d2e 90%,
    transparent 100%
  );
  opacity: 0.3;
  pointer-events: none;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-title {
  font-size: 3rem;
  color: #1a4d2e;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Georgia', serif;
  font-weight: 600;
  position: relative;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #1a4d2e, transparent);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

/* Informacje kontaktowe */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0;
}

.info-group {
  position: relative;
  padding-left: 2rem;
  animation: fadeInLeft 0.8s ease-out;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.info-group::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background: #1a4d2e;
  border-radius: 50%;
}

.info-label {
  font-size: 0.9rem;
  color: #8b7355;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.info-value {
  font-size: 1.4rem;
  color: #1a4d2e;
  font-weight: 500;
  line-height: 1.6;
  display: block;
  font-family: 'Georgia', serif;
}

.info-value.phone,
.info-value.email {
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
  display: inline-block;
}

.info-value.phone:hover,
.info-value.email:hover {
  color: #2d7a4f;
  transform: translateX(5px);
}

.info-value.address {
  font-size: 1.2rem;
  color: #4a4a4a;
}

.decorative-line {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(26, 77, 46, 0.2) 20%,
    rgba(26, 77, 46, 0.2) 80%,
    transparent
  );
  margin: 0 2rem;
}

.hours-group {
  padding-bottom: 1rem;
}

.hours-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.05rem;
  padding: 0.5rem 0;
}

.hours-item .day {
  color: #4a4a4a;
  font-weight: 500;
}

.hours-item .time {
  color: #1a4d2e;
  font-weight: 600;
  font-family: 'Georgia', serif;
}

/* Przestrzeń z roślinami po prawej */
.contact-empty-space {
  min-height: 550px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  padding: 0;
}

/* Responsywność */
@media (max-width: 968px) {
  .contact-section {
    padding: 4rem 1.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-title {
    font-size: 2.8rem;
    margin-bottom: 3.5rem;
  }

  .contact-info {
    gap: 2.5rem;
    padding: 1.5rem 0;
  }

  .contact-empty-space {
    display: none;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 3.5rem 1.5rem;
  }

  .contact-section::before {
    width: 90%;
  }

  .contact-title {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  .contact-info {
    gap: 2rem;
  }

  .info-group {
    padding-left: 1.5rem;
  }

  .info-label {
    font-size: 0.85rem;
    letter-spacing: 1.2px;
  }

  .info-value {
    font-size: 1.3rem;
  }

  .info-value.address {
    font-size: 1.15rem;
  }

  .decorative-line {
    margin: 0 1rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 3rem 1rem;
  }

  .contact-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  .contact-info {
    gap: 1.8rem;
  }

  .info-group {
    padding-left: 1.2rem;
  }

  .info-label {
    font-size: 0.8rem;
  }

  .info-value {
    font-size: 1.2rem;
  }

  .info-value.address {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .decorative-line {
    margin: 0 0.5rem;
  }
}
</style>
