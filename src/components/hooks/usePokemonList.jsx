import { useEffect, useState } from "react";
import downloadPokemon from "../../utils/downloadPokemons";


function usePokemonList(defaultUrl){
    // const [pokemonList,setPokemonList] = useState([]);
    // const [pokedexUrl,setPokedexUrl]=useState(defaultUrl)
    // const [nextUrl, setNextUrl]=useState(defaultUrl)
    // const [prevUrl, setPrevUrl]=useState(defaultUrl)

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: defaultUrl,
        nextUrl: defaultUrl,
        prevUrl: defaultUrl
    });

    
    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState, defaultUrl);
    }, [pokemonListState.pokedexUrl])

    return [pokemonListState,setPokemonListState];
}

export default usePokemonList;