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
  margin-bottom: 2rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #8b5a3f 0%, #a67c52 100%);
  color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.back-btn:hover {
  background: linear-gradient(135deg, #a67c52 0%, #8b5a3f 100%);
  transform: translateX(-5px);
  box-shadow: 0 6px 20px rgba(139, 90, 63, 0.5);
}

.galeria-title {
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: #666666 ;
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
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .galeria-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  /* Karuzela pozioma na tablet/mobile */
  .gallery-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0 1.5rem 1rem 1.5rem;
    margin: 0 -1.5rem;
    scrollbar-width: none;
  }

  .gallery-grid::-webkit-scrollbar {
    display: none;
  }

  .gallery-item {
    flex: 0 0 75%;
    scroll-snap-align: center;
    border-radius: 14px;
  }
}

@media (max-width: 480px) {
  .galeria-page {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .galeria-title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  /* Karuzela pozioma na mobile */
  .gallery-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0 1rem 1rem 1rem;
    margin: 0 -1rem;
    scrollbar-width: none;
  }

  .gallery-grid::-webkit-scrollbar {
    display: none;
  }

  .gallery-item {
    flex: 0 0 85%;
    scroll-snap-align: center;
    border-radius: 12px;
  }

  .gallery-item img {
    aspect-ratio: 4 / 3;
  }
}
</style>
