<template>
  <div :class="['main', { 'open-modal': pokemonData }]">
    <form @submit.prevent="handleSubmit">
      <SearchField v-model="searchQuery" />
    </form>

    <section class="found-lists">
      <template v-if="filteredList.length > 0">
        <ListComponent v-for="(pokemon, index) in filteredList" :key="index" :label="pokemon.name" :pokemon="pokemon"
          @click="fetchPokemon(pokemon.name)" />
      </template>
      <template v-else>
        <div class="no-results">
          <h2>Uh-oh!</h2>
          <p>You look lost on your journey!</p>
          <ButtonComponent @click="resetSearch" label="Go back home" />
        </div>
      </template>
    </section>

    <BottomBar @toggle-favorites="toggleFavoritesView" />
    <div v-if="pokemonData" class="overlay"></div>
    <transition name="fade">
      <PokeCard v-if="pokemonData" :imageSrc="pokemonData.sprites?.front_default" :name="pokemonData.name"
        :weight="pokemonData.weight" :height="pokemonData.height" :types="pokemonData.types?.map(t => t.type.name)"
        @close="handleClose" />
    </transition>
    <LoadingScreen />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import SearchField from '@/components/shared-components/SearchField.vue';
import BottomBar from '@/components/shared-components/BottomBar.vue';
import ListComponent from '@/components/shared-components/ListComponent.vue';
import ButtonComponent from '@/components/shared-components/ButtonComponent.vue';
import PokeCard from '@/components/shared-components/PokeCard.vue';
import LoadingScreen from '@/components/shared-components/LoadingScreen.vue';
import { usePokemon } from '@/composables/usePokemon';

const searchQuery = ref("");
const showFavorites = ref(false);
const favoritesStore = useFavoritesStore();
const { pokemonData, fetchPokemon, pokemonList, fetchInitialPokemon } = usePokemon();


const handleSubmit = () => {
  if (!searchQuery.value) return;
  fetchPokemon(searchQuery.value);
};


const handleClose = () => {
  pokemonData.value = null;
};

const toggleFavoritesView = (value) => {
  showFavorites.value = value;
  searchQuery.value = "";
};

const resetSearch = () => {
  searchQuery.value = "";
  showFavorites.value = false;
  fetchInitialPokemon();
};


const filteredList = computed(() => {
  const query = searchQuery.value.toLowerCase();

  if (showFavorites.value) {
    return favoritesStore.favorites.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query)
    );
  } else {
    return pokemonList.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query)
    );
  }
});
</script>



<style>
.main {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}


.open-modal {
  height: 100vh;
  overflow: hidden;
  position: fixed;
  width: 100%;
  overscroll-behavior: none;
}

.overlay {
  background: var(--color-overlay);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 6;
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
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin-bottom: 144px;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.no-results h2 {
  color: var(--color-dark-gay);
  font-size: var(--font-size-xx-lg);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-base);
  letter-spacing: 0%;
}

.no-results p {
  font-family: var(--font-base);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-base);
  line-height: 150%;
  margin-top: 10px;
}

.no-results .button-componente {
  margin-top: 25px;
}

@media (min-width: 768px) {
  .found-lists {
    width: 570px;
  }
}
</style>