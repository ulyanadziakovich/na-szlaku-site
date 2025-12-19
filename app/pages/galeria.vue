<template>
  <div class="galeria-page">
    <div class="container">
      <NuxtLink to="/" class="back-btn">← Powrót na stronę główną</NuxtLink>

      <h1 class="galeria-title">Galeria</h1>
      <p class="subtitle">Zdjęcia lokalu, dań i zadowolonych gości</p>

      <!-- Siatka kafelków -->
      <div class="gallery-grid">
        <div v-for="(image, index) in images" :key="index" class="gallery-item">
          <img :src="image.src" :alt="image.alt" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Zdjęcia galerii (bez zmian)
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
</script>

<style scoped>
.galeria-page {
  padding: 6rem 2rem;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.back-btn {
  display: inline-block;
  font-size: 1.2rem;
  color: #2a2420;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #8b5a3f 0%, #8b7f74 100%);
  border: 2px solid #8b5a3f;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(139, 90, 63, 0.3);
}

.back-btn:hover {
  background: linear-gradient(135deg, #a67c52 0%, #8b5a3f 100%);
  transform: translateX(-5px);
  box-shadow: 0 6px 20px rgba(139, 90, 63, 0.5);
}

.galeria-title {
  font-size: 3.5rem;
  color: #8b5a3f;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 1.6rem;
  color: #666666;
  margin-bottom: 4rem;
  text-align: center;
}

/* SIATKA KAFELKÓW */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
}

.gallery-item {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  border: 3px solid #8b7f74;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.gallery-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 4 / 3; /* Stała proporcja zdjęć – możesz zmienić na 1/1, 16/9 itp. */
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

  .gallery-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .galeria-page {
    padding: 4rem 1.5rem;
  }

  .galeria-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2rem;
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

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .gallery-item {
    border-radius: 12px;
  }
}
</style>
