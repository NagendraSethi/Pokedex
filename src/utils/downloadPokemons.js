import axios from "axios";

async function downloadPokemon(pokemonListState, setPokemonListState, defaultUrl) {
    const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultUrl)
    const pokemonResults = response.data.results;
    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);
    // setPokemonListState((state) => ({ ...state, nextUrl: response.data.next, prevUrl: response.data.previous }))

    const pokemonPromises = pokemonResults.map((p) => {
        axios.get(p.url)
        if(p.url){
            return axios.get(p.url);
        }else if(p.pokemon.url){
            return axios.get(p.pokemon.url)
        }
    })

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

export default downloadPokemon;