import axios from 'axios';

const baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';

const publicClient: any = axios.create({
    baseURL
});

export default publicClient;