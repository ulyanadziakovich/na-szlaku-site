<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-overlay" @click="dismiss">
      <div class="modal-card" @click.stop>
        <a
          href="https://www.bieszczadzkietropy.pl/"
          target="_blank"
          rel="noopener noreferrer"
          class="modal-link"
        >
          <img src="/baner-tropy.png" alt="Konkurs – wygraj darmowy nocleg w Bieszczadach" class="modal-img" />
          <div class="modal-cta">
            <span>WEŹ UDZIAŁ</span>
            <span class="cta-arrow">→</span>
          </div>
        </a>
        <button class="modal-close" @click="dismiss" aria-label="Zamknij">×</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem('gazeta-konkurs-v2')) {
    visible.value = true
  }
})

const dismiss = () => {
  visible.value = false
  localStorage.setItem('gazeta-konkurs-v2', '1')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(3px);
}

.modal-card {
  position: relative;
  max-width: 680px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
}

.modal-link {
  display: block;
  text-decoration: none;
  cursor: pointer;
  position: relative;
}

.modal-link:hover .modal-cta {
  background: #b8942a;
  letter-spacing: 4px;
}

.modal-img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.4s ease;
}

.modal-link:hover .modal-img {
  transform: scale(1.02);
}

.modal-cta {
  position: absolute;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  background: #d4af37;
  color: #1a1a0e;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 0.85rem 2.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
  transition: background 0.25s ease, letter-spacing 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.cta-arrow {
  font-size: 1.1rem;
  transition: transform 0.25s ease;
}

.modal-link:hover .cta-arrow {
  transform: translateX(4px);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 1.4rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 0;
  transition: background 0.2s;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: scale(0.92);
  opacity: 0;
}

@media (max-width: 480px) {
  .modal-cta {
    font-size: 0.85rem;
    padding: 0.7rem 1.75rem;
    letter-spacing: 2px;
    bottom: 1.25rem;
  }
}
</style>
