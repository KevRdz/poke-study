import { useState } from "react";

const PokemonList = () => {

  const [pokemon, setPokemon] = useState(["pikachu", "monferno", "starly"])

  return (
    <>
      <div>
        <h3>I'm in the pokeomon list</h3>
      </div>
    </>
  );
}

export default PokemonList;