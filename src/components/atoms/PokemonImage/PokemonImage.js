export default function PokemonImage({ src, alt, onError }) {
  return <img src={src} alt={alt} className="pokemon-image" onError={onError} />;
}