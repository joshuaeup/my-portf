import React from "react";
// import { Link } from "react-router-dom";
require("./sideNav.css");


class sideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleClicked: false
        }
    }

    triggerToggle = e => {
        // alert("Clicked")
        e.preventDefault();
        if (this.state.toggleClicked === false) {
            this.setState({
                toggleClicked: true
            })
        } else {
            this.setState({
                toggleClicked: false
            })
        }
        
        
    }

    render() {
        return (
            <ul id="mainSideNavContainer" className="nav flex-sm-column ">
                <div className="p-2 sideNavTitle">
                    <div className="navTitleContainer ">
                        <p className="text-center nameText">Joshua </p>
                        <p className="text-center nameText">Proctor</p>
                    </div>
                        <p className="text-center titleText">Full Stack Web Developer</p>
                    </div>
                    {this.state.toggleClicked === false ? (
                        <div className="navbar-collapse-sm d-flex flex-column" id="topNavCollapse">
                            <a href="/my-port/" className="p-2 homeResponsiveSideNavHoverHome sideNavText">
                                <i className="fa fa-home sideNavIcon" aria-hidden="true" /> Home
                            </a>
                            <a href="/my-port/bio" className="p-2 homeResponsiveSideNavHoverProfile sideNavText">
                                <i className="fa fa-user-circle-o sideNavIcon" aria-hidden="true" /> Profile
                            </a>
                            <a href="/my-port/portfolio" className="p-2 homeResponsiveSideNavHoverProjects sideNavText">
                                <i className="fa fa-folder-open-o sideNavIcon" aria-hidden="true" /> Projects
                            </a>
                            <a href="/my-port/experience" className="p-2 homeResponsiveSideNavHoverSkills sideNavText">
                                <i className="fa fa-brain sideNavIcon" aria-hidden="true" /> Skills
                            </a>
                            <a href="/my-port/contact" className="p-2 homeResponsiveSideNavHoverContact sideNavText">
                                <i className="fa fa-phone-square sideNavIcon" aria-hidden="true" /> Contact
                            </a>
                        </div>
                    ) : null }
            </ul>

          
        )
    }
}

export default sideNav;