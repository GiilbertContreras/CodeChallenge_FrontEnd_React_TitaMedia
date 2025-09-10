export function PokemonHeader({ id, isFavorite, onToggleFavorite }) {
  return (
    <>
      <FavoriteIcon
        isActive={isFavorite}
        onClick={e => { e.stopPropagation(); onToggleFavorite(); }}
      />
      <PokemonId id={id} />
    </>
  );
}