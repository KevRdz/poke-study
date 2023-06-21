import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { moveSearch } from "../../services/api-calls";

const MoveSearch = () => {
  const [moves, setMoves] = useState([])

  const handleMoveSearch = async formData => {
    const moveResults = await moveSearch(formData)
    console.log(moveResults);
    setMoves(moveResults.results)
  }
  return (
    <>
      <h3>Mooooooves</h3>
      <SearchForm handleMoveSearch={handleMoveSearch}/>
      {moves.length ?
        <>
          {moves.map(move => 
            <div key={move.name}>{move.name}</div>
          )}
        </>
        :
        <>
          <h3>Please Search For a Move!</h3>
        </>
      }
    </>
  );
}

export default MoveSearch;