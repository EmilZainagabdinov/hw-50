const ItemCard = props => {
    return (
        <div className="col-4 mb-4">
            <div className="card rounded-lg">
                <img src={props.image} className="card-img-top p-3" alt=""/>
                <div className="card-body">
                    <h6 className="card-title">{props.name}</h6>
                    <p className="sizes">Available sizing: {props.sizes}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text font-weight-bold text-danger">Price: ${props.price}</p>
                </div>
            </div>
        </div>
    );
};