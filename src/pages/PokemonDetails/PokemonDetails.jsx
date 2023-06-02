import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/api-calls";

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState({})
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
          {pokemonDetails.moves.map((move) => (
            <div key={move.index}>{move.name}</div>
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