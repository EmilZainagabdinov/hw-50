const Movie = props => {
    return (
        <div className="movie">
            <h1>{props.name}</h1>
            <p>Year: {props.year}</p>
            <img src={props.poster} alt={props.name}/>
        </div>
    );
};