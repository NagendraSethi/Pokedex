import "./Pokemon.css"

const Pokemon = (props) => {
    return (
        <div className="pokemon">
            <div className="pokemon-name">{props.name}</div>
            <img className="pokemon-image" src={props.url} />
        </div>
    );
};
export default Pokemon;