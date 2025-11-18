<template>
  <section class="catering-page">
    <div class="container">
      <h1 class="catering-title">Catering i organizacja przyjęć</h1>
      <p class="intro-text">
        Zapraszamy do skorzystania z naszych usług cateringowych oraz organizacji wydarzeń okolicznościowych.
      </p>

      <!-- Zdjęcie -->
      <div class="catering-image">
        <img src="/13.jpg" alt="Catering - dania restauracji" />
      </div>

      <!-- Treść główna -->
      <div class="catering-content">
        <h2 class="section-title">Przyjęcia w lokalu</h2>
        <p class="section-text">
          Nasz lokal idealnie nadaje się do organizacji wszelkiego rodzaju uroczystości — wesel,
          przyjęć urodzinowych, styp oraz innych spotkań rodzinnych i firmowych. Zapewniamy pełną
          obsługę kulinarną dostosowaną do charakteru wydarzenia i Państwa oczekiwań.
        </p>

        <h2 class="section-title">Dania na zamówienie</h2>
        <p class="section-text">
          Przygotowujemy również dania na indywidualne zamówienia z możliwością odbioru osobistego
          w lokalu. W przypadku większych zamówień oferujemy dowóz pod wskazany adres.
        </p>

        <p class="section-text contact-info">
          Szczegółowe informacje dotyczące menu, cen oraz dostępnych terminów udzielamy telefonicznie
          — zachęcamy do kontaktu.
        </p>

        <a href="tel:537660808" class="contact-phone">537 660 808</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nic nie trzeba – Nuxt sam to obsłuży
</script>

<style scoped>
.catering-page {
  padding: 6rem 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f7f4 0%, #ede8e0 50%, #f9f7f4 100%);
  position: relative;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.catering-title {
  font-size: 3.5rem;
  color: #1a4d2e;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Georgia', serif;
  font-weight: 700;
}

.intro-text {
  font-size: 1.6rem;
  color: #555;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.catering-image {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 5rem auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.catering-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.catering-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.section-title {
  font-size: 2.2rem;
  color: #1a4d2e;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  font-weight: 600;
}

.section-title:first-child {
  margin-top: 0;
}

.section-text {
  font-size: 1.4rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-info {
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  color: #333;
}

.contact-phone {
  display: inline-block;
  font-size: 2.2rem;
  color: #1a4d2e;
  font-weight: 700;
  text-decoration: none;
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, rgba(26, 77, 46, 0.1) 0%, rgba(45, 122, 79, 0.15) 100%);
  border: 2px solid #1a4d2e;
  border-radius: 50px;
  transition: all 0.3s;
  font-family: 'Georgia', serif;
  box-shadow: 0 8px 20px rgba(26, 77, 46, 0.15);
  margin-top: 1rem;
}

.contact-phone:hover {
  background: linear-gradient(135deg, #1a4d2e 0%, #2d7a4f 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(26, 77, 46, 0.25);
}

/* Responsywność */
@media (max-width: 968px) {
  .catering-page {
    padding: 5rem 1.5rem;
  }

  .catering-title {
    font-size: 3rem;
  }

  .intro-text {
    font-size: 1.5rem;
  }

  .catering-image {
    margin-bottom: 4rem;
  }
}

@media (max-width: 768px) {
  .catering-page {
    padding: 4rem 1.5rem;
  }

  .catering-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .intro-text {
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }

  .catering-image {
    margin-bottom: 3.5rem;
  }

  .section-title {
    font-size: 1.9rem;
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
  }

  .section-text {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.8rem;
  }

  .contact-info {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  .contact-phone {
    font-size: 1.9rem;
    padding: 1.1rem 2.5rem;
    min-height: 56px;
  }
}

@media (max-width: 480px) {
  .catering-page {
    padding: 3rem 1rem;
  }

  .catering-title {
    font-size: 2.2rem;
  }

  .intro-text {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .catering-image {
    margin-bottom: 3rem;
    border-radius: 12px;
  }

  .section-title {
    font-size: 1.7rem;
    margin-top: 2rem;
  }

  .section-text {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .contact-phone {
    font-size: 1.7rem;
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;
    max-width: 100%;
  }
}
</style>