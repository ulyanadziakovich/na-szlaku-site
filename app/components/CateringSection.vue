<template>
  <section class="catering-section">
    <!-- Dekoracyjne grafiki warzyw w tle -->
    <div class="veggie-decorations">
      <img src="/onion.png" alt="Cebula" class="veggie veggie-1" />
      <img src="/garlic.png" alt="Czosnek" class="veggie veggie-2" />
      <img src="/tomato1.png" alt="Pomidor" class="veggie veggie-3" />
      <img src="/onion.png" alt="Cebula" class="veggie veggie-4" />
    </div>

    <div class="container">
      <h1 class="catering-title">Catering i organizacja przyjęć</h1>

      <div class="catering-content">
        <p class="catering-text catering-intro">
          Zapraszamy do skorzystania z naszych usług cateringowych oraz organizacji wydarzeń okolicznościowych.
        </p>

        <div class="catering-image">
          <img src="/13.jpg" alt="Catering - dania restauracji" />
        </div>

        <h2 class="section-title">Przyjęcia w lokalu</h2>
        <p class="catering-text">
          Nasz lokal idealnie nadaje się do organizacji wszelkiego rodzaju uroczystości — wesel, przyjęć urodzinowych, styp oraz innych spotkań rodzinnych i firmowych.
        </p>
        <p class="catering-text">
          Zapewniamy pełną obsługę kulinarną dostosowaną do charakteru wydarzenia i Państwa oczekiwań.
        </p>

        <h2 class="section-title">Dania na zamówienie</h2>
        <p class="catering-text">
          Przygotowujemy również dania na indywidualne zamówienia z możliwością odbioru osobistego w lokalu.
        </p>
        <p class="catering-text">
          W przypadku większych zamówień oferujemy dowóz pod wskazany adres.
        </p>

        <div class="catering-contact">
          <p>Szczegółowe informacje dotyczące menu, cen oraz dostępnych terminów udzielamy telefonicznie — zachęcamy do kontaktu.</p>
          <a href="tel:537660808" class="contact-phone">537 660 808</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sekcja Catering na stronie głównej
</script>

<style scoped>
.catering-section {
  padding: 6rem 2rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

/* Dekoracyjne grafiki warzyw w tle */
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
  width: 65px;
  height: auto;
  opacity: 0.25;
  animation: floatVeggie 16s infinite ease-in-out;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.12));
}

.veggie-1 {
  top: 12%;
  left: 6%;
  animation-delay: 0s;
  width: 55px;
}

.veggie-2 {
  top: 35%;
  right: 8%;
  animation-delay: 3s;
  width: 60px;
}

.veggie-3 {
  bottom: 20%;
  right: 12%;
  animation-delay: 6s;
  width: 58px;
}

.veggie-4 {
  bottom: 30%;
  left: 10%;
  animation-delay: 9s;
  width: 52px;
}

@keyframes floatVeggie {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-14px) rotate(4deg); }
  50% { transform: translateY(-7px) rotate(-4deg); }
  75% { transform: translateY(-18px) rotate(2deg); }
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.catering-title {
  font-size: 3rem;
  color: #8b5a3f;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
  letter-spacing: 2px;
}

.catering-content {
  text-align: center;
}

.catering-text {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
}

.catering-intro {
  font-size: 1.25rem;
  color: #3d3832;
  margin-bottom: 2.5rem;
}

.catering-image {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.catering-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.section-title {
  font-size: 1.5rem;
  color: #8b5a3f;
  margin: 2.5rem 0 1rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 500;
  letter-spacing: 1px;
}

.catering-contact {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(139, 90, 63, 0.3);
}

.catering-contact p {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  color: #5c5c5c;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.contact-phone {
  display: inline-block;
  font-size: 1.4rem;
  color: #8b5a3f;
  font-weight: 500;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border: 1px solid #8b5a3f;
  border-radius: 8px;
  transition: all 0.3s;
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: 1px;
}

.contact-phone:hover {
  background: #8b5a3f;
  color: #ffffff;
}

/* Responsywność */
@media (max-width: 968px) {
  .catering-section {
    padding: 5rem 2rem;
  }

  .catering-title {
    font-size: 2.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .catering-section {
    padding: 4rem 1.5rem;
  }

  .catering-title {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  .catering-text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }

  .catering-intro {
    font-size: 1.15rem;
  }

  .section-title {
    font-size: 1.3rem;
    margin: 2rem 0 0.8rem;
  }

  .catering-contact p {
    font-size: 1rem;
  }

  .contact-phone {
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .catering-section {
    padding: 3rem 1rem;
  }

  .catering-title {
    font-size: 1.9rem;
  }

  .catering-text {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .catering-intro {
    font-size: 1.05rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .contact-phone {
    font-size: 1.1rem;
  }
}
</style>
