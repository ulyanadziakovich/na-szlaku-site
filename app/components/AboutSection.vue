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
      <h1 class="about-title">O nas</h1>
      <h2 class="about-subtitle">Witamy w sercu kulinarnych tradycji</h2>

      <p class="about-text">
        Nasza restauracja to miejsce, gdzie pasja do gotowania spotyka się z szacunkiem dla lokalnych smaków.
        W naszym podejściu cechuje nas wierność tradycji, rodzinna atmosfera oraz dbałość o jakość dań, przysłowiowo mówiąc "gotujemy jak dla siebie"
      </p>

      <h3 class="section-heading">Filozofia</h3>
      <p class="about-text">
        Wierzymy, że najlepsze potrawy powstają z najświeższych, sezonowych składników.
        Współpracujemy z lokalnymi dostawcami i producentami, wspierając regionalne gospodarstwa.
        Każdy talerz to opowieść o smakach naszego regionu.
      </p>

      <h3 class="section-heading">Atmosfera</h3>
      <p class="about-text">
        Ciepłe wnętrze, rodzinna atmosfera i obsługa z pasją – u nas poczujesz się jak w domu.
        Niezależnie czy przychodzisz na romantyczną kolację, rodzinne spotkanie czy spotkanie ze znajomymi,
        stworzymy dla Ciebie wyjątkowe chwile.
      </p>

      <p class="about-invitation">Zapraszamy do wspólnego stołu!</p>
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
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-title {
  font-size: 3.5rem;
  color: #8b5a3f;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.about-subtitle {
  font-size: 1.8rem;
  color: #666666;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Georgia', serif;
}

.about-text {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 2.5rem;
  text-align: left;
}

.section-heading {
  font-size: 2.2rem;
  color: #8b5a3f;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  font-weight: 600;
}

.section-heading:first-of-type {
  margin-top: 2rem;
}

.about-invitation {
  font-size: 1.8rem;
  color: #8b5a3f;
  margin-top: 4rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Georgia', serif;
  font-style: italic;
  padding-top: 3rem;
  border-top: 2px solid rgba(139, 90, 63, 0.4);
}

/* Responsywność */
@media (max-width: 968px) {
  .about-section {
    padding: 5rem 2rem;
  }

  .about-title {
    font-size: 3rem;
  }

  .about-subtitle {
    font-size: 1.6rem;
  }

  .about-container {
    max-width: 800px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1.5rem;
  }

  .about-title {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  .about-subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  .about-text {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .section-heading {
    font-size: 1.9rem;
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
  }

  .about-invitation {
    font-size: 1.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
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
    font-size: 2.2rem;
  }

  .about-subtitle {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .about-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.8rem;
  }

  .section-heading {
    font-size: 1.7rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .about-invitation {
    font-size: 1.3rem;
    margin-top: 2.5rem;
    padding-top: 1.5rem;
  }

  .leaf {
    width: 18px;
    height: 18px;
  }
}
</style>
