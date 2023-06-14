import { useEffect, useState } from "react";
import { getItemList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    const fetchItemList = async () => {
      const itemData = await getItemList()
      console.log(itemData);
      setItemList(itemData.results)
    }
    fetchItemList()
  }, [])

  return (
    <>
      <h3>Item List</h3>
      {itemList.length ? 
      <>
        <div className="icon-container">
          {itemList.map(item =>
            <div className="pokemon-div" key={item.name.idx}>
              <Link key={item.name.idx} to="/item"  state={{item}}>{item.name.toUpperCase()}</Link>
              {/* <br /> */}
            </div>
          )}
        </div>
      </>
      :
      <>
        <h4>Loading Helpful Items...</h4>
      </>
      }
    </>
  );
}

export default ItemList;