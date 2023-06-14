import { useState, useEffect } from "react";
import { getDetails } from "../../services/api-calls";
import { useLocation } from "react-router-dom";


const ItemDetails = () => {
  const [itemDetails, setItemDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const itemDetails = await getDetails(location.state.item.url.slice(18))
      console.log(itemDetails);
      setItemDetails(itemDetails)
    }
    fetchDetails()
  }, [location.state.item.url])

  return (
    <>
      <div>
        {itemDetails.name ? 
        <>
          <h3>Item Details</h3>
          <h3>{itemDetails.name?.toUpperCase()}</h3>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h4>Cost: {itemDetails.cost}P</h4>
          <h3>Effect:</h3>
          {itemDetails.effect_entries?.map((effectObj) => (
            <div key={effectObj.effect}>{effectObj.effect}</div>
          ))}
        </>
        :
        <>
          <p>Loading Item Details...</p>
        </>
        }
      </div>
    </>
  );
}

export default ItemDetails;