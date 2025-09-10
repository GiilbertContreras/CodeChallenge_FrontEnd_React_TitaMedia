import { useState, useEffect } from 'react';
export const usePokemon = () => { const [pokemons, setPokemons] = useState([]); return {pokemons, setPokemons}; };