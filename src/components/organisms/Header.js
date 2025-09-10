import React from 'react';
import Imagotipo from '../molecules/Imagotipo/Imagotipo';
import ButtonAddPokemon from '../molecules/ButtonAddPokemon/ButtonAddPokemon';
import ButtonFilterFavorites from '../molecules/ButtonFilterFavorites/ButtonFilterFavorites';
import SearchBar from '../molecules/SearchBar/SearchBar';
import OrderSelector from '../molecules/OrderSelector/OrderSelector';

export default function Header({ onOpenAddModal, orderBy, onChangeOrder, onSearch, showFavorites, onToggleFavorites }) {
  return (
    <header className="display-flex gap-2">
      <div className="display-flex align-items-center gap-2">
        <Imagotipo />
        <ButtonAddPokemon
          onClick={() => onOpenAddModal()}
        />
      </div>
      <div className="headerBottom">
        <ButtonFilterFavorites
          showFavorites={showFavorites}
          onToggle={onToggleFavorites}
        />
        <SearchBar
          onSearch={onSearch}
        />
        <OrderSelector
          orderBy={orderBy}
          onChangeOrder={onChangeOrder}
        />
      </div>
    </header>
  );
}