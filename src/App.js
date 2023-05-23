import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/pokemon-list" element={<PokemonList />}/>
        <Route path="/pokemon" element={<PokemonDetails />}/>
      </Routes>
    </>
  );
}

export default App;
