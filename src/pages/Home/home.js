import React from "react";
import TopNav from "../../components/topNav"
import { Link } from "react-router-dom";
require("./Home.css");

class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    activated: "active",
    focusIcons: [
      {
        title: "Javascript",
        icon: "js-square"
      }
    ]
  }
  }
  componentDidMount() {
    this.setState({
      activated: "active"
    })
    window.scrollTo(0, 0)
  }



 render() {
  return (
        <div id="homeMainContainer" className="d-block col-lg-12">
          <div className="container justify-content-center mainHomeContainer">
            <div className="d-flex justify-content-center specContainer d-flex flex-column">
              <div className="col-12 customBox">
                <h1 className="center homeFont">Joshua Proctor</h1>
                <h1 className="center homeFont">Full Stack Web Developer</h1>
              </div>
              <hr />
            </div>
            <div className="btnCustomBox d-flex justify-content-center">
              <Link to="/bio">
                <button id="viewWorkBtn">Who Am I?</button>
              </Link>
            </div>
              <div className="btnCustomBox d-flex justify-content-center">
              <Link to="/portfolio">
                <button id="viewWorkBtn">View My Work</button>
              </Link>
            </div>
          </div>
          
          <TopNav />
        </div>
  )}
};

export default Home;
