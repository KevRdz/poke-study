import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState({})
  
  const location = useLocation()

  useEffect(() => {
    console.log(location);
  }, [])

  return (
    <>
      <div>
        <h3>Pokemon Details</h3>
      </div>
    </>
  );
}
 
export default PokemonDetails;