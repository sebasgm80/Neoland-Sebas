import React from "react";

const UsePokemonCollection = () => {
  const [filter, setFilter] = React.useState("ditto");
  const [pokemonCollection, setPokemonCollection] = React.useState([]);

  const loadPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`)
      .then((response) => response.json())
      .then((json) => setPokemonCollection([json]))
      .catch((error) => console.error("Error fetching Pokemon:", error));
  };

  return { filter, setFilter, pokemonCollection, loadPokemon };
};

export default UsePokemonCollection;
