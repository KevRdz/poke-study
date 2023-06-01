import { useState, useEffect } from "react";
import { getPokemonList } from "../../services/api-calls";
import { Link } from "react-router-dom";

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
            <Link key={pokemonTitle.index} state={{pokemonTitle}} to='/pokemon'>
              <div className="pokemon-div" key={pokemonTitle.index}>
                {pokemonTitle.name.toUpperCase()}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default PokemonList;