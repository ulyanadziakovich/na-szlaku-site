<template>
  <section class="about-section">
    <!-- Animowane listki -->
    <div class="floating-leaves">
      <div class="leaf leaf-1"></div>
      <div class="leaf leaf-2"></div>
      <div class="leaf leaf-3"></div>
      <div class="leaf leaf-4"></div>
      <div class="leaf leaf-5"></div>
    </div>

    <!-- Dekoracyjne grafiki warzyw -->
    <div class="veggie-decorations">
      <img src="/tomato1.png" alt="Pomidor" class="veggie veggie-1" />
      <img src="/onion.png" alt="Cebula" class="veggie veggie-2" />
      <img src="/garlic.png" alt="Czosnek" class="veggie veggie-3" />
      <img src="/tomato.png" alt="Pomidor" class="veggie veggie-4" />
      <img src="/onion.png" alt="Cebula" class="veggie veggie-5" />
    </div>

    <div class="about-container">
      <h1 class="about-title">Witajcie u nas</h1>

      <div class="about-content">
        <p class="about-text about-intro">
          To miejsce nazywa się Przystanek na Szlaku – i dokładnie tak się u nas czuje: jak przystanek, na którym warto na chwilę zwolnić, usiąść i zjeść prawdziwy, domowy obiad.
        </p>

        <p class="about-text">
          Prowadzi je Elżbieta – z sercem otwartym i z rękami, które od lat gotują tak, jakby to był obiad dla najbliższych. Bez pośpiechu, bez udziwnień, po prostu smacznie i po ludzku.
        </p>

        <p class="about-text about-highlight">
          U nas są tylko domowe obiady – takie, po których człowiek wstaje syty i uśmiechnięty.
        </p>

        <p class="about-text">
          Pachnie tu zupą, kotletem schodzącym z patelni, ziemniakami prosto z garnka i surówką, którą ktoś właśnie wymieszał.
        </p>

        <p class="about-text">
          Ciepło drewna, delikatne światło, spokojne rozmowy przy stolikach i ta miła pewność, że nikt nie patrzy na zegarek.
        </p>

        <p class="about-text">
          Obsługa pamięta, co lubicie, a czego wolicie unikać – po prostu z wyczuciem i życzliwością.
        </p>

        <p class="about-text">
          Nie znajdziecie tu wymyślnych dań ani napięcia „jak w restauracji". Znajdziecie za to smak domu, spokój i to uczucie, że ktoś naprawdę się o Was postarał.
        </p>

        <p class="about-text">
          Przyjdźcie w porze obiadowej – na spokojny posiłek w ciągu dnia, na rodzinny obiad albo po prostu dlatego, że macie ochotę na coś swojskiego i dobrego.
        </p>

        <div class="about-promise">
          <p>Nie obiecujemy fajerwerków.</p>
          <p>Obiecujemy, że będzie smacznie, ciepło i tak przyjemnie, że szkoda będzie Wam wstawać od stołu.</p>
        </div>

        <p class="about-text about-welcome">
          Czekamy na Was z otwartymi ramionami i z garnkiem na ogniu.
        </p>

        <div class="about-signature">
          <p>Z całego serca,</p>
          <p class="signature-name">Elżbieta i cały nasz mały zespół</p>
          <p class="signature-place">Przystanek na Szlaku</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Prosty komponent bez dodatkowej logiki
</script>

<style scoped>
.about-section {
  background: #ffffff;
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Animowane listki w tle */
.floating-leaves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.leaf {
  position: absolute;
  width: 30px;
  height: 30px;
  background: #8b5a3f;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  opacity: 0.2;
  animation: float 15s infinite ease-in-out;
}

.leaf-1 {
  top: 10%;
  left: 15%;
  animation-delay: 0s;
  animation-duration: 18s;
}

.leaf-2 {
  top: 60%;
  left: 85%;
  animation-delay: 3s;
  animation-duration: 20s;
  transform: rotate(45deg);
}

.leaf-3 {
  top: 30%;
  left: 75%;
  animation-delay: 6s;
  animation-duration: 16s;
  transform: rotate(-30deg);
}

.leaf-4 {
  top: 80%;
  left: 20%;
  animation-delay: 9s;
  animation-duration: 22s;
  transform: rotate(60deg);
}

.leaf-5 {
  top: 45%;
  left: 10%;
  animation-delay: 12s;
  animation-duration: 19s;
  transform: rotate(-45deg);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(10deg);
  }
  50% {
    transform: translateY(-10px) rotate(-10deg);
  }
  75% {
    transform: translateY(-30px) rotate(5deg);
  }
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
  opacity: 0.3;
  animation: float 12s infinite ease-in-out;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.veggie-1 {
  top: 15%;
  right: 10%;
  animation-delay: 0s;
  animation-duration: 14s;
}

.veggie-2 {
  top: 40%;
  left: 5%;
  animation-delay: 2s;
  animation-duration: 16s;
  width: 50px;
}

.veggie-3 {
  top: 70%;
  right: 15%;
  animation-delay: 4s;
  animation-duration: 13s;
  width: 55px;
}

.veggie-4 {
  top: 25%;
  left: 80%;
  animation-delay: 6s;
  animation-duration: 15s;
  width: 50px;
}

.veggie-5 {
  top: 85%;
  left: 25%;
  animation-delay: 8s;
  animation-duration: 17s;
  width: 45px;
}

.about-container {
  width: 100%;
  max-width: 900px;
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.about-title {
  font-size: 3rem;
  color: #8b5a3f;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
  letter-spacing: 2px;
}

.about-content {
  text-align: center;
}

.about-text {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
}

.about-intro {
  font-size: 1.25rem;
  color: #3d3832;
  margin-bottom: 2rem;
}

.about-highlight {
  font-size: 1.3rem;
  color: #8b5a3f;
  font-style: italic;
  margin: 2.5rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(139, 90, 63, 0.2);
  border-bottom: 1px solid rgba(139, 90, 63, 0.2);
}

.about-promise {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(139, 90, 63, 0.05);
  border-radius: 8px;
}

.about-promise p {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.2rem;
  color: #3d3832;
  margin: 0.5rem 0;
  line-height: 1.8;
}

.about-promise p:first-child {
  font-weight: 500;
  color: #8b5a3f;
}

.about-welcome {
  font-size: 1.2rem;
  color: #8b5a3f;
  margin-top: 2rem;
  font-style: italic;
}

.about-signature {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(139, 90, 63, 0.3);
}

.about-signature p {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  color: #5c5c5c;
  margin: 0.3rem 0;
}

.signature-name {
  font-size: 1.25rem !important;
  color: #8b5a3f !important;
  font-weight: 500;
  margin-top: 0.5rem !important;
}

.signature-place {
  font-style: italic;
  letter-spacing: 1px;
}

/* Responsywność */
@media (max-width: 968px) {
  .about-section {
    padding: 5rem 2rem;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .about-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1.5rem;
  }

  .about-title {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  .about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }

  .about-intro {
    font-size: 1.15rem;
  }

  .about-highlight {
    font-size: 1.15rem;
    margin: 2rem 0;
    padding: 1rem 0;
  }

  .about-promise {
    padding: 1.5rem;
    margin: 2rem 0;
  }

  .about-promise p {
    font-size: 1.1rem;
  }

  .leaf {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 3rem 1rem;
  }

  .about-title {
    font-size: 1.9rem;
  }

  .about-text {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .about-intro {
    font-size: 1.05rem;
  }

  .about-highlight {
    font-size: 1.05rem;
  }

  .about-promise p {
    font-size: 1rem;
  }

  .about-signature p {
    font-size: 1rem;
  }

  .signature-name {
    font-size: 1.1rem !important;
  }

  .leaf {
    width: 18px;
    height: 18px;
  }
}
</style>
