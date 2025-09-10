import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import PokemonCard from '../molecules/PokemonCard/PokemonCard';
import { GET_POKEMONS } from '../../graphql/queries';

export default function PokemonList({ favorites, setFavorites, additionalPokemons = [], orderBy, search, showFavorites, onSelectPokemon }) {
  const { loading, error, data } = useQuery(GET_POKEMONS, { variables: { limit: 1500 } }); //Ejecuta la consulta GraphQL para obtener los pokemones
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual en la paginación
  const itemsPerPage = 50; // Cantidad de pokemones que se mostrarán por página

  if (loading) return <div className="pokemon-list-container"><p className="status-message">Cargando Pokémon...</p></div>;
  if (error) return <div className="pokemon-list-container"><p className="status-message">Error: {error.message}</p></div>;

  const allPokemons = [...additionalPokemons, ...data.pokemon_v2_pokemon]; // Combinar API + Pokémon agregados
  const sortedPokemons = [...allPokemons].sort((a, b) => orderBy === 'name' ? a.name.localeCompare(b.name) : a.id - b.id); // Ordenar

  // Filtrar
  const filteredPokemons = sortedPokemons.filter(p => {
    if (!search) return true;

    const q = search.toLowerCase().trim();

    // Filtrar por nombre
    if (!q.startsWith('#') && isNaN(parseInt(q))) {
      return p.name.toLowerCase().includes(q);
    }

    // Filtrar por id
    const idQuery = q.replace('#', '');
    if (q.startsWith('#')) {
      if (idQuery === '') return true; // solo '#' muestra todos
      return p.id.toString().startsWith(idQuery); // '#' seguido de números -> empieza con
    } else {
      // si no tiene #, filtra ids que contengan el número
      return p.id.toString().includes(idQuery);
    }
  });


  const finalPokemons = showFavorites ? filteredPokemons.filter(p => favorites.includes(p.id)) : filteredPokemons; // showFavorites es true, solo favoritos
  const totalPokemons = finalPokemons.length; //Total de pokemones que se mostrarán después del filtro
  const totalPages = Math.ceil(totalPokemons / itemsPerPage); // Calcula el número total de páginas según la cantidad de pokemones y items por página
  const startIndex = (currentPage - 1) * itemsPerPage; // Índice inicial del array para la página actual (paginación)
  const currentPokemons = finalPokemons.slice(startIndex, startIndex + itemsPerPage); // Pokemones que se mostrarán en la página actual

  // Función para agregar o quitar un Pokémon de la lista de favoritos
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