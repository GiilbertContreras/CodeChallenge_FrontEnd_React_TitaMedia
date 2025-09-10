import React from 'react';

export default function PokemonDetail({ pokemon }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '20px', width: '400px' }}>
      <h2>{pokemon.name} #{pokemon.id}</h2>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
        alt={pokemon.name} 
        style={{ width: '200px' }}
      />
      <div>
        {pokemon.pokemon_v2_pokemontypes.map(t => (
          <span key={t.pokemon_v2_type.name} style={{ padding: '5px 10px', backgroundColor: '#eee', borderRadius: '12px', marginRight: '5px' }}>
            {t.pokemon_v2_type.name}
          </span>
        ))}
      </div>
      <div>
        <p>Peso: {pokemon.weight / 10} kg</p>
        <p>Altura: {pokemon.height / 10} m</p>
      </div>
      <div>
        <h4>Base Stats</h4>
        {pokemon.pokemon_v2_pokemonstats.map(stat => (
          <div key={stat.pokemon_v2_stat.name}>
            {stat.pokemon_v2_stat.name}: {stat.base_stat}
            <div style={{ background: '#eee', width: '100%', height: '8px', borderRadius: '4px', marginTop: '2px' }}>
              <div style={{ width: `${stat.base_stat}%`, background: '#4caf50', height: '8px', borderRadius: '4px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
