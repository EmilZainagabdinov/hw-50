const Header = props => {
    return (
        <header className="header py-3 bg-light border-bottom border-dark">
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navlink1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navlink2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navlink3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navlink4}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">{props.navlink5}</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};