<template>
    <div class="list-component" @click="toggleFavorite">
      <span class="label">{{ label }}</span>
      <FavoriteButton></FavoriteButton>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  import FavoriteButton from '@/components/shared-components/FavoriteButton.vue';
  
  const props = defineProps({
    label: String,
    active: Boolean
  });
  
  const emit = defineEmits(["update:active"]);
  
  const isFavorite = ref(props.active);
  
  const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value;
    emit("update:active", isFavorite.value);
  };
  </script>
  
  <style scoped>
  .list-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 1rem;
    min-width: 315px;
    width: auto;
    cursor: pointer;
  }
  
  .label {
    font-size: 1.375rem; /* 22px en rem */
    color: #353535;
    font-family: 'Dm Sans';
  }
  
  .star-icon {
    transition: fill 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    .list-component{
        width: 570px;
    }
    
}
  </style>
  