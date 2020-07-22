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
                <a href="/#/" className="homeResponsiveTopNavHoverHome justify-content-center align-items-center topNavText">
                    Home
                </a>
                <a href="/#/bio" className="homeResponsiveTopNavHoverProfile justify-content-center align-items-center topNavText">
                    Profile
                </a>
                <a href="/#/portfolio" className="homeResponsiveTopNavHoverProjects justify-content-center align-items-center topNavText">
                    Projects
                </a>
                <a href="/#/experience" className="homeResponsiveTopNavHoverSkills justify-content-center align-items-center topNavText">
                    Skills
                </a>
                <a href="/#/contact" className="homeResponsiveTopNavHoverContact justify-content-center align-items-center topNavText">
                    Contact
                </a>          
          </div>
        )
    }
}

export default topNav;