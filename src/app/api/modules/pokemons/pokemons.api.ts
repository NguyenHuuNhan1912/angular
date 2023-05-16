import publicClient from "../../config/pokemons.api";

const pokemonsApi = {
    getAll: () => publicClient.get(),
}

export default pokemonsApi;