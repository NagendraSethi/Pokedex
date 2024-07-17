import useDebounce from '../hooks/useDebounce'
import './Search.css'

const Search=({updateSearchTerm})=>{
    const debounceUpdateSearch=useDebounce((e)=>updateSearchTerm(e.target.value))
    return (
        <input 
            id='search' 
            type='text' 
            placeholder="which pokemon you'r looking for?"
            onChange={debounceUpdateSearch}
            />
    )
}

export default Search