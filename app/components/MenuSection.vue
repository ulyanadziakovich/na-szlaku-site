<template>
  <section class="menu-section" id="menu">
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
        <p class="menu-text">
          Aktualne menu na dziś można zobaczyć
          <a
            href="https://www.facebook.com/p/Przystanek-na-Szlaku-100091893895594/"
            target="_blank"
            rel="noopener noreferrer"
            class="menu-link"
          >
            tutaj
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Kafelki do automatycznego przesuwania
const tiles = [
  { src: '/1j.jpg', alt: 'Kolczyk 1' },
  { src: '/2j.jpg', alt: 'Kolczyk 2' },
  { src: '/3j.jpg', alt: 'Kolczyk 3' },
  { src: '/4j.jpg', alt: 'Kolczyk 4' },
  { src: '/5j.jpg', alt: 'Kolczyk 5' },
  { src: '/6j.jpg', alt: 'Kolczyk 6' },
]
</script>

<style scoped>
.menu-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #3d3832 0%, #4a4139 50%, #3d3832 100%);
  min-height: 60vh;
  position: relative;
}

.menu-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(139, 127, 116, 0.03) 2px,
      rgba(139, 127, 116, 0.03) 4px
    );
  pointer-events: none;
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
  padding: 1.5rem;
  background: rgba(139, 127, 116, 0.15);
  border-radius: 12px;
  border: 2px solid #8b7f74;
}

.menu-text {
  font-size: 1.1rem;
  color: #f5e6d3;
  margin: 0;
  font-weight: 400;
}

.menu-link {
  color: #d4af37;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.menu-link:hover {
  color: #f5e6d3;
  border-bottom-color: #d4af37;
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
  border-color: #d4af37;
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

  .menu-text {
    font-size: 1rem;
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

  .menu-text {
    font-size: 0.95rem;
  }

  .menu-info {
    margin-top: 2rem;
    padding: 1rem;
  }
}
</style>