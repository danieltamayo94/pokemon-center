<template>
    <transition name="fade-slide">
      <div v-if="visible" class="copied-info" role="alert">
        <p>Copied</p>
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" fill="white" stroke="black" stroke-width="4" />
          <path d="M10 60 A50 50 0 0 1 110 60" fill="red" />
          <line x1="10" y1="60" x2="110" y2="60" stroke="black" stroke-width="6" />
          <circle cx="60" cy="60" r="12" fill="white" stroke="black" stroke-width="4" />
          <circle cx="60" cy="60" r="5" fill="#e0e0e0" />
          <path d="M20 65 L55 100 L100 30" stroke="green" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </transition>
  </template>
  
  <script setup>
    import { defineProps } from "vue";

  defineProps({
    visible: Boolean
  });
  </script>
  
  <style scoped>
  .copied-info {
    position: fixed;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-white);
    width: 100px;
    padding: 12px 8px;
    height: 40px;
    border-radius: var(--radius-sm);
    display: flex;
    gap: 4px;
    align-items: center;
    opacity: 1;
    z-index: 100;
  }
  
  .copied-info p {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-md);
    font-family: var(--font-base);
  }
  
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.4s ease;
  }
  
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>
  