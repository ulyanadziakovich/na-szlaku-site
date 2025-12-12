<template>
  <div class="mountains-container">
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMax meet" class="mountains-svg">
      <!-- Góry w tle - najdalsze, najciemniejsze -->
      <path
        class="mountain mountain-far-3"
        d="M 0 350 L 150 180 L 250 250 L 350 150 L 450 220 L 800 220 L 800 400 L 0 400 Z"
      />

      <!-- Góry średnie - druga warstwa -->
      <path
        class="mountain mountain-far-2"
        d="M 0 400 L 100 250 L 200 280 L 350 180 L 480 240 L 600 200 L 750 280 L 800 260 L 800 400 Z"
      />

      <!-- Góry bliżej - ciemniejsze z detalami -->
      <path
        class="mountain mountain-far-1"
        d="M 0 400 L 80 280 L 150 320 L 280 220 L 380 270 L 520 200 L 650 260 L 800 230 L 800 400 Z"
      />

      <!-- Główne góry - najbliższe, najjaśniejsze z złotymi szczytami -->
      <path
        class="mountain mountain-near"
        d="M 0 400 L 120 240 L 200 280 L 350 160 L 480 220 L 620 180 L 800 280 L 800 400 Z"
      />

      <!-- Złote szczyty - akcenty -->
      <path
        class="peak-highlight peak-1"
        d="M 340 160 L 350 160 L 360 175 L 350 165 Z"
      />
      <path
        class="peak-highlight peak-2"
        d="M 610 180 L 620 180 L 630 195 L 620 185 Z"
      />
      <path
        class="peak-highlight peak-3"
        d="M 110 240 L 120 240 L 130 255 L 120 245 Z"
      />
    </svg>
  </div>
</template>

<script setup>
// Prosty komponent z górami SVG
</script>

<style scoped>
.mountains-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.mountains-svg {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  animation: fadeInMountains 1.5s ease-out forwards;
}

/* Góry - różne odcienie brązu */
.mountain {
  transition: all 0.3s ease;
}

.mountain-far-3 {
  fill: #1a0f08;
  opacity: 0.6;
}

.mountain-far-2 {
  fill: #2c1810;
  opacity: 0.75;
}

.mountain-far-1 {
  fill: #3d2817;
  opacity: 0.85;
}

.mountain-near {
  fill: #4a3728;
  opacity: 1;
}

/* Złote szczyty */
.peak-highlight {
  fill: #d4af37;
  opacity: 0;
  animation: peakGlow 2s ease-in-out infinite alternate;
}

.peak-1 {
  animation-delay: 0s;
}

.peak-2 {
  animation-delay: 0.7s;
}

.peak-3 {
  animation-delay: 1.4s;
}

/* Animacje */
@keyframes fadeInMountains {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes peakGlow {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.8;
  }
}

/* Responsywność */
@media (max-width: 968px) {
  .mountains-svg {
    height: 80%;
  }
}

@media (max-width: 768px) {
  .mountains-container {
    display: none;
  }
}
</style>
