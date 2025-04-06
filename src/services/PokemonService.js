import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

export const PokemonService = {
  async getPokemon(name) {
    try {
      const response = await axios.get(`${API_URL}pokemon/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      throw error;
    }
  }
};
