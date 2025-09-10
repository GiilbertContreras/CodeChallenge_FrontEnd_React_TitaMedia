import React, { useState } from 'react';
import MainTemplate from '../templates/MainTemplate';

export default function HomePage() {
  const [modalData, setModalData] = useState({ isOpen: false, mode: '', pokemon: null }); // Estado del modal: abierto/cerrado, modo y Pokémon actual
  const [newPokemons, setNewPokemons] = useState([]); // Lista de Pokémon agregados manualmente
  const [orderBy, setOrderBy] = useState('name'); // Orden actual de la lista (por nombre al inicio)
  const [search, setSearch] = useState(''); // Texto usado en la barra de búsqueda
  const [showFavorites, setShowFavorites] = useState(false); // Bandera para mostrar solo favoritos o todos

  const openAddModal = () => setModalData({ isOpen: true, mode: 'add', pokemon: null }); // Abre el modal en modo agregar
  const handleAddPokemon = (pokemon) => setNewPokemons(prev => [pokemon, ...prev]); // Agrega un nuevo Pokémon a la lista
  const openDetailModal = (pokemon) => setModalData({ isOpen: true, mode: 'detail', pokemon }); // Abre el modal mostrando detalle de un Pokémon  
  const closeModal = () => setModalData({ isOpen: false, mode: '', pokemon: null }); // Cierra el modal y limpia datos

  return (
    <MainTemplate
      modalData={modalData}
      newPokemons={newPokemons}
      orderBy={orderBy}
      search={search}
      showFavorites={showFavorites}
      openAddModal={openAddModal}
      openDetailModal={openDetailModal}
      handleAddPokemon={handleAddPokemon}
      closeModal={closeModal}
      setOrderBy={setOrderBy}
      setSearch={setSearch}
      toggleFavorites={() => setShowFavorites(prev => !prev)}
    />
  );
}