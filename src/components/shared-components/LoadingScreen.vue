<template>
  <div class="loading-screen" :class="{ 'fade-out': hasEnded }">
    <div class="animation-wrapper" :class="{ zooming: showFlares }">
      <template v-if="showFlares">
        <div class="smoke red left" style="bottom: 25px; left: 42%;" :key="'red-left-'+showFlares"></div>
        <div class="smoke blue right" style="bottom: 30px; left: 58%;" :key="'blue-right-'+showFlares"></div>
        <div class="smoke red center" style="bottom: 20px; left: 44%;" :key="'red-center-'+showFlares"></div>
        <div class="smoke blue center" style="bottom: 26px; left: 56%;" :key="'blue-center-'+showFlares"></div>
      </template>
      <img
        src="/img/PokeBall.svg"
        alt="Pokeball"
        class="pokeball"
        @animationend="handlePokeballAnimationEnd"
      />
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showFlares = ref(false);
const hasEnded = ref(false);

const handlePokeballAnimationEnd = (event) => {
  if (event.animationName.includes('pulseDrop')) {
    showFlares.value = true;

    setTimeout(() => {
      hasEnded.value = true;
    }, 1200);
  }
};
</script>

<style>
.loading-screen {
  position: fixed;
  inset: 0;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

.fade-out {
  opacity: 0;
  visibility: hidden;
}

.animation-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: center;
}

.animation-wrapper.zooming {
  animation: zoomIn 1.2s ease-out forwards;
}

.pokeball {
  width: 80px;
  height: 80px;
  animation: pulseDrop 2.8s ease-out forwards;
  transform-origin: center;
  z-index: 3;
}

.shadow {
  width: 60px;
  height: 12px;
  background: var(--color-shadow);
  border-radius: var( --radius-lg);
  margin-top: 70px;
  animation: shadowDrop 2.8s ease-out forwards;
  z-index: 1;
}

.smoke {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: var(--radius-lg);
  opacity: 0.6;
  filter: blur(15px);
  pointer-events: none;
  z-index: 2;
  animation-fill-mode: forwards;
  transform: translateX(-50%);
}

.smoke.red {
  background: var(--color-primary);
}

.smoke.blue {
  background: var(--color-blue);
}

.smoke.left {
  animation: smokeLeft 0.8s ease-out forwards;
}

.smoke.right {
  animation: smokeRight 1.2s ease-out forwards;
}

.smoke.center {
  animation: smokeUp 1.2s ease-out forwards;
}

@keyframes zoomIn {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1.15); }
}

@keyframes smokeUp {
  0% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.5; }
  50% { transform: translateX(-50%) translateY(-10px) scale(1.2); opacity: 0.6; }
  100% { transform: translateX(-50%) translateY(-30px) scale(1.4); opacity: 0; }
}

@keyframes smokeLeft {
  0% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.5; }
  50% { transform: translateX(-80%) translateY(-10px) scale(1.2); opacity: 0.6; }
  100% { transform: translateX(-120%) translateY(-30px) scale(1.4); opacity: 0; }
}

@keyframes smokeRight {
  0% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.5; }
  50% { transform: translateX(-20%) translateY(-10px) scale(1.2); opacity: 0.6; }
  100% { transform: translateX(20%) translateY(-30px) scale(1.4); opacity: 0; }
}

@keyframes pulseDrop {
  0% { transform: translateY(0) scale(1) rotate(0); }
  10% { transform: translateY(-15px) scale(1.05) rotate(10deg); }
  20% { transform: translateY(0) scale(1) rotate(0); }
  30% { transform: translateY(-12px) scale(1.05) rotate(-10deg); }
  40% { transform: translateY(0) scale(1) rotate(0); }
  50% { transform: translateY(-8px) scale(1.03) rotate(5deg); }
  60% { transform: translateY(0) scale(1) rotate(0); }
  70% {
    transform: translateY(100px) scaleY(0.8);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  80% { transform: translateY(70px) scaleY(1.1); }
  90% { transform: translateY(75px) scaleY(0.95); }
  100% { transform: translateY(70px) scaleY(1); }
}

@keyframes shadowDrop {
  0%, 60% { transform: scale(1); }
  70% { transform: scale(1.5, 0.8); }
  80% { transform: scale(1.2, 1); }
  90% { transform: scale(1.3, 1); }
  100% { transform: scale(1.4, 1); }
}
</style>
