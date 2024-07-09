import './App.css'
import { Routes, Route } from "react-router-dom";
import Pokedex from './components/Pokedex/Pokedex'
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Pokedex/>}/>
      <Route path={'/pokemon/:id'} element={<PokemonDetails/>}/>
      <Route path={'*'} element={<h1>Not Found</h1>}/>
    </Routes>
    
  )
}

export default App