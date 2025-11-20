<template>
  <section class="catering-page">
    <div class="container">
      <NuxtLink to="/" class="back-btn">← Powrót na stronę główną</NuxtLink>

      <h1 class="catering-title">Catering i organizacja przyjęć</h1>
      <p class="intro-text">
        Zapraszamy do skorzystania z naszych usług cateringowych oraz organizacji wydarzeń okolicznościowych.
      </p>

      <div class="catering-image">
        <img src="/13.jpg" alt="Catering - dania restauracji" />
      </div>

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

        <div class="phone-wrapper">
          <a href="tel:537660808" class="contact-phone">537 660 808</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// bez zmian
</script>

<style scoped>
.catering-page {
  padding: 6rem 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f7f4 0%, #ede8e0 50%, #f9f7f4 100%);
}

.container { max-width: 1000px; margin: 0 auto; }

.back-btn {
  display: inline-block;
  font-size: 1.2rem;
  color: #1a4d2e;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background: white;
  border: 2px solid #1a4d2e;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
  margin-bottom: 2rem;
}

.back-btn:hover {
  background: #1a4d2e;
  color: white;
  transform: translateX(-5px);
}

.catering-title {
  font-size: 3.5rem; color: #1a4d2e; text-align: center; margin-bottom: 2rem;
  font-family: 'Georgia', serif; font-weight: 700;
}

.intro-text {
  font-size: 1.6rem; color: #555; text-align: center; margin-bottom: 4rem;
  line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;
}

.catering-image {
  width: 100%; max-width: 900px; margin: 0 auto 5rem auto;
  border-radius: 16px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}
.catering-image img { width: 100%; height: auto; display: block; object-fit: cover; }

.catering-content { max-width: 800px; margin: 0 auto; text-align: left; }

.section-title {
  font-size: 2.2rem; color: #1a4d2e; margin: 3rem 0 1.5rem;
  font-family: 'Georgia', serif; font-weight: 600;
}
.section-title:first-child { margin-top: 0; }

.section-text { font-size: 1.4rem; color: #444; line-height: 1.8; margin-bottom: 2rem; }
.contact-info { margin: 3rem 0 2.5rem; font-weight: 500; color: #333; }

/* Przycisk – desktop bez zmian */
.contact-phone {
  display: inline-block;
  font-size: 2.2rem; color: #1a4d2e; font-weight: 700; text-decoration: none;
  padding: 1.2rem 3rem; background: linear-gradient(135deg, rgba(26,77,46,0.1) 0%, rgba(45,122,79,0.15) 100%);
  border: 2px solid #1a4d2e; border-radius: 50px; transition: all 0.3s;
  font-family: 'Georgia', serif; box-shadow: 0 8px 20px rgba(26,77,46,0.15);
}
.contact-phone:hover {
  background: linear-gradient(135deg, #1a4d2e 0%, #2d7a4f 100%);
  color: white; transform: translateY(-3px); box-shadow: 0 12px 30px rgba(26,77,46,0.25);
}

/* TYLKO MOBILE – mniejszy i wyśrodkowany przycisk */
@media (max-width: 768px) {
  .catering-content { text-align: center; }
  .phone-wrapper { text-align: center; }

  .contact-phone {
    font-size: 1.7rem;           /* mniejszy tekst */
    padding: 0.9rem 2.2rem;       /* mniejszy padding */
    min-width: 260px;             /* stała szerokość – wygląda elegancko */
    width: fit-content;
    margin: 0 auto;               /* idealnie wyśrodkowany */
    display: inline-flex;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .contact-phone {
    font-size: 1.5rem;
    padding: 0.8rem 1.8rem;
    min-width: 240px;
  }
}

/* reszta responsywności bez zmian */
@media (max-width: 968px) {
  .catering-page { padding: 5rem 1.5rem; }
  .catering-title { font-size: 3rem; }
  .intro-text { font-size: 1.5rem; }
}
@media (max-width: 768px) {
  .catering-page { padding: 4rem 1.5rem; }
  .catering-title { font-size: 2.5rem; }
  .intro-text { font-size: 1.4rem; margin-bottom: 3rem; }
  .section-title { font-size: 1.9rem; }
  .section-text { font-size: 1.2rem; }
}
@media (max-width: 480px) {
  .catering-page { padding: 3rem 1rem; }
  .catering-title { font-size: 2.2rem; }
  .intro-text { font-size: 1.2rem; }
  .section-title { font-size: 1.7rem; }
  .section-text { font-size: 1.1rem; }
}
</style>