import { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'

const PokemonList = () => {
    const defaultUrl = "https://pokeapi.co/api/v2/pokemon"
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

    async function downloalPokemon() {
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultUrl)
        const pokemonResults = response.data.results;
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        // setPokemonListState((state) => ({ ...state, nextUrl: response.data.next, prevUrl: response.data.previous }))

        const pokemonPromises = pokemonResults.map((pokemon) => axios.get(pokemon.url))
        const pokemonListData = await axios.all(pokemonPromises)
        const pokemonFinalList = pokemonListData.map(pokemonData => {
            const pokemon = pokemonData.data
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types,
            }
        })
        // setPokemonList(pokemonFinalList);
        // setPokemonListState((state)=>({ ...state, pokemonList: pokemonFinalList}))
        setPokemonListState(({ ...pokemonListState, pokemonList: pokemonFinalList, nextUrl: response.data.next, prevUrl: response.data.previous }))
    }
    useEffect(() => {
        downloalPokemon();
    }, [pokemonListState.pokedexUrl])
    return (
        <div className='pokemon-list-wrapper'>
            <div>
                <h1>Pokemon List</h1>
                <div className='page-control'>
                    <button onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}>Prev</button>
                    <button onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nextUrl })}>Next</button>
                </div>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map(pokemon => <Pokemon key={pokemon.id} name={pokemon.name} url={pokemon.image} type={pokemon.type} id={pokemon.id} />)}
            </div>
        </div>
    );
}

export default PokemonList;