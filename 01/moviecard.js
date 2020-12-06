const Movie = props => {
    return (
        <div className="movie">
            <img src={props.poster} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>Year: {props.year}</p>
        </div>
    );
};