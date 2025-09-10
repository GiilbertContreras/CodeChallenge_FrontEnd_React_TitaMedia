import React, { useState } from 'react';
import Header from './components/organisms/Header';
import PokemonList from './components/organisms/PokemonList';
import PokemonModal from './components/organisms/PokemonModal';

export default function App() {
  const [modalData, setModalData] = useState({ isOpen: false, mode: '', pokemon: null });
  const [newPokemons, setNewPokemons] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [search, setSearch] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const openAddModal = () => setModalData({ isOpen: true, mode: 'add', pokemon: null });
  const openDetailModal = (pokemon) => setModalData({ isOpen: true, mode: 'detail', pokemon });

  const handleAddPokemon = (pokemon) => setNewPokemons(prev => [pokemon, ...prev]);
  const closeModal = () => setModalData({ isOpen: false, mode: '', pokemon: null });

  return (
    <>
      <Header 
        onOpenAddModal={openAddModal} 
        orderBy={orderBy} 
        onChangeOrder={setOrderBy} 
        onSearch={setSearch} 
        showFavorites={showFavorites} 
        onToggleFavorites={() => setShowFavorites(prev => !prev)} 
      />

      <PokemonList 
        additionalPokemons={newPokemons} 
        orderBy={orderBy} 
        search={search} 
        showFavorites={showFavorites} 
        onSelectPokemon={openDetailModal} 
      />

      <PokemonModal 
        {...modalData} 
        onClose={closeModal} 
        onAddPokemon={handleAddPokemon} 
      />
    </>
  );
}
