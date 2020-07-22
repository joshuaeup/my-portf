import React from "react";
import { Link } from "react-router-dom";

require("./Footer.css");

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <footer id="mainFooterContainer" className="d-flex justify-content-between align-items-center">
                <div id="waterMarkContainer">
                    <p id="waterMark">© 2019 Joshua Proctor</p>
                </div>
                
                <div className="text-center text-md-center">
                    <a className="fb-ic" href="https://github.com/joshuaeup">
                        <i className="fab fa-github white-text mr-4"> </i>
                    </a>
                    <a className="tw-ic" href="https://codepen.io/joshuaeup">
                        <i className="fab fa-codepen white-text mr-4"> </i>
                    </a>
                    <a className="gplus-ic" href="https://www.instagram.com/joshuaeup/">
                        <i className="fas fa-hashtag white-text mr-4"> </i>
                    </a>
                    <a className="li-ic" href="https://www.linkedin.com/in/joshua-proctor/">
                        <i className="fab fa-linkedin-in white-text mr-4"> </i>
                    </a>
                    <a className="ins-ic" href="https://www.instagram.com/jcode10/">
                        <i className="fab fa-instagram white-text"> </i>
                    </a>
                <div id="contactFooterBtnContainer">
                    <Link to="/contact">
                        <button id="contactFooterBtn" className="rounded"><i className="fa fa-envelope-o" aria-hidden="true"></i> Contact Me</button>
                    </Link>
                </div>
                  </div>
                  {/* <a id="topOfPageArrowContainer" className="ins-ic rounded-circle " href={this.props.top}>
                        <i id="topOfPageArrow" className="fas fa-angle-up align-top"></i>
                    </a> */}
                    <div id="topOfPageArrowContainer" className="d-flex justify-content-center">
                    <a  id="topOfPageArrow" className="ins-ic rounded-circle " href={this.props.top}>
                        <i className="fas fa-angle-up align-top"></i>
                        </a>
                        <svg id="topOfPageArrowCircle"  viewBox="0 0 110 100">
                        <circle cx="50%" cy="55%" r="50%" stroke="white" strokeWidth="3" fill="white" />
                        Sorry, your browser does not support inline SVG.  
                        </svg> 
                    </div>
                    
            </footer>
        )
    }
}

export default Footer;