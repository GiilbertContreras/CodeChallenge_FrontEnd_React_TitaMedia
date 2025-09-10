import React, { useState } from 'react';
import PokemonImage from '../atoms/PokemonImage/PokemonImage';
import PokemonId from '../atoms/PokemonId/PokemonId';
import FavoriteIcon from '../atoms/FavoriteIcon/FavoriteIcon';
import PokemonName from '../atoms/PokemonName/PokemonName';
import Platform from '../atoms/Platform/Platform';
import styles from './PokemonCard.module.css';

export default function PokemonCard({ pokemon, onSelect, isFavorite, onToggleFavorite }) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = imgError
    ? '/assets/default-pokemon.png'
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className={styles.card} onClick={() => onSelect(pokemon)}>
      <Platform />
      <div className="position-relative" style={{ width: '100%' }}>
        <FavoriteIcon isActive={isFavorite} onClick={e => { e.stopPropagation(); onToggleFavorite(); }} />
        <PokemonId id={pokemon.id} />
        <div className={styles.imageWrapper}>
          <PokemonImage src={imageUrl} alt={pokemon.name} onError={() => setImgError(true)} />
        </div>
        <PokemonName name={pokemon.name} />
      </div>
    </div>
  );
}