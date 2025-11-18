<template>
  <section class="hero-section">
    <!-- Tutaj możesz dodać napis, przycisk itp. – na razie puste, żeby było minimalistycznie -->
    <div class="hero-content">
      <h1 class="hero-title">Przystanek na szlaku</h1>
      <p class="hero-subtitle">Domowe smaki codziennie</p>
      <a href="#menu" class="hero-btn">Zobacz menu</a>
    </div>
  </section>
</template>

<script setup>
// nic nie potrzeba w script setup – czysto prezentacyjne
</script>

<style scoped>
.hero-section {
  /* Zdjęcie z folderu public → dostęp przez /hero.jpg */
  background-image: url('/hero1.jpg');
  background-size: cover;              /* zdjęcie wypełnia całą sekcję */
  background-position: center center;  /* wyśrodkowane */
  background-repeat: no-repeat;
  background-attachment: fixed;        /* opcjonalnie: efekt parallax (na mobile może być wyłączony) */

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;                  /* potrzebne do nakładki */
}

/* Ciemna nakładka – żeby tekst był dobrze czytelny na jasnym zdjęciu */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.45);     /* półprzezroczysty czarny – dostosuj do potrzeb */
  z-index: 1;
}

/* Treść na środku */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #c9a96e;
  color: white;
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  min-width: 200px;
  text-align: center;
}

.hero-btn:hover {
  background-color: #d4b580;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

/* Responsywność */
@media (max-width: 968px) {
  .hero-section {
    background-attachment: scroll;
  }

  .hero-content {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem 1rem;
  }

  .hero-title {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .hero-btn {
    padding: 1rem 0,7rem;
    font-size: 1.05rem;
    min-height: 48px;
    min-width: 180px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-btn {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    min-width: 160px;
  }
}
</style>