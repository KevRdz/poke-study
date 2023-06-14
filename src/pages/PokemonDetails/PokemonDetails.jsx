import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/api-calls";

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const pokemonDetails = await getDetails(location.state.pokemonTitle.url.slice(18))
      console.log(pokemonDetails);
      setPokemonDetails(pokemonDetails)
    }
    fetchDetails()
  }, [location.state.pokemonTitle.url])

  return (
    <>
      <div>
        {pokemonDetails.name ? 
        <>
          <h2>{pokemonDetails.name.toUpperCase()}</h2>
          <h3>Pokedex Entry - {pokemonDetails.order}</h3>
          <img className="pokemon-img" src={pokemonDetails.sprites.front_default} alt="pokemon-sprite" />
          <p>Weight: {(pokemonDetails.weight / 4.536).toFixed()}lbs</p>
          <p>Height: {(pokemonDetails.height / 3.048).toFixed(2)}ft</p>
          <h3>Abilities:</h3>
          {pokemonDetails.abilities.map((abilityObj) => (
            <div key={abilityObj.ability.name}>{abilityObj.ability.name.toUpperCase()}</div>
          ))}
          <h3>Types:</h3>
          {pokemonDetails.types.map((typeObj) => (
            <div key={typeObj.type.name}>{typeObj.type.name.toUpperCase()}</div>
          ))}
          <h3>Base Stats:</h3>
          {pokemonDetails.stats.map((stat) => (
            <div key={stat.stat.name}>{stat.base_stat} - {stat.stat.name.toUpperCase()}</div>
          ))}
          <h3>Moves:</h3>
          {pokemonDetails.moves.map((moveObj) => (
            <div key={moveObj.move.name}>{moveObj.move.name.toUpperCase()}</div>
          ))}
        </>
        :
        <>
          <p>Loading Pokemon Details...</p>
        </>
        }
      </div>
    </>
  );
}

export default PokemonDetails;