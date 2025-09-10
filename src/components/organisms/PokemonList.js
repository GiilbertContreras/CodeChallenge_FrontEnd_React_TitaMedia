import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import PokemonCard from './../molecules/PokemonCard';
import { GET_POKEMONS } from '../../graphql/queries';
import './PokemonList.css';

export default function PokemonList({ additionalPokemons = [], orderBy, search, showFavorites, onSelectPokemon }) {
  const { loading, error, data } = useQuery(GET_POKEMONS, { variables: { limit: 1500 } });
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  if (loading) return <p className="status-message">Cargando Pokémon...</p>;
  if (error) return <p className="status-message">Error: {error.message}</p>;

  // Combinar API + Pokémon agregados
  const allPokemons = [...additionalPokemons, ...data.pokemon_v2_pokemon];

  // Ordenar
  const sortedPokemons = [...allPokemons].sort((a, b) => 
    orderBy === 'name' ? a.name.localeCompare(b.name) : a.id - b.id
  );

  // Filtrar
  const filteredPokemons = sortedPokemons.filter(p => {
    if (!search) return true;
    const q = search.toLowerCase().trim();
    if (q.startsWith('#')) return p.id === parseInt(q.slice(1), 10);
    return p.name.toLowerCase().includes(q);
  });

  const finalPokemons = showFavorites ? filteredPokemons.filter(p => favorites.includes(p.id)) : filteredPokemons;

  const totalPokemons = finalPokemons.length;
  const totalPages = Math.ceil(totalPokemons / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPokemons = finalPokemons.slice(startIndex, startIndex + itemsPerPage);

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <div className="pokemon-list-container">
      {/* Encabezado */}
      <div className="list-header">
        <div className="headerSummary">
          <h6>Total Pokémon: {totalPokemons}</h6>
          <h6>Total Pokémon (API): {data.pokemon_v2_pokemon.length}</h6>
          <h6>Total Pokémon (Creados): {additionalPokemons.length}</h6>
        </div>
      </div>

      {/* Grid de Pokémon */}
      <div className="pokemon-grid">
        {currentPokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={() => onSelectPokemon(pokemon)}
            isFavorite={favorites.includes(pokemon.id)}
            onToggleFavorite={() => toggleFavorite(pokemon.id)}
          />
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>◀ Anterior</button>
          <span>Página {currentPage} de {totalPages}</span>
          <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Siguiente ▶</button>
        </div>
      )}
    </div>
  );
}
