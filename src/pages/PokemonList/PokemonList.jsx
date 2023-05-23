import { useState, useEffect } from "react";
import { getPokemonList } from "../../services/api-calls";

const PokemonList = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList()
      console.log(pokemonData);
      setPokemon(pokemonData.results)
    }
    fetchPokemonList()
  }, [])

  return (
    <>
      <div>
        <h3>Pokeomon List</h3>
        <div className="icon-container">
          {pokemon.map(pokemonTitle => 
            <div className="class-div" key={pokemonTitle.index}>
              {pokemonTitle.name.toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PokemonList;