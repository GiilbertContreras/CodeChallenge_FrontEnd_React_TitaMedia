import React from 'react';
import Button from '../atoms/Button/Button';
import IconPlus from '../atoms/IconPlus/IconPlus';

export default function AddPokemonButton({ onClick, className = '' }) {
  return (
    <Button className={`btn-success text-white ${className}`} onClick={onClick}>
      <IconPlus size={20} />
      Agregar Pokémon
    </Button>
  );
}