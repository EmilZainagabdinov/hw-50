const Footer = props => {
    return (
        <footer className="bg-dark mt-4 py-4">
            <div className="container">
                <p className="text-light">{props.text}</p>
            </div>
        </footer>
    );
};