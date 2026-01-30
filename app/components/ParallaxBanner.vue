<template>
  <div class="parallax-banner"></div>
</template>

<style scoped>
.parallax-banner {
  position: relative;
  height: 400px;
  background-image: url('/10.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:
    inset 0 10px 30px rgba(0, 0, 0, 0.1),
    inset 0 -10px 30px rgba(0, 0, 0, 0.1);
}

.parallax-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .parallax-banner {
    height: 300px;
    background-attachment: scroll;
  }
}

@media (max-width: 480px) {
  .parallax-banner {
    height: 250px;
    background-attachment: scroll;
  }
}
</style>
