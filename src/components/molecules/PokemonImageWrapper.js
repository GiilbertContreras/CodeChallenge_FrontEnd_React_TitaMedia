export function PokemonImageWrapper({ src, alt, onError }) {
  return (
    <div className="image-wrapper">
      <PokemonImage src={src} alt={alt} onError={onError} />
      <Platform />
    </div>
  );
}