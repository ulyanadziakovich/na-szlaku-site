<template>
  <div class="plants-container">
    <!-- Roślina 1 - duża -->
    <div class="plant-wrapper plant-1">
      <svg width="180" height="550" viewBox="0 0 180 550" preserveAspectRatio="xMidYMax meet">
        <path class="stem stem-1" d="M 90 550 L 90 50" />

        <!-- Liście -->
        <path class="leaf leaf-left delay-1" d="M 90 520 Q 55 510 45 490 Q 60 480 90 500 Z"/>
        <path class="leaf leaf-right delay-1" d="M 90 520 Q 125 510 135 490 Q 120 480 90 500 Z"/>

        <path class="leaf leaf-left delay-2" d="M 90 450 Q 50 440 35 415 Q 55 405 90 430 Z"/>
        <path class="leaf leaf-right delay-2" d="M 90 450 Q 130 440 145 415 Q 125 405 90 430 Z"/>

        <path class="leaf leaf-left delay-3" d="M 90 380 Q 45 370 30 340 Q 50 330 90 360 Z"/>
        <path class="leaf leaf-right delay-3" d="M 90 380 Q 135 370 150 340 Q 130 330 90 360 Z"/>

        <path class="leaf leaf-left delay-4" d="M 90 310 Q 50 300 35 270 Q 55 260 90 290 Z"/>
        <path class="leaf leaf-right delay-4" d="M 90 310 Q 130 300 145 270 Q 125 260 90 290 Z"/>

        <path class="leaf leaf-left delay-5" d="M 90 240 Q 55 230 45 205 Q 60 195 90 220 Z"/>
        <path class="leaf leaf-right delay-5" d="M 90 240 Q 125 230 135 205 Q 120 195 90 220 Z"/>

        <path class="leaf leaf-left delay-6" d="M 90 170 Q 50 160 35 135 Q 55 125 90 150 Z"/>
        <path class="leaf leaf-right delay-6" d="M 90 170 Q 130 160 145 135 Q 125 125 90 150 Z"/>

        <path class="leaf leaf-left delay-7" d="M 90 100 Q 55 90 45 70 Q 60 60 90 80 Z"/>
        <path class="leaf leaf-right delay-7" d="M 90 100 Q 125 90 135 70 Q 120 60 90 80 Z"/>

        <path class="top-leaf delay-6" d="M 90 60 Q 70 40 75 20 Q 90 30 90 60 Z"/>
        <path class="top-leaf delay-6" d="M 90 60 Q 110 40 105 20 Q 90 30 90 60 Z"/>

        <circle class="berry delay-7" cx="90" cy="50" r="4"/>
        <circle class="berry delay-7" cx="82" cy="58" r="3"/>
        <circle class="berry delay-7" cx="98" cy="58" r="3"/>
      </svg>
    </div>

    <!-- Roślina 2 - średnia -->
    <div class="plant-wrapper plant-2">
      <svg width="140" height="470" viewBox="0 0 140 470" preserveAspectRatio="xMidYMax meet">
        <path class="stem stem-2" d="M 70 470 L 70 40" />

        <path class="leaf leaf-left delay-2" d="M 70 440 Q 40 430 30 410 Q 45 400 70 420 Z"/>
        <path class="leaf leaf-right delay-2" d="M 70 440 Q 100 430 110 410 Q 95 400 70 420 Z"/>

        <path class="leaf leaf-left delay-3" d="M 70 370 Q 35 360 25 335 Q 40 325 70 350 Z"/>
        <path class="leaf leaf-right delay-3" d="M 70 370 Q 105 360 115 335 Q 100 325 70 350 Z"/>

        <path class="leaf leaf-left delay-4" d="M 70 300 Q 40 290 30 265 Q 45 255 70 280 Z"/>
        <path class="leaf leaf-right delay-4" d="M 70 300 Q 100 290 110 265 Q 95 255 70 280 Z"/>

        <path class="leaf leaf-left delay-5" d="M 70 230 Q 45 220 35 200 Q 50 190 70 210 Z"/>
        <path class="leaf leaf-right delay-5" d="M 70 230 Q 95 220 105 200 Q 90 190 70 210 Z"/>

        <path class="leaf leaf-left delay-6" d="M 70 160 Q 40 150 30 130 Q 45 120 70 140 Z"/>
        <path class="leaf leaf-right delay-6" d="M 70 160 Q 100 150 110 130 Q 95 120 70 140 Z"/>

        <path class="leaf leaf-left delay-7" d="M 70 90 Q 45 80 35 65 Q 50 55 70 70 Z"/>
        <path class="leaf leaf-right delay-7" d="M 70 90 Q 95 80 105 65 Q 90 55 70 70 Z"/>

        <path class="top-leaf delay-6" d="M 70 50 Q 55 35 58 18 Q 70 25 70 50 Z"/>
        <path class="top-leaf delay-6" d="M 70 50 Q 85 35 82 18 Q 70 25 70 50 Z"/>

        <circle class="berry delay-7" cx="70" cy="42" r="3"/>
      </svg>
    </div>

    <!-- Roślina 3 - mała -->
    <div class="plant-wrapper plant-3">
      <svg width="100" height="380" viewBox="0 0 100 380" preserveAspectRatio="xMidYMax meet">
        <path class="stem stem-3" d="M 50 380 L 50 35" />

        <path class="leaf leaf-left delay-3" d="M 50 330 Q 25 320 18 300 Q 30 290 50 310 Z"/>
        <path class="leaf leaf-right delay-3" d="M 50 330 Q 75 320 82 300 Q 70 290 50 310 Z"/>

        <path class="leaf leaf-left delay-4" d="M 50 270 Q 28 260 20 240 Q 32 230 50 250 Z"/>
        <path class="leaf leaf-right delay-4" d="M 50 270 Q 72 260 80 240 Q 68 230 50 250 Z"/>

        <path class="leaf leaf-left delay-5" d="M 50 210 Q 30 200 22 180 Q 34 170 50 190 Z"/>
        <path class="leaf leaf-right delay-5" d="M 50 210 Q 70 200 78 180 Q 66 170 50 190 Z"/>

        <path class="leaf leaf-left delay-6" d="M 50 150 Q 28 140 20 120 Q 32 110 50 130 Z"/>
        <path class="leaf leaf-right delay-6" d="M 50 150 Q 72 140 80 120 Q 68 110 50 130 Z"/>

        <path class="leaf leaf-left delay-7" d="M 50 90 Q 30 80 22 65 Q 34 55 50 70 Z"/>
        <path class="leaf leaf-right delay-7" d="M 50 90 Q 70 80 78 65 Q 66 55 50 70 Z"/>

        <path class="top-leaf delay-6" d="M 50 45 Q 38 32 40 18 Q 50 23 50 45 Z"/>
        <path class="top-leaf delay-6" d="M 50 45 Q 62 32 60 18 Q 50 23 50 45 Z"/>

        <circle class="berry delay-7" cx="50" cy="38" r="2.5"/>
      </svg>
    </div>

    <!-- Roślina 4 - średnia-mała -->
    <div class="plant-wrapper plant-4">
      <svg width="120" height="420" viewBox="0 0 120 420" preserveAspectRatio="xMidYMax meet">
        <path class="stem stem-4" d="M 60 420 L 60 38" />

        <path class="leaf leaf-left delay-2" d="M 60 370 Q 33 360 25 340 Q 38 330 60 350 Z"/>
        <path class="leaf leaf-right delay-2" d="M 60 370 Q 87 360 95 340 Q 82 330 60 350 Z"/>

        <path class="leaf leaf-left delay-3" d="M 60 305 Q 30 295 20 270 Q 35 260 60 285 Z"/>
        <path class="leaf leaf-right delay-3" d="M 60 305 Q 90 295 100 270 Q 85 260 60 285 Z"/>

        <path class="leaf leaf-left delay-4" d="M 60 240 Q 35 230 25 205 Q 40 195 60 220 Z"/>
        <path class="leaf leaf-right delay-4" d="M 60 240 Q 85 230 95 205 Q 80 195 60 220 Z"/>

        <path class="leaf leaf-left delay-5" d="M 60 175 Q 38 165 30 145 Q 43 135 60 155 Z"/>
        <path class="leaf leaf-right delay-5" d="M 60 175 Q 82 165 90 145 Q 77 135 60 155 Z"/>

        <path class="leaf leaf-left delay-6" d="M 60 110 Q 35 100 25 80 Q 40 70 60 90 Z"/>
        <path class="leaf leaf-right delay-6" d="M 60 110 Q 85 100 95 80 Q 80 70 60 90 Z"/>

        <path class="top-leaf delay-6" d="M 60 48 Q 46 34 48 18 Q 60 24 60 48 Z"/>
        <path class="top-leaf delay-6" d="M 60 48 Q 74 34 72 18 Q 60 24 60 48 Z"/>

        <circle class="berry delay-7" cx="60" cy="40" r="3"/>
        <circle class="berry delay-7" cx="54" cy="46" r="2"/>
        <circle class="berry delay-7" cx="66" cy="46" r="2"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
// Prosty komponent bez dodatkowej logiki
</script>

<style scoped>
.plants-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0 2rem 0 2rem;
  gap: 1rem;
}

.plant-wrapper {
  position: relative;
  opacity: 0;
  animation: fadeInPlant 1s ease-out forwards;
  display: block;
  line-height: 0;
}

.plant-1 {
  animation-delay: 0.2s;
}

.plant-2 {
  animation-delay: 0.4s;
}

.plant-3 {
  animation-delay: 0.6s;
}

.plant-4 {
  animation-delay: 0.8s;
}

svg {
  overflow: visible;
  filter: drop-shadow(0 2px 8px rgba(26, 77, 46, 0.1));
  display: block;
  vertical-align: bottom;
}

/* Łodygi */
.stem {
  stroke: #1a4d2e;
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
}

.stem-1 {
  animation: growStem 2.5s ease-in-out forwards;
}

.stem-2 {
  animation: growStem 2.2s ease-in-out 0.3s forwards;
}

.stem-3 {
  animation: growStem 1.8s ease-in-out 0.5s forwards;
}

.stem-4 {
  animation: growStem 2s ease-in-out 0.4s forwards;
}

/* Liście */
.leaf {
  fill: #1a4d2e;
  opacity: 0;
  transform-origin: center;
}

.leaf-left {
  animation: growLeafLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.leaf-right {
  animation: growLeafRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.top-leaf {
  fill: #1a4d2e;
  opacity: 0;
  transform-origin: center bottom;
  animation: growTopLeaf 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Jagody */
.berry {
  fill: #5a3825;
  opacity: 0;
  animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

/* Opóźnienia */
.delay-1 { animation-delay: 1s; }
.delay-2 { animation-delay: 1.3s; }
.delay-3 { animation-delay: 1.6s; }
.delay-4 { animation-delay: 1.9s; }
.delay-5 { animation-delay: 2.2s; }
.delay-6 { animation-delay: 2.5s; }
.delay-7 { animation-delay: 2.8s; }

/* Animacje */
@keyframes fadeInPlant {
  to {
    opacity: 1;
  }
}

@keyframes growStem {
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes growLeafLeft {
  0% {
    opacity: 0;
    transform: scale(0) rotate(45deg) translateX(-10px);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) rotate(-5deg) translateX(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg) translateX(0);
  }
}

@keyframes growLeafRight {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-45deg) translateX(10px);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) rotate(5deg) translateX(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg) translateX(0);
  }
}

@keyframes growTopLeaf {
  0% {
    opacity: 0;
    transform: scale(0) translateY(-10px);
  }
  60% {
    opacity: 1;
    transform: scale(1.15) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsywność */
@media (max-width: 768px) {
  .plants-container {
    padding: 0 1rem 0 1rem;
    gap: 0.5rem;
  }

  .plant-1 svg {
    width: 140px;
    height: 440px;
  }

  .plant-2 svg {
    width: 110px;
    height: 370px;
  }

  .plant-3 svg {
    width: 80px;
    height: 300px;
  }

  .plant-4 svg {
    width: 95px;
    height: 330px;
  }
}
</style>
