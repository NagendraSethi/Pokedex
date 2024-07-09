import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon'
import usePokemonList from '../hooks/usePokemonList'

const PokemonList = () => {
    const [pokemonListState,setPokemonListState]=usePokemonList()
    
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