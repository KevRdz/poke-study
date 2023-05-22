import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/pokemon-list">Pokemon List</Link>
      <Link to="/item-list">Item List</Link>
      <Link to="/move-search">Search For Moves</Link>
    </header>
  );
}

export default NavBar;