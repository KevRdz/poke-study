import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { moveSearch } from "../../services/api-calls";

const MoveSearch = () => {
  const [moves, setMoves] = useState([])

  const handleMoveSearch = async formData => {
    const moveResults = await moveSearch(formData)
    setMoves(moveResults.results)
  }
  return (
    <>
      <h3>Mooooooves</h3>
      <SearchForm handleMoveSearch={handleMoveSearch}/>
    </>
  );
}

export default MoveSearch;