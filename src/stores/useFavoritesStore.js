import { defineStore } from "pinia";
import { ref} from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const isFavorite = (pokemon) => 
    favorites.value.some((p) => p.name === pokemon.name);

  const toggleFavorite = (pokemon) => {
    const index = favorites.value.findIndex((p) => p.name === pokemon.name);
    if (index === -1) {
      favorites.value.push(pokemon);
    } else {
      favorites.value.splice(index, 1);
    }
  };

  return {
    favorites,
    isFavorite, 
    toggleFavorite,
  };
});
