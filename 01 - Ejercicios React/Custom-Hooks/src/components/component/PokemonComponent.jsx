import React from "react";
import usePokemonCollection from "../hook/UsePokemonCollection";

const PokemonComponent = () => {
  const { filter, setFilter, pokemonCollection, loadPokemon } =
    usePokemonCollection();

  React.useEffect(() => {
    loadPokemon();
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <button onClick={loadPokemon}>Load Pokemon</button>
      <ul>
        {pokemonCollection.map((pokemon, index) => (
          <li key={index}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonComponent;
