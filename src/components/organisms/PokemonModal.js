import React, { useState } from 'react';
import { validatePokemonName } from '../../utils/validation';
import Button from '../atoms/Button/Button';
import FavoriteIcon from '../atoms/FavoriteIcon/FavoriteIcon';

export default function PokemonModal({ favorites, setFavorites, isOpen, mode, pokemon, onClose, onAddPokemon, onPrev, onNext }) {
  if (!isOpen) return null;

  // Estado para el formulario (modo ADD)
  const [formData, setFormData] = useState({ name: '', id: '', weight: '', height: '', });
  const [error, setError] = useState('');

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target; // Tomar las propiedades del evento del input

    // Actualiza el estado del formulario
    setFormData((prev) => ({ ...prev, [name]: value })); 

    if (name === 'name') {
      if (!validatePokemonName(value)) {
        setError('El nombre debe tener al menos 3 caracteres y no contener símbolos.');
      } else {        
        setError('');
      }
    }
  };

  // Función para agregar o quitar un Pokémon de la lista de favoritos
  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const handleSave = () => {
    if (!validatePokemonName(formData.name)) {
      setError('Nombre inválido. Usa al menos 3 letras y sin símbolos.');
      return;
    }

    onAddPokemon({
      ...formData,
      id: Number(formData.id),
      weight: Number(formData.weight),
      height: Number(formData.height),
      pokemon_v2_pokemontypes: [],
      pokemon_v2_pokemonstats: [],
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="pokemon-card">
        {/* ------------------- MODO ADD ------------------- */}
        {mode === 'add' && (
          <div className="add-form">
            <h2>Agregar Pokémon</h2>

            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
            {error && <span className="error">{error}</span>}

            <input
              type="number"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
            />

            <input
              type="number"
              name="weight"
              placeholder="Peso (kg)"
              value={formData.weight}
              onChange={handleChange}
            />

            <input
              type="number"
              name="height"
              placeholder="Altura (m)"
              value={formData.height}
              onChange={handleChange}
            />

            <button
              onClick={handleSave}
              disabled={!!error || !formData.name}
            >
              Guardar
            </button>
          </div>
        )}

        {/* ------------------- MODO DETAIL ------------------- */}
        {mode === 'detail' && pokemon && (
          <>
            {/* Encabezado */}
            <div className="pokemon-header">
              {/* Botón previo */}
              {onPrev && (
                <button
                  className="nav-btn"
                  onClick={onPrev}
                  disabled={!onPrev}
                >
                  &lt;
                </button>
              )}

              <h2>{pokemon.name}</h2>
              <span className="pokemon-id">
                #{String(pokemon.id).padStart(3, '0')}
              </span>
              <Button 
                onClick={e => { e.stopPropagation(); toggleFavorite(pokemon.id); }}>
                <FavoriteIcon
                  active={favorites.includes(pokemon.id)}
                />
              </Button>

              {/* Botón siguiente */}
              {onNext && (
                <button
                  className="nav-btn"
                  onClick={onNext}
                  disabled={!onNext}
                >
                  &gt;
                </button>
              )}
            </div>

            {/* Imagen */}
            <div className="pokemon-image">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name}/>
            </div>

            {/* Tipos */}
            <div className="types">
              {pokemon.pokemon_v2_pokemontypes?.map((t) => (
                <span key={t.pokemon_v2_type.name} className={`type-badge ${t.pokemon_v2_type.name}`}>
                  {t.pokemon_v2_type.name}
                </span>
              ))}
            </div>

            {/* About */}
            <div className="about-section">
              <h3>About</h3>
              <div className="about-info">
                <div>
                  <p>{pokemon.weight / 10} kg</p>
                  <span>Weight</span>
                </div>
                <div>
                  <p>{pokemon.height / 10} m</p>
                  <span>Height</span>
                </div>
                <div>
                  <p>Chlorophyll<br />Overgrow</p>
                  <span>Abilities</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-section">
              <h3>Base Stats</h3>
              {pokemon.pokemon_v2_pokemonstats?.map((stat) => (
                <div
                  key={stat.pokemon_v2_stat.name}
                  className="stat-row"
                >
                  <span className="stat-name">
                    {stat.pokemon_v2_stat.name.toUpperCase()}
                  </span>
                  <span className="stat-value">{stat.base_stat}</span>
                  <div className="stat-bar-bg">
                    <div
                      className="stat-bar"
                      style={{ width: `${stat.base_stat}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Cerrar */}
        <button className="btn-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}