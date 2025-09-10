// /organisms/Header.js
import React from 'react';
import Imagotipo from '../molecules/Imagotipo';
import AddPokemonButton from '../molecules/AddPokemonButton';
import FilterFavoritesButton from '../molecules/FilterFavoritesButton';
import SearchBar from '../molecules/SearchBar';
import OrderSelector from '../molecules/OrderSelector';
import styles from './Header.module.css';

export default function Header({ onOpenAddModal, orderBy, onChangeOrder, onSearch, showFavorites, onToggleFavorites }) {
  return (
    <header>
      <div className="display-flex align-items-center gap-2">
        <Imagotipo />
        <AddPokemonButton onClick={onOpenAddModal} className="btn-success" />
      </div>
      <div className={styles.headerBottom}>
        <FilterFavoritesButton showFavorites={showFavorites} onToggle={onToggleFavorites} />
        <SearchBar onSearch={onSearch} />
        <OrderSelector orderBy={orderBy} onChangeOrder={onChangeOrder} />
      </div>
    </header>
  );
}