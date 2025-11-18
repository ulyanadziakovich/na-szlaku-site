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
        >
          ‹
        </button>

        <div class="carousel-track-container">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="review-card"
            >
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
        >
          ›
        </button>
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
  {
    name: 'Kamil Pergoł',
    initials: 'KP',
    meta: 'Lokalny przewodnik · 36 opinii · 89 zdjęć',
    time: '3 tygodnie temu',
    text: 'Polecam ten punkt ; Jedzenie wyśmienite. Właścicielka 100 % profesjonalizm. I wszystko świeże na bieżąco robione. Miejsce z bardzo dużym potencjałem. Zorganizowane wesele dla 30 osób w tym miejscu było strzałem w 10 mega kameralne. Jedzenie jak w domu u babci !!!! Współpraca wyśmienita właścicielka jak i pomoc kuchenna zrobiła robotę ja będac na wielu imprezach które organizowałem tu naprawdę byłem zaskoczony profesjonalizmem.'
  },
  {
    name: 'Agnieszka Raś',
    initials: 'AR',
    meta: 'Lokalny przewodnik · 26 opinii · 22 zdjęcia',
    time: '2 miesiące temu',
    text: 'Pysznie i domowo :) Krótkie menu - więc łatwo mozna wybrać. Kotleta ogromny, surówka świeżutka, pyszne ziemniaczki :) POLECAM :)'
  },
  {
    name: 'Krystyna Dumkiewicz',
    initials: 'KD',
    meta: '5 opinii · 2 zdjęcia',
    time: '4 tygodnie temu',
    text: 'Bardzo dobra domowa kuchnia! Smaczne posiłki, super doprawione, duże porcje. Facet może się naprawdę najeść. Do tego bardzo miła obsługa. Gorąco polecam!!!'
  },
  {
    name: 'WgwGrchw Aaa',
    initials: 'WA',
    meta: 'Lokalny przewodnik · 50 opinii · 30 zdjęć',
    time: '3 miesiące temu',
    text: 'Niby schabowy a poezja smaku. Niby poezja a orgazm na podniebieniu. Nie pamiętam kiedy takie soczyste mięso jadłem. Kompot do tego piękne wypełnienie. Kawa jak za czasów babci kiedy na fajerce robiła. Polecam miejsce. Lepiej się nie da zjeść 🙂🙂🙂🙂'
  },
  {
    name: 'Wera F',
    initials: 'WF',
    meta: '4 opinie · 1 zdjęcie',
    time: 'miesiąc temu',
    text: 'Cudowna obsługa oraz pyszne jedzonko! Szczególnie polecam pierogi z sosem czosnkowym.. Atmosfera bardzo miła, chętnie tu wrócę 😊'
  }
]

const nextSlide = () => {
  if (currentIndex.value < reviews.length - 1) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.reviews-section {
  background-color: white;
  padding: 4rem 2rem;
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
}

.reviews-title {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.rating-summary {
  text-align: center;
  margin-bottom: 3rem;
}

.rating-score {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.rating-stars {
  font-size: 1.5rem;
  color: #fbbf24;
  margin-bottom: 0.5rem;
}

.rating-count {
  font-size: 1rem;
  color: #666;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
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
  background: #f9fafb;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
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
  background: rgb(86, 81, 68);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.author-meta {
  font-size: 0.85rem;
  color: #666;
  margin: 0.25rem 0 0 0;
}

.review-stars {
  color: #fbbf24;
  font-size: 1.2rem;
}

.review-time {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
}

.review-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.carousel-btn {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  flex-shrink: 0;
}

.carousel-btn:hover:not(:disabled) {
  background: rgb(86, 81, 68);
  color: white;
  border-color: rgb(86, 81, 68);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d1d5db;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.dot:hover {
  background: #9ca3af;
}

.dot.active {
  background: rgb(86, 81, 68);
  width: 32px;
  border-radius: 6px;
}

.more-reviews-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: rgb(86, 81, 68);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.more-reviews-btn:hover {
  background: rgb(70, 65, 55);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 968px) {
  .reviews-section {
    padding: 3.5rem 1.5rem;
  }

  .reviews-title {
    font-size: 2.2rem;
  }

  .rating-score {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .reviews-section {
    padding: 3rem 0.75rem;
  }

  .reviews-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .rating-summary {
    margin-bottom: 2rem;
  }

  .rating-score {
    font-size: 2.2rem;
  }

  .rating-stars {
    font-size: 1.3rem;
  }

  .carousel {
    gap: 0.5rem;
  }

  .review-card {
    padding: 1.2rem;
    margin: 0 0.25rem;
  }

  .review-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .review-author {
    width: 100%;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .author-name {
    font-size: 0.95rem;
  }

  .author-meta {
    font-size: 0.75rem;
    word-break: break-word;
  }

  .review-stars {
    align-self: flex-start;
  }

  .review-text {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .carousel-btn {
    width: 44px;
    height: 44px;
    font-size: 1.6rem;
  }

  .more-reviews-btn {
    padding: 1rem 2rem;
    font-size: 1.05rem;
    width: auto;
    max-width: calc(100% - 1.5rem);
    text-align: center;
    margin-left: 15%;
    
  }
}

@media (max-width: 480px) {
  .reviews-section {
    padding: 2.5rem 0.5rem;
  }

  .reviews-title {
    font-size: 1.8rem;
  }

  .carousel {
    gap: 0.25rem;
  }

  .carousel-btn {
    width: 36px;
    height: 36px;
    font-size: 1.3rem;
  }

  .review-card {
    padding: 1rem;
    margin: 0;
  }

  .author-avatar {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .author-name {
    font-size: 0.9rem;
  }

  .author-meta {
    font-size: 0.7rem;
  }

  .review-text {
    font-size: 0.85rem;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .dot.active {
    width: 24px;
  }
}
</style>
