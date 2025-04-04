import { ref, onMounted } from "vue";

export function usePokemon() {
  const pokemonData = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const pokemonList = ref([]);

  const fetchPokemon = async (pokemonName) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) throw new Error("Pokémon no encontrado");
      pokemonData.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchInitialPokemon = async () => {
    isLoading.value = true;
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      if (!response.ok) throw new Error("Error al obtener la lista de Pokémon");
      const data = await response.json();
      pokemonList.value = data.results;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const searchPokemon = (query) => {
    if (!query) {
      fetchInitialPokemon();
      return;
    }
    pokemonList.value = pokemonList.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  onMounted(fetchInitialPokemon);

  return {
    pokemonData,
    isLoading,
    error,
    fetchPokemon,
    searchPokemon,
    pokemonList,
    fetchInitialPokemon
  };
}
