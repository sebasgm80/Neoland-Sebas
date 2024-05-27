const PokemonItem = ({ pokemon }) => (
  <li>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.image} alt={pokemon.name} />
  </li>
);

export default PokemonItem;
