import React from "react";
require("./navTitle.css");

class NavTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="portBannerContainer" className="d-flex justify-content-center">
              <div className="sideLine"></div>
                <h3 className="h2 upperCase">{this.props.title}</h3>
              <div className="sideLine"></div>
            </div>
        ) 
    }
}

export default NavTitle;
