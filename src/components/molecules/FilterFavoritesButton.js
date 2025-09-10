import React from 'react';
import Button from '../atoms/Button/Button';
import FilterIcon from '../atoms/FilterIcon/FilterIcon';
import FavoriteIcon from '../atoms/FavoriteIcon/FavoriteIcon';

export default function FavoritesButton({ showFavorites, onToggle }) {
  return (
    <Button className="btn-fav" onClick={onToggle} style={showFavorites ? { textDecoration: 'underline' } : {}}>
      {showFavorites ? (
        <>
          <FilterIcon size={20} />
          Mostrar Todos
        </>
      ) : (
        <>
          <FavoriteIcon size={20} />
          Filtrar Favoritos
        </>
      )}
    </Button>
  );
}