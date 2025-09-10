export function validatePokemonName(name) {
  // Solo letras y espacios, mínimo 3 caracteres
  const regex = /^[A-Za-z\s]{3,}$/;
  return regex.test(name.trim());
}