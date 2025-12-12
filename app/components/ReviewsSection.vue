<template>
  <section class="reviews-section">
    <div class="reviews-container">
      <h2 class="reviews-title">Opinie naszych gości</h2>

      <div class="rating-summary">
        <div class="rating-score">4.8</div>
        <div class="rating-stars">★★★★★</div>
        <div class="rating-count">51 opinii</div>
      </div>

      <div class="carousel">
        <button
          class="carousel-btn prev"
          @click="prevSlide"
          :disabled="currentIndex === 0"
        >‹</button>

        <div class="carousel-track-container">
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
                    <p class="author-meta">{{ review.meta }}</p>
                  </div>
                </div>
                <div class="review-stars">★★★★★</div>
              </div>
              <div class="review-time">{{ review.time }}</div>
              <p class="review-text">{{ review.text }}</p>
            </div>
          </div>
        </div>

        <button
          class="carousel-btn next"
          @click="nextSlide"
          :disabled="currentIndex === reviews.length - 1"
        >›</button>
      </div>

      <div class="carousel-dots">
        <button
          v-for="(review, index) in reviews"
          :key="index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>

      <!-- POPRAWIONY PRZYCISK – idealnie wyśrodkowany i ładny na telefonie -->
      <a
        href="https://www.google.com/search?sa=X&sca_esv=2befaf33c0068c33&hl=pl-PL&tbm=lcl&sxsrf=AE3TifOpVDOegtRGnq5zdfFpXzuSMkWybA:1763380357066&q=Przystanek%20na%20Szlaku%20-%20bufet%20Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDYxMjQyMAMSpqamFmamlsbmGxgZXzEqBxRVVRaXJOalZivkJSoEV-UkZpcq6Coklaallij4F2TmZaYuYiVGFQAvxvjrZwAAAA&rldimm=13421206212555865937&ved=0CAgQ5foLahcKEwjIi8fej_mQAxUAAAAAHQAAAAAQCg&biw=1440&bih=812&dpr=2#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2pCdGVsZEdRMlphWjBWMldUTXpUR1ZqZHpkWFMwRRAB"
        target="_blank"
        rel="noopener noreferrer"
        class="more-reviews-btn"
      >
        Zobacz więcej opinii
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const reviews = [
  { name: 'Kamil Pergoł', initials: 'KP', meta: 'Lokalny przewodnik · 36 opinii · 89 zdjęć', time: '3 tygodnie temu', text: 'Polecam ten punkt ; Jedzenie wyśmienite. Właścicielka 100 % profesjonalizm...' },
  { name: 'Agnieszka Raś', initials: 'AR', meta: 'Lokalny przewodnik · 26 opinii · 22 zdjęcia', time: '2 miesiące temu', text: 'Pysznie i domowo :) Krótkie menu - więc łatwo mozna wybrać...' },
  { name: 'Krystyna Dumkiewicz', initials: 'KD', meta: '5 opinii · 2 zdjęcia', time: '4 tygodnie temu', text: 'Bardzo dobra domowa kuchnia! Smaczne posiłki, super doprawione...' },
  { name: 'WgwGrchw Aaa', initials: 'WA', meta: 'Lokalny przewodnik · 50 opinii · 30 zdjęć', time: '3 miesiące temu', text: 'Niby schabowy a poezja smaku. Niby poezja a orgazm na podniebieniu...' },
  { name: 'Wera F', initials: 'WF', meta: '4 opinie · 1 zdjęcie', time: 'miesiąc temu', text: 'Cudowna obsługa oraz pyszne jedzonko! Szczególnie polecam pierogi...' }
]

const nextSlide = () => { if (currentIndex.value < reviews.length - 1) currentIndex.value++ }
const prevSlide = () => { if (currentIndex.value > 0) currentIndex.value-- }
const goToSlide = (index) => { currentIndex.value = index }
</script>

<style scoped>
.reviews-section {
  background: linear-gradient(135deg, #4a4139 0%, #564d43 50%, #4a4139 100%);
  padding: 4rem 2rem;
  position: relative;
}

.reviews-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(139, 127, 116, 0.03) 10px,
      rgba(139, 127, 116, 0.03) 20px
    );
  pointer-events: none;
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;           /* ← najważniejsze dla wyśrodkowania przycisku */
  position: relative;
  z-index: 1;
}

.reviews-title {
  text-align: center;
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.rating-summary {
  text-align: center;
  margin-bottom: 3rem;
}

.rating-score { font-size: 3rem; font-weight: bold; color: #d4af37; }
.rating-stars { font-size: 1.5rem; color: #d4af37; }
.rating-count { font-size: 1rem; color: #e8d5c0; }

.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.carousel-track-container { flex: 1; overflow: hidden; }
.carousel-track { display: flex; transition: transform 0.5s ease-in-out; }

.review-card {
  min-width: 100%;
  background: linear-gradient(135deg, #3d3832 0%, #4a4139 100%);
  border-radius: 12px;
  border: 2px solid #8b7f74;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
  box-sizing: border-box;
}

/* reszta stylów bez zmian – zostawiam dla czytelności */
.review-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
.review-author { display: flex; gap: 1rem; align-items: center; }
.author-avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #d4af37 0%, #8b7f74 100%); color: #2a2420; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; flex-shrink: 0; border: 2px solid #8b7f74; }
.author-name { font-size: 1.1rem; font-weight: 600; color: #f5e6d3; margin: 0; }
.author-meta { font-size: 0.85rem; color: #e8d5c0; margin: 0.25rem 0 0; }
.review-stars { color: #d4af37; font-size: 1.2rem; }
.review-time { font-size: 0.85rem; color: #e8d5c0; margin-bottom: 1rem; }
.review-text { font-size: 1rem; line-height: 1.6; color: #f5e6d3; }

.carousel-btn {
  background: linear-gradient(135deg, #4a4139 0%, #564d43 100%);
  border: 2px solid #8b7f74;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #d4af37;
  cursor: pointer;
  transition: all 0.3s;
}
.carousel-btn:hover:not(:disabled) { background: linear-gradient(135deg, #d4af37 0%, #8b7f74 100%); color: #2a2420; border-color: #d4af37; }
.carousel-btn:disabled { opacity: 0.3; cursor: not-allowed; }

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(139, 127, 116, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}
.dot:hover { background: rgba(212, 175, 55, 0.6); }
.dot.active { background: #d4af37; width: 32px; border-radius: 6px; }

/* POPRAWIONY PRZYCISK – teraz wygląda idealnie na każdym telefonie */
.more-reviews-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #d4af37 0%, #8b7f74 100%);
  color: #2a2420;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid #d4af37;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  min-width: 280px;           /* ← stała szerokość */
  width: fit-content;
  margin: 0 auto;             /* ← idealnie wyśrodkowany */
}

.more-reviews-btn:hover {
  background: linear-gradient(135deg, #f5e6d3 0%, #d4af37 100%);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.6);
  border-color: #f5e6d3;
}

/* RESPONSIVE – przycisk pozostaje ładny */
@media (max-width: 768px) {
  .reviews-section { padding: 3rem 1rem; }
  .reviews-title { font-size: 2rem; }
  .more-reviews-btn {
    padding: 1rem 2rem;
    font-size: 1.05rem;
    min-width: 260px;
  }
}

@media (max-width: 480px) {
  .reviews-title { font-size: 1.8rem; }
  .more-reviews-btn {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    min-width: 240px;
  }
}
</style>