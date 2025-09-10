import React from 'react';
import FavoriteIcon from '../atoms/FavoriteIcon/FavoriteIcon';
import './PokemonModal.css';

export default function PokemonModal({ isOpen, pokemon, onClose, onPrev, onNext}) {
  if (!isOpen || !pokemon) return null;

  return (
    <div className="modal-overlay">
      <div className="pokemon-card">
        {/* Encabezado */}
        <div className="pokemon-header">
          {/* <button className="nav-btn" onClick={onPrev} disabled={!onPrev}>&lt;</button> */}
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <h2>{pokemon.name}</h2>
          <span className="pokemon-id">#{String(pokemon.id).padStart(3, '0')}</span>
          <FavoriteIcon />
          {/* <button className="nav-btn" onClick={onNext} disabled={!onNext}>&gt;</button> */}
        </div>

        {/* Imagen */}
        <div className="pokemon-image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>

        {/* Tipos */}
        <div className="types">
          {pokemon.pokemon_v2_pokemontypes?.map(t => (
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
              <p>Chlorophyll<br/>Overgrow</p>
              <span>Abilities</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <h3>Base Stats</h3>
          {pokemon.pokemon_v2_pokemonstats?.map(stat => (
            <div key={stat.pokemon_v2_stat.name} className="stat-row">
              <span className="stat-name">{stat.pokemon_v2_stat.name.toUpperCase()}</span>
              <span className="stat-value">{stat.base_stat}</span>
              <div className="stat-bar-bg">
                <div className="stat-bar" style={{ width: `${stat.base_stat}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
