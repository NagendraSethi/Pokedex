import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function usePokemon(pokemonName) {
    const { id } = useParams();
    const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState(null);

    async function downloadPokemon(id) {
        try {
            const response = await axios.get(POKEMON_DETAILS_URL + ((pokemonName) ? pokemonName : id))
            const pokemon = response.data;
            setPokemon({
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types,
                image: pokemon.sprites.other.dream_world.front_default
            })
        } catch {
            console.log(pokemonName +` not found `);
        }

    }
    useEffect(() => {
        downloadPokemon(id);
        window.scrollTo({top: 0, left:0, behavior: 'smooth'})
    }, [id, pokemonName])

    return [pokemon];
}

export default usePokemon;