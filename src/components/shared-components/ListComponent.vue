<template>
  <div class="list-component">
    <span class="label">{{ label }}</span>
    <FavoriteButton :pokemon="pokemon" /> 
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import FavoriteButton from "@/components/shared-components/FavoriteButton.vue";

defineProps({
  label: String,
  pokemon: Object, 
});
</script>


  <style scoped>
  .list-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-white);
    border-radius: var(--radius-sm);
    padding-left: 20px;
    padding-right: 10px;
    padding-top:8px;
    padding-bottom:8px;
    min-width: 315px;
    width: auto;
    cursor: pointer;
  }
  
  .label {
    font-size: var(--font-size-lg);
    color: var(--color-dark-gray);
    font-family: var(--font-base);;
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
  