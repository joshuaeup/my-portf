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
                <a href="/my-port/" className="homeResponsiveTopNavHoverHome justify-content-center align-items-center topNavText">
                    Home
                </a>
                <a href="/my-port/bio" className="homeResponsiveTopNavHoverProfile justify-content-center align-items-center topNavText">
                    Profile
                </a>
                <a href="/my-port/portfolio" className="homeResponsiveTopNavHoverProjects justify-content-center align-items-center topNavText">
                    Projects
                </a>
                <a href="/my-port/experience" className="homeResponsiveTopNavHoverSkills justify-content-center align-items-center topNavText">
                    Skills
                </a>
                <a href="/my-port/contact" className="homeResponsiveTopNavHoverContact justify-content-center align-items-center topNavText">
                    Contact
                </a>          
          </div>
        )
    }
}

export default topNav;