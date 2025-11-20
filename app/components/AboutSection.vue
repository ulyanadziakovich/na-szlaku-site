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
  background: linear-gradient(135deg, #f9f7f4 0%, #ede8e0 50%, #f9f7f4 100%);
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
  background: #1a4d2e;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  opacity: 0.15;
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

.about-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-title {
  font-size: 3.5rem;
  color: #1a4d2e;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  font-weight: 700;
}

.about-subtitle {
  font-size: 1.8rem;
  color: #555;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Georgia', serif;
}

.about-text {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2.5rem;
  text-align: left;
}

.section-heading {
  font-size: 2.2rem;
  color: #1a4d2e;
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
  color: #1a4d2e;
  margin-top: 4rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Georgia', serif;
  font-style: italic;
  padding-top: 3rem;
  border-top: 2px solid rgba(26, 77, 46, 0.2);
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
