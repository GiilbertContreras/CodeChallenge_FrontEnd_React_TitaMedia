import React from 'react';
import Button from '../../atoms/Button/Button';
import FilterIcon from '../../atoms/FilterIcon/FilterIcon';
import FavoriteIcon from '../../atoms/FavoriteIcon/FavoriteIcon';

export default function ButtonFilterFavorites({ showFavorites, onToggle }) {
  return (
    <Button onClick={onToggle}>
      {showFavorites ? (
        <>
          <FilterIcon size={20} />
          <u>Mostrar Todos</u>
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