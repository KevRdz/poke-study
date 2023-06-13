import { useState, useEffect } from "react";
import { getDetails } from "../../services/api-calls";
import { useLocation } from "react-router-dom";


const ItemDetails = () => {
  const [itemDetails, setItemDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const itemDetails = await getDetails(location.state.item.url.slice(18))
      console.log(location.state.item.url);
      setItemDetails(itemDetails)
    }
    fetchDetails()
  }, [location.state.item.url])

  return (
    <>
      <h3>Item Details</h3>
      <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
      <h3>{itemDetails.name}</h3>
    </>
  );
}

export default ItemDetails;