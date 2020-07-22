import React from "react";
import { Link } from "react-router-dom";
require("./resTopNav.css");

class resTopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <div id="responsiveTopNav" className="d-flex justify-content-center">
            <div className="responsiveTopNavHoverHome">
                <Link to="/myport/">
                    <h3 className="justify-content-center align-items-center topNavText">
                            Home
                    </h3>
                </Link>
            </div>
            <div className="responsiveTopNavHoverProfile">
                <Link to="/myport/bio">
                    <h3 className="justify-content-center align-items-center topNavText">
                            Profile
                    </h3>
                </Link>
            </div>
            <div className="responsiveTopNavHoverProjects">
                <Link to="/myport/portfolio">
                    <h3 className="justify-content-center align-items-center topNavText">
                            Projects
                    </h3>
                </Link>
            </div>
            <div className="responsiveTopNavHoverSkills">
                <Link to="/myport/experience">
                    <h3 className="justify-content-center align-items-center topNavText">
                            Skills
                    </h3>
                </Link>
            </div>
            <div className="responsiveTopNavHoverContact">
                <Link to="/myport/contact">
                    <h3 className="justify-content-center align-items-center topNavText">
                            Contact
                    </h3>
                </Link>
            </div>
          </div>
        )
    }
}

export default resTopNav;