import React from "react";
// import { Link } from "react-router-dom";
require("./topNav.css");

class topNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="homeResponsiveTopNav" className="d-flex justify-content-center">
                <a href="/myport/" className="homeResponsiveTopNavHoverHome justify-content-center align-items-center topNavText">
                    Home
                </a>
                <a href="/myport/bio" className="homeResponsiveTopNavHoverProfile justify-content-center align-items-center topNavText">
                    Profile
                </a>
                <a href="/myport/portfolio" className="homeResponsiveTopNavHoverProjects justify-content-center align-items-center topNavText">
                    Projects
                </a>
                <a href="/myport/experience" className="homeResponsiveTopNavHoverSkills justify-content-center align-items-center topNavText">
                    Skills
                </a>
                <a href="/myport/contact" className="homeResponsiveTopNavHoverContact justify-content-center align-items-center topNavText">
                    Contact
                </a>          
          </div>
        )
    }
}

export default topNav;