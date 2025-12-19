<template>
  <section class="reviews-section">
    <div class="reviews-content">
      <div class="carousel">
        <button
          class="carousel-btn prev"
          @click="prevSlide"
        >‹</button>

        <div
          class="carousel-track-container"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div v-for="(review, index) in reviews" :key="index" class="review-card">
              <div class="review-header">
                <div class="review-author">
                  <div class="author-avatar">{{ review.initials }}</div>
                  <div class="author-info">
                    <h3 class="author-name">{{ review.name }}</h3>
                    <p class="author-meta">{{ review.time }}</p>
                  </div>
                </div>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png" alt="Google" class="google-logo" />
              </div>
              <div class="review-stars">★★★★★</div>
              <div>
                <p class="review-text" :class="{ expanded: expandedReviews[index] }">{{ review.text }}</p>
                <button
                  v-if="review.text.length > 120"
                  @click="toggleReview(index)"
                  class="show-more-btn"
                >
                  {{ expandedReviews[index] ? 'Pokaż mniej' : 'Pokaż więcej' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-btn next"
          @click="() => { nextSlide(); resetAutoplay(); }"
        >›</button>
      </div>

      <!-- Indicators/dots dla mobile -->
      <div class="carousel-indicators">
        <span
          v-for="(review, index) in reviews"
          :key="index"
          :class="['indicator-dot', { active: currentIndex === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const expandedReviews = reactive({})
let autoplayInterval = null

const reviews = [
  { name: 'Kamil Pergoł', initials: 'KP', meta: 'Lokalny przewodnik · 36 opinii · 89 zdjęć', time: '3 tygodnie temu', text: 'Polecam ten punkt ; Jedzenie wyśmienite. Właścicielka 100 % profesjonalizm...' },
  { name: 'Agnieszka Raś', initials: 'AR', meta: 'Lokalny przewodnik · 26 opinii · 22 zdjęcia', time: '2 miesiące temu', text: 'Pysznie i domowo :) Krótkie menu - więc łatwo mozna wybrać...' },
  { name: 'Krystyna Dumkiewicz', initials: 'KD', meta: '5 opinii · 2 zdjęcia', time: '4 tygodnie temu', text: 'Bardzo dobra domowa kuchnia! Smaczne posiłki, super doprawione...' },
  { name: 'WgwGrchw Aaa', initials: 'WA', meta: 'Lokalny przewodnik · 50 opinii · 30 zdjęć', time: '3 miesiące temu', text: 'Niby schabowy a poezja smaku. Niby poezja a orgazm na podniebieniu...' },
  { name: 'Wera F', initials: 'WF', meta: '4 opinie · 1 zdjęcie', time: 'miesiąc temu', text: 'Cudowna obsługa oraz pyszne jedzonko! Szczególnie polecam pierogi...' }
]

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? reviews.length - 1 : currentIndex.value - 1
  resetAutoplay()
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const toggleReview = (index) => {
  expandedReviews[index] = !expandedReviews[index]
}

// Autoplay functionality
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Przewija co 5 sekund
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// Start autoplay when component mounts
onMounted(() => {
  startAutoplay()
})

// Clean up when component unmounts
onUnmounted(() => {
  stopAutoplay()
})

// Touch handling for swipe
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      nextSlide()
    } else {
      // Swipe right - previous slide
      prevSlide()
    }
    resetAutoplay()
  }

  touchStartX = 0
  touchEndX = 0
}
</script>

<style scoped>
.reviews-section {
  position: relative;
  min-height: 70vh;
  background-image: url('/03.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 3rem 0;
}

/* Dark overlay */
.reviews-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 0;
}

.reviews-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  padding: 2rem;
}

.carousel {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.carousel-track-container {
  flex: 1;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.review-card {
  min-width: 100%;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.review-author {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e67e22;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.author-meta {
  font-size: 0.8rem;
  color: #666666;
  margin: 0.25rem 0 0;
}

.google-logo {
  height: 24px;
  width: auto;
}

.review-stars {
  color: #ffa500;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.review-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333333;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.review-text.expanded {
  display: block;
  -webkit-line-clamp: unset;
}

.show-more-btn {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0 0 0;
  margin-top: 0.5rem;
  transition: color 0.3s;
}

.show-more-btn:hover {
  color: #0d47a1;
  text-decoration: underline;
}

.carousel-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

/* Indicators/dots */
.carousel-indicators {
  display: none;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.indicator-dot.active {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.3);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .reviews-section {
    background-attachment: scroll;
    min-height: auto;
    padding: 3rem 0;
    display: flex;
    align-items: center;
  }

  .reviews-content {
    padding: 0.5rem;
    width: 100%;
  }

  .carousel {
    gap: 0;
  }

  /* UKRYJ STRZAŁKI NA MOBILCE */
  .carousel-btn {
    display: none;
  }

  .carousel-track-container {
    width: 100%;
    touch-action: pan-y;
    user-select: none;
  }

  .carousel-track {
    gap: 0;
  }

  .review-card {
    min-width: 100%;
    padding: 1.25rem;
    margin: 0;
    max-height: 70vh;
    overflow-y: auto;
  }

  .author-name {
    font-size: 0.9rem;
  }

  .author-meta {
    font-size: 0.75rem;
  }

  .review-stars {
    font-size: 1rem;
  }

  .review-text {
    font-size: 0.9rem;
    line-height: 1.5;
    -webkit-line-clamp: 8;
  }

  .show-more-btn {
    font-size: 0.85rem;
  }

  /* POKAŻ INDICATORS NA MOBILCE */
  .carousel-indicators {
    display: flex;
  }
}

@media (max-width: 480px) {
  .reviews-section {
    min-height: auto;
    padding: 2rem 0;
  }

  .reviews-content {
    padding: 0.25rem;
  }

  .carousel {
    gap: 0;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .review-card {
    padding: 1rem;
    max-height: 75vh;
  }

  .author-avatar {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .author-name {
    font-size: 0.85rem;
  }

  .author-meta {
    font-size: 0.7rem;
  }

  .review-stars {
    font-size: 0.95rem;
  }

  .review-text {
    font-size: 0.85rem;
    -webkit-line-clamp: 10;
  }

  .show-more-btn {
    font-size: 0.8rem;
  }

  .google-logo {
    height: 20px;
  }
}
</style>