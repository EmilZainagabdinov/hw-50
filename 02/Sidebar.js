const Sidebar = props => {
    return (
        <div className="col-2">
            <div className="nav flex-column nav-pills">
                <a className="nav-link active" href="#"
                   role="tab">{props.catLink1}</a>
                <a className="nav-link" href="#"
                   role="tab">{props.catLink2}</a>
                <a className="nav-link" href="#"
                   role="tab">{props.catLink3}</a>
                <a className="nav-link" href="#"
                   role="tab">{props.catLink4}</a>
                <a className="nav-link" href="#"
                   role="tab">{props.catLink5}</a>
            </div>
        </div>
    );
};