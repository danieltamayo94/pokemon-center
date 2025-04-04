<template>
  <div class="main">
    <form @submit.prevent="handleSubmit">
      <SearchField v-model="searchQuery" @input="searchPokemon(searchQuery)" />
    </form>

    <section class="found-lists">
      <ListComponent
        v-for="(pokemon, index) in pokemonList"
        :key="index"
        :label="pokemon.name"
        @click="fetchPokemon(pokemon.name)"
      />
    </section>

    <PokeCard 
      v-if="pokemonData"
      :imageSrc="pokemonData.sprites?.front_default"
      :name="pokemonData.name"
      :weight="pokemonData.weight"
      :height="pokemonData.height"
      :types="pokemonData.types?.map(t => t.type.name)"
      @close="handleClose"
    />

    <p v-if="isLoading">Cargando...</p>
    <p v-if="error">{{ error }}</p>
  </div>

  <BottomBar />
</template>

<script setup>
import { ref } from "vue";
import SearchField from '@/components/shared-components/SearchField.vue';
import BottomBar from '@/components/shared-components/BottomBar.vue';
import ListComponent from '@/components/shared-components/ListComponent.vue';
import PokeCard from '@/components/shared-components/PokeCard.vue';
import { usePokemon } from '@/composables/usePokemon';

// Estados
const searchQuery = ref("");
const { pokemonData, isLoading, error, fetchPokemon, searchPokemon, pokemonList } = usePokemon();

const handleSubmit = () => {
  if (!searchQuery.value) return;
  fetchPokemon(searchQuery.value);
};

const handleClose = () => {
  pokemonData.value = null;
};
</script>

  
  <style>
    .main{
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .search-input{
        margin: auto;
        margin-top:35px;
    }

    .list-component{
      margin-left: auto;
      margin-right: auto;
    }

    .found-lists{
      margin:40px auto;
      display: flex;
      flex-direction: column;
      gap:10px;
      width:80%;
    }

    @media (min-width: 768px) {
      .found-lists{
        width: 570px;
      }
    }

  </style>
  