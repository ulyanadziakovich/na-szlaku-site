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
      <div class="tomato-decoration">
        <img src="/tomato.png" alt="Pomidor dekoracja" />
      </div>
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

.container { max-width: 1000px; margin: 0 auto; position: relative; z-index: 1; }

.catering-title {
  font-size: 3.5rem; color: #8b5a3f; text-align: center; margin-bottom: 1rem;
  font-family: 'Georgia', serif; font-weight: 700;
}

.tomato-decoration {
  text-align: center;
  margin: 1rem 0 2rem;
}

.tomato-decoration img {
  width: 120px;
  height: auto;
  display: inline-block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.intro-text {
  font-size: 1.6rem; color: #666666; text-align: center; margin-bottom: 4rem;
  line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;
}

.catering-image {
  width: 100%; max-width: 900px; margin: 0 auto 5rem auto;
  border-radius: 16px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.6);
  border: 3px solid #8b7f74;
}
.catering-image img { width: 100%; height: auto; display: block; object-fit: cover; }

.catering-content { max-width: 800px; margin: 0 auto; text-align: left; }

.section-title {
  font-size: 2.2rem; color: #8b5a3f; margin: 3rem 0 1.5rem;
  font-family: 'Georgia', serif; font-weight: 600;
}
.section-title:first-child { margin-top: 0; }

.section-text { font-size: 1.4rem; color: #333333; line-height: 1.8; margin-bottom: 2rem; }
.contact-info { margin: 3rem 0 2.5rem; font-weight: 500; color: #666666; }

/* Przycisk – desktop bez zmian */
.contact-phone {
  display: inline-block;
  font-size: 2.2rem; color: #ffffff; font-weight: 700; text-decoration: none;
  padding: 1.2rem 3rem; background: linear-gradient(135deg, #8b5a3f 0%, #8b7f74 100%);
  border: 2px solid #8b5a3f; border-radius: 50px; transition: all 0.3s;
  font-family: 'Georgia', serif; box-shadow: 0 8px 20px rgba(139, 90, 63, 0.4);
}
.contact-phone:hover {
  background: linear-gradient(135deg, #a67c52 0%, #8b5a3f 100%);
  transform: translateY(-3px); box-shadow: 0 12px 30px rgba(139, 90, 63, 0.6);
}

/* TYLKO MOBILE – mniejszy i wyśrodkowany przycisk */
@media (max-width: 768px) {
  .catering-content { text-align: center; }
  .phone-wrapper { text-align: center; }

  .contact-phone {
    font-size: 1.7rem;
    padding: 0.9rem 2.2rem;
    min-width: 260px;
    width: fit-content;
    margin: 0 auto;
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
  .catering-section { padding: 5rem 1.5rem; }
  .catering-title { font-size: 3rem; }
  .intro-text { font-size: 1.5rem; }
}
@media (max-width: 768px) {
  .catering-section { padding: 4rem 1.5rem; }
  .catering-title { font-size: 2.5rem; }
  .intro-text { font-size: 1.4rem; margin-bottom: 3rem; }
  .section-title { font-size: 1.9rem; }
  .section-text { font-size: 1.2rem; }
  .tomato-decoration img { width: 100px; }
}
@media (max-width: 480px) {
  .catering-section { padding: 3rem 1rem; }
  .catering-title { font-size: 2.2rem; }
  .intro-text { font-size: 1.2rem; }
  .section-title { font-size: 1.7rem; }
  .section-text { font-size: 1.1rem; }
  .tomato-decoration img { width: 80px; }
}
</style>
