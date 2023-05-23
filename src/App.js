import './App.css';
import NavBar from './components/NavBar/NavBar';
import PokemonList from './pages/PokemonList/PokemonList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/pokemon-list" element={<PokemonList />}/>
      </Routes>
    </>
  );
}

export default App;
