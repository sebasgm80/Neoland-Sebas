import PokemonItem from "./PokemonItem";

const PokemonList = ({ pokemonCollection }) => (
  <ul>
    {pokemonCollection.map((pokemon) => (
      <PokemonItem key={pokemon.name} pokemon={pokemon} />
    ))}
  </ul>
);

export default PokemonList;
