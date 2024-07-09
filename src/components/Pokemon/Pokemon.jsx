import "./Pokemon.css"
import {Link} from "react-router-dom"

const Pokemon = (props) => {
    return (
        <div className="pokemon">
            <Link to={`/pokemon/${props.id}`} className="pokemon-link">
                <div className="pokemon-name">{props.name}</div>
                <img className="pokemon-image" src={props.url} />
            </Link>
        </div>
    );
};
export default Pokemon;