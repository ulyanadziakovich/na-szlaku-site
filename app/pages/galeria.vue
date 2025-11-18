<template>
  <div class="galeria-page">
    <div class="container">
      <h1 class="galeria-title">Galeria</h1>
      <p class="subtitle">Zdjęcia lokalu, dań i zadowolonych gości</p>

      <!-- Karuzela -->
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)

// Zdjęcia galerii
const images = [
  { src: '/01.jpg', alt: 'Danie 1' },
  { src: '/02.jpg', alt: 'Danie 2' },
  { src: '/03.jpg', alt: 'Danie 3' },
  { src: '/04.jpg', alt: 'Danie 4' },
  { src: '/05.jpg', alt: 'Danie 5' },
  { src: '/06.jpg', alt: 'Danie 6' },
  { src: '/07.jpg', alt: 'Danie 7' },
  { src: '/08.jpg', alt: 'Danie 8' },
  { src: '/09.jpg', alt: 'Danie 9' },
  { src: '/10.jpg', alt: 'Danie 10' },
  { src: '/11.jpg', alt: 'Danie 11' },
  { src: '/12.jpg', alt: 'Danie 12' },
]

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0
    ? images.length - 1
    : currentIndex.value - 1
}
</script>

<style scoped>
.galeria-page {
  padding: 6rem 2rem;
  min-height: 100vh;
  background-color: #faf9f7;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.galeria-title {
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
}

.subtitle {
  font-size: 1.6rem;
  color: #555;
  margin-bottom: 4rem;
  text-align: center;
}

/* KARUZELA */
.carousel {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.carousel-track-container {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  width: 100%;
  flex-shrink: 0;
}

.carousel-slide img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  display: block;
}

/* Strzałki */
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
  transition: background 0.3s;
}

.nav-btn:hover {
  background: rgba(0,0,0,0.8);
}

.prev { left: 20px; }
.next { right: 20px; }

/* Kropki */
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
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #c9a96e;
}

/* Responsywność */
@media (max-width: 968px) {
  .galeria-page {
    padding: 5rem 1.5rem;
  }

  .galeria-title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 3.5rem;
  }
}

@media (max-width: 768px) {
  .galeria-page {
    padding: 4rem 1.5rem;
  }

  .galeria-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }

  .carousel-slide img {
    height: 60vh;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
    font-size: 1.6rem;
  }

  .prev { left: 10px; }
  .next { right: 10px; }

  .carousel-dots {
    padding: 1.2rem 0;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
}

@media (max-width: 480px) {
  .galeria-page {
    padding: 3rem 1rem;
  }

  .galeria-title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .carousel {
    border-radius: 12px;
  }

  .carousel-slide img {
    height: 50vh;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.4rem;
  }

  .prev { left: 8px; }
  .next { right: 8px; }

  .carousel-dots {
    padding: 1rem 0;
  }

  .dot {
    width: 9px;
    height: 9px;
    margin: 0 4px;
  }
}
</style>
