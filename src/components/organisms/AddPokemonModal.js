import React, { useState } from 'react';
import './AddPokemonModal.css';

export default function AddPokemonModal({ isOpen, onClose, onAddPokemon }) {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPokemon = {
      id: Date.now(), // ID único temporal
      name,
      height: Number(height),
      weight: Number(weight),
      base_experience: 50,
      pokemon_v2_pokemontypes: [],
      pokemon_v2_pokemonstats: []
    };
    onAddPokemon(newPokemon);
    onClose();
    setName('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Agregar Nuevo Pokémon</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nombre" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required
          />
          <input 
            type="number" 
            placeholder="Altura" 
            value={height} 
            onChange={e => setHeight(e.target.value)} 
            required
          />
          <input 
            type="number" 
            placeholder="Peso" 
            value={weight} 
            onChange={e => setWeight(e.target.value)} 
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="btn btn-add">Agregar</button>
            <button type="button" className="btn" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
