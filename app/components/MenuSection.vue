<template>
  <section class="menu-section" id="menu">
    <div class="container">

      <!-- Nagłówek + informacja o Facebooku -->
      <div class="menu-header">
        <h2 class="menu-title">Menu</h2>
        
        <div class="menu-info">
          <p class="menu-text">
            W tym momencie aktualne menu<br>
            można zobaczyć na naszym Facebooku
          </p>
          
          <a 
            href="https://www.facebook.com/profile.php?id=100091893895594&sk=about&locale=pl_PL" 
            target="_blank" 
            rel="noopener noreferrer"
            class="facebook-btn"
          >
            <svg class="fb-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Przejdź do Facebooka
          </a>
        </div>
      </div>

      <!-- Karuzela – tylko te 7 zdjęć -->
      <div class="carousel">
        <button @click="prevSlide" class="nav-btn prev" aria-label="Poprzednie zdjęcie">❮</button>

        <div class="carousel-track-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, index) in images" :key="index" class="carousel-slide">
              <img :src="image.src" :alt="image.alt" loading="lazy" />
            </div>
          </div>
        </div>

        <button @click="nextSlide" class="nav-btn next" aria-label="Następne zdjęcie">❯</button>

        <!-- Kropki nawigacyjne -->
        <div class="carousel-dots">
          <span
            v-for="n in images.length"
            :key="n"
            :class="{ active: currentIndex === n - 1 }"
            @click="currentIndex = n - 1"
            class="dot"
          ></span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)

const images = [
  { src: '/05.jpg', alt: 'Danie 1' },
  { src: '/06.jpg', alt: 'Danie 2' },
  { src: '/05.jpg', alt: 'Danie 3' },
  { src: '/06.jpg', alt: 'Danie 4' },
  { src: '/05.jpg', alt: 'Danie 5' },
  { src: '/06.jpg', alt: 'Danie 6' },
  // dodaj kolejne jeśli chcesz
]

let autoPlay = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? images.length - 1 
    : currentIndex.value - 1
}

onMounted(() => {
  autoPlay = setInterval(nextSlide, 4500)
})

onUnmounted(() => {
  if (autoPlay) clearInterval(autoPlay)
})
</script>

<style scoped>
.menu-section {
  padding: 6rem 2rem;
  background-color: #faf9f7;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.menu-header {
  text-align: center;
  margin-bottom: 5rem;
}

.menu-title {
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 2.5rem;
  font-weight: 700;
}

/* POPRAWIONY BLOK – teraz wszystko jest idealnie wyśrodkowane */
.menu-info {
  background-color: white;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;           /* ← idealnie wyśrodkuje wszystko */
  gap: 2rem;
}

.menu-text {
  font-size: 1.6rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
  font-weight: 500;
}

.facebook-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #1877f2;
  color: white;
  padding: 1rem 2.2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.25rem;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(24,119,242,0.3);
  min-width: 280px;              /* ← stała szerokość na desktopie */
}

.facebook-btn:hover {
  background-color: #166fe5;
  transform: translateY(-3px);
}

.fb-icon {
  width: 28px;
  height: 28px;
  fill: currentColor;
}

/* KARUZELA – bez zmian */
.carousel {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.carousel-track-container { overflow: hidden; }
.carousel-track { display: flex; transition: transform 0.6s ease-in-out; }
.carousel-slide { min-width: 100%; flex-shrink: 0; }
.carousel-slide img { width: 100%; height: 65vh; object-fit: cover; display: block; }

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
}
.nav-btn:hover { background: rgba(0,0,0,0.8); }
.prev { left: 20px; }
.next { right: 20px; }

.carousel-dots {
  text-align: center;
  padding: 1.5rem 0;
}
.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}
.dot.active { background-color: #c9a96e; }

/* RESPONSIVE – teraz przycisk jest idealny na telefonie */
@media (max-width: 768px) {
  .menu-section { padding: 4rem 1.5rem; }
  .menu-title { font-size: 2.8rem; }
  .menu-text { font-size: 1.4rem; }

  .facebook-btn {
    padding: 1rem 2rem;
    font-size: 1.15rem;
    min-width: 260px;           /* ← ładna stała szerokość */
    width: auto;                /* ← nie rozciąga się */
  }

  .fb-icon { width: 24px; height: 24px; }
  .carousel-slide img { height: 50vh; }
  .nav-btn { width: 44px; height: 44px; font-size: 1.6rem; }
  .prev { left: 10px; }
  .next { right: 10px; }
}

@media (max-width: 480px) {
  .menu-title { font-size: 2.3rem; }
  .menu-text { font-size: 1.3rem; }
  .facebook-btn {
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
    min-width: 240px;
  }
  .carousel-slide img { height: 40vh; }
  .nav-btn { width: 40px; height: 40px; font-size: 1.4rem; }
}
</style>