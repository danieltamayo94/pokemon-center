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
    background: #FFFFFF;
    border-radius: 4px;
    padding: 1rem;
    min-width: 315px;
    width: auto;
    cursor: pointer;
  }
  
  .label {
    font-size: 1.375rem;
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
  