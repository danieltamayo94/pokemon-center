<template>
  <div class="main">
    <form @submit.prevent="handleSubmit">
      <SearchField v-model="searchQuery" @input="searchPokemon(searchQuery)" />
    </form>

    <section class="found-lists" v-if="!showFavorites">
  <template v-if="pokemonList.length > 0">
    <ListComponent 
      v-for="(pokemon, index) in pokemonList" 
      :key="index" 
      :label="pokemon.name" 
      :pokemon="pokemon"
      @click="fetchPokemon(pokemon.name)" 
    />
  </template>
  <template v-else>
    <div class="no-results">
      <h2>Uh-oh!</h2>
      <p>You look lost on your journey!</p>
      <ButtonComponent  @click="resetSearch" label="Go back home"></ButtonComponent>
    </div>
  </template>
</section>

<section class="found-lists" v-else>
  <template v-if="favoritesStore.favorites.length > 0">
    <ListComponent 
      v-for="(pokemon, index) in favoritesStore.favorites" 
      :key="index" 
      :label="pokemon.name"
      :pokemon="pokemon" 
      @click="fetchPokemon(pokemon.name)" 
    />
  </template>
</section>



    <PokeCard v-if="pokemonData" :imageSrc="pokemonData.sprites?.front_default" :name="pokemonData.name"
      :weight="pokemonData.weight" :height="pokemonData.height" :types="pokemonData.types?.map(t => t.type.name)"
      @close="handleClose" />

    <p v-if="isLoading">Cargando...</p>
    <p v-if="error">{{ error }}</p>
  </div>

  <BottomBar @toggle-favorites="toggleFavoritesView" />

</template>

<script setup>
import { ref } from "vue";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import SearchField from '@/components/shared-components/SearchField.vue';
import BottomBar from '@/components/shared-components/BottomBar.vue';
import ListComponent from '@/components/shared-components/ListComponent.vue';
import ButtonComponent from '@/components/shared-components/ButtonComponent.vue';
import PokeCard from '@/components/shared-components/PokeCard.vue';
import { usePokemon } from '@/composables/usePokemon';

const searchQuery = ref("");
const showFavorites = ref(false);
const favoritesStore = useFavoritesStore();
const { pokemonData, isLoading, error, fetchPokemon, searchPokemon, pokemonList, fetchInitialPokemon } = usePokemon();

const handleSubmit = () => {
  if (!searchQuery.value) return;
  fetchPokemon(searchQuery.value);
};

const handleClose = () => {
  pokemonData.value = null;
};

const toggleFavoritesView = (value) => {
  showFavorites.value = value;
};

const resetSearch = () => {
  searchQuery.value = ""; 
  fetchInitialPokemon(); 
};
</script>



<style>
.main {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-input {
  margin: auto;
  margin-top: 35px;
}

.list-component {
  margin-left: auto;
  margin-right: auto;
}

.found-lists {
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
}

.no-results{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:50px;
}

.no-results h2{
  color:#353535;
  font-size: 2.25rem;
  font-weight: 700;
  font-family: 'Lato';
  letter-spacing: 0%;
}

.no-results p{
  font-family: 'Lato';
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%;
  margin-top: 10px;
}

.no-results .button-componente{
  margin-top:25px;
}

@media (min-width: 768px) {
  .found-lists {
    width: 570px;
  }
}
</style>