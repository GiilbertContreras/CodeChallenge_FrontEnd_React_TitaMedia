import { gql } from '@apollo/client';

// Query para obtener los Pokémon
export const GET_POKEMONS = gql`
  query getPokemons($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit, order_by: { name: asc }) {
      id
      name
      height
      weight
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;