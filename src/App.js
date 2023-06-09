import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
import ItemList from './pages/ItemList/ItemList'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/pokemon-list" element={<PokemonList />}/>
        <Route path="/pokemon" element={<PokemonDetails />}/>
        <Route path='/item-list' element={<ItemList />}/>
      </Routes>
    </>
  );
}

export default App;
