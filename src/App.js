import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
import ItemList from './pages/ItemList/ItemList'
import ItemDetails from './pages/ItemDetails/ItemDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/pokemon-list" element={<PokemonList />}/>
        <Route path="/pokemon" element={<PokemonDetails />}/>
        <Route path='/item-list' element={<ItemList />}/>
        <Route path='/item' element={<ItemDetails />}/>
      </Routes>
    </>
  );
}

export default App;
