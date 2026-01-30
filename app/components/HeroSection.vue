<template>
  <section class="hero-section">
    <!-- Tutaj możesz dodać napis, przycisk itp. – na razie puste, żeby było minimalistycznie -->
    <div class="hero-content">
      <h1 class="hero-title">Przystanek na szlaku</h1>
      <p class="hero-subtitle">Domowe smaki codziennie</p>
      <div class="container">
        <div class="button-card">
            <p class="button-label">Nasze menu dnia możesz sprawdzić</p>
            <a href="https://www.facebook.com/p/Przystanek-na-Szlaku-100091893895594/" target="_blank" rel="noopener" class="btn-bread">tutaj</a>
        </div>
      </div>
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

/* Ciemna nakładka */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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

.container {
  display: flex;
  justify-content: center;
}

.button-card {
  background: #f5f0eb;
  border-radius: 12px;
  padding: 1rem 3.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.button-label {
  color: #8b5a3f;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: 0;
  text-align: center;
}

.btn-bread {
  display: block;
  background: transparent;
  color: #5c4a3d;
  padding: 0;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: 'Playfair Display', Georgia, serif;
  text-decoration: none;
  transition: color 0.3s ease;

}

.btn-bread:hover {
  color: #8b5a3f;
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

  .button-card {
    padding: 0.85rem 2.5rem;
  }

  .btn-bread {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .button-card {
    padding: 0.75rem 2rem;
  }

  .btn-bread {
    font-size: 1rem;
  }
}
</style>