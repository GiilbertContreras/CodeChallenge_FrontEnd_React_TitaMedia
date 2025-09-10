import React, { useState } from 'react'; // <-- importar useState
import Header from '../organisms/Header';
import PokemonList from '../organisms/PokemonList';
import PokemonModal from '../organisms/PokemonModal';

export default function MainTemplate({ modalData, newPokemons, orderBy, search, showFavorites, openAddModal, openDetailModal, handleAddPokemon, closeModal, setOrderBy, setSearch, toggleFavorites }) {
  const [favorites, setFavorites] = useState([]); // Estado para almacenar los pokemones marcados como favoritos
  
  return (
    <>
      <Header 
        onOpenAddModal={openAddModal} 
        orderBy={orderBy} 
        onChangeOrder={setOrderBy} 
        onSearch={setSearch} 
        showFavorites={showFavorites} 
        onToggleFavorites={toggleFavorites} 
      />
      <PokemonList 
        favorites={favorites}
        setFavorites={setFavorites}
        additionalPokemons={newPokemons} 
        orderBy={orderBy} 
        search={search} 
        showFavorites={showFavorites} 
        onSelectPokemon={openDetailModal} 
      />
      
      <PokemonModal 
        favorites={favorites}
        setFavorites={setFavorites}
        {...modalData} 
        onClose={closeModal} 
        onAddPokemon={handleAddPokemon} 
      />
    </>
  );
}