const Movie = props => {
    return (
        <div className="movie card">
            <img src={props.poster} className="card-img-top" alt={props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Год: {props.year}</p>
            </div>
        </div>
    );
};