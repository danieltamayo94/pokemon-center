<template>
    <button class="favorite-button" @click.stop="togglePokemonFavorite">
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 22 22" 
        :fill="isFavorite ? '#ECA539' : '#D3D3D3'"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z" 
        />
      </svg>
    </button>
  </template>

  <script setup>
  import { defineProps, computed } from "vue";
  import { useFavoritesStore as defaultFavoritesStore } from "@/stores/useFavoritesStore";
  
  const props = defineProps({
    pokemon: Object,
    favoritesStore: {
      type: Object,
      default: () => defaultFavoritesStore()
    }
  });
  
  const isFavorite = computed(() => props.favoritesStore.isFavorite(props.pokemon));
  
  const togglePokemonFavorite = () => {
    props.favoritesStore.toggleFavorite(props.pokemon);
  };
  </script>
  

  
  <style scoped>
  .favorite-button {
    background: var(--color-gray-light);
    border: none;
    cursor: pointer;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  