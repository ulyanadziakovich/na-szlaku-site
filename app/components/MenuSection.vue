<template>
  <section class="menu-section" id="menu">
    <!-- Dekoracyjne grafiki warzyw -->
    <div class="veggie-decorations">
      <img src="/garlic.png" alt="Czosnek" class="veggie veggie-1" />
      <img src="/tomato1.png" alt="Pomidor" class="veggie veggie-2" />
      <img src="/onion.png" alt="Cebula" class="veggie veggie-3" />
    </div>

    <div class="container">
      <!-- Sekcja z płynnie przesuwającymi się kafelkami -->
      <div class="tiles-section">
        <div class="tiles-scroll-container">
          <div class="tiles-track">
            <!-- Pierwsze kopiowanie kafelków dla ciągłości -->
            <div v-for="(tile, index) in [...tiles, ...tiles]" :key="`tile-${index}`" class="tile">
              <img :src="tile.src" :alt="tile.alt" />
            </div>
          </div>
        </div>
      </div>

      <!-- Informacja o aktualnym menu -->
      <div class="menu-info">
        <h3 class="menu-heading">Sprawdź dzisiejsze menu!</h3>
        <p class="menu-text">
          Codziennie przygotowujemy nowe, świeże dania.
          Aktualne propozycje na dziś znajdziesz na naszym
          <a
            href="https://www.facebook.com/p/Przystanek-na-Szlaku-100091893895594/"
            target="_blank"
            rel="noopener noreferrer"
            class="menu-link"
          >
            Facebooku
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Kafelki do automatycznego przesuwania
const tiles = [
  { src: '/1j.jpg', alt: 'Danie 1' },
  { src: '/2j.jpg', alt: 'Danie 2' },
  { src: '/3j.jpg', alt: 'Danie 3' },
  { src: '/4j.jpg', alt: 'Danie 4' },
  { src: '/5j.jpg', alt: 'Danie 5' },
  { src: '/6j.jpg', alt: 'Danie 6' },
]
</script>

<style scoped>
.menu-section {
  padding: 4rem 2rem;
  background: #ffffff;
  min-height: 60vh;
  position: relative;
  overflow: hidden;
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
  width: 70px;
  height: auto;
  opacity: 0.25;
  animation: floatVeggie 15s infinite ease-in-out;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15));
}

.veggie-1 {
  top: 10%;
  left: 8%;
  animation-delay: 0s;
  width: 60px;
}

.veggie-2 {
  top: 60%;
  right: 12%;
  animation-delay: 3s;
  width: 65px;
}

.veggie-3 {
  bottom: 15%;
  left: 15%;
  animation-delay: 6s;
  width: 55px;
}

@keyframes floatVeggie {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(5deg); }
  50% { transform: translateY(-8px) rotate(-5deg); }
  75% { transform: translateY(-20px) rotate(3deg); }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* SEKCJA Z AUTOMATYCZNIE PRZESUWAJĄCYMI SIĘ KAFELKAMI */
.tiles-section {
  padding: 2rem 0;
}

/* Informacja o aktualnym menu */
.menu-info {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem 1.5rem;
  background: rgba(139, 127, 116, 0.15);
  border-radius: 12px;
  border: 2px solid #8b7f74;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.15);
}

.menu-heading {
  font-size: 2rem;
  color: #8b5a3f;
  margin: 0 0 1rem 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.menu-text {
  font-size: 1.2rem;
  color: #666666;
  margin: 0;
  font-weight: 400;
  line-height: 1.6;
}

.menu-link {
  color: #8b5a3f;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.menu-link:hover {
  color: #6b4a33;
  border-bottom-color: #8b5a3f;
}

.tiles-scroll-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.tiles-track {
  display: flex;
  gap: 2rem;
  animation: scroll 30s linear infinite;
  width: fit-content;
}

/* Pauzowanie animacji po najechaniu myszką */
.tiles-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.tile {
  flex-shrink: 0;
  width: 350px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5);
  border: 3px solid #8b7f74;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.tile:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.7);
  border-color: #8b5a3f;
}

.tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .menu-section { padding: 3rem 1.5rem; }

  .tile {
    width: 280px;
    height: 280px;
  }

  .tiles-track {
    gap: 1.5rem;
  }

  .menu-heading {
    font-size: 1.6rem;
  }

  .menu-text {
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .menu-section { padding: 2rem 1rem; }

  .tile {
    width: 240px;
    height: 240px;
  }

  .tiles-track {
    gap: 1rem;
    animation: scroll 25s linear infinite;
  }

  .menu-heading {
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }

  .menu-text {
    font-size: 0.95rem;
  }

  .menu-info {
    margin-top: 2rem;
    padding: 1.5rem 1rem;
  }
}
</style>