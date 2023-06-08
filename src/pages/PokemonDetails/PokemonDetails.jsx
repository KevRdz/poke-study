import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/api-calls";

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const location = useLocation()

  useEffect(() => {
    // console.log(location.state.pokemonTitle.url.slice(18));
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
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <p>Weight: {(pokemonDetails.weight / 4.536).toFixed()}lbs</p>
          <p>Height: {(pokemonDetails.height / 3.048).toFixed(2)}ft</p>
          <h3>Abilities:</h3>
          {pokemonDetails.abilities.map((abilityObj) => (
            <div key={abilityObj.ability.name}>{abilityObj.ability.name}</div>
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