const Sidebar = props => {
    return (
        <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                   role="tab">{props.catLink1}</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                   role="tab">{props.catLink2}</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages"
                   role="tab">{props.catLink3}</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings"
                   role="tab">{props.catLink4}</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings"
                   role="tab">{props.catLink5}</a>
            </div>
        </div>
    );
};