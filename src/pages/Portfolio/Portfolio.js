import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/sideNav";
import NavTitle from "../../components/navTitle";
import ResTopNav from "../../components/resTopNav";
import Footer from "../../components/Footer";
// MockOne
import MockOne from "../../subPages/mockOne/mockOneAssets/mockOneBanner.PNG";
// ValWeb
import ValWeb from "../../subPages/valWeb/valWebAssets/valWebBanner.PNG";
// TipCalculator
import TipCalculator from "../../subPages/tipCalculator/tipCalculatorAssets/tipCalculatorBanner.PNG";
// Giphy
import Giphy from "../../subPages/giphy/giphyAssets/giphyBanner.PNG";

require("./Portfolio.css");

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Projects: [
        {
          title: "mock-one",
          name: "Portfolio Mock-One",
          image: MockOne,
          type: "Personal (Web)"
        },
        {
          title: "valweb",
          name: "Valerie Web",
          image: ValWeb,
          type: "Personal (Web)"
        },
        {
          title: "tipcalculator",
          name: "Tip Calculator",
          image: TipCalculator,
          type: "Personal (IOS)"
        },
        {
          title: "giphy",
          name: "Giphy",
          image: Giphy,
          type: "Personal (IOS)"
        }
      ],
      opacity: "1",
      topOfPage: "#topofPortCol"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onColHover = (project, i) => {
    console.log(project.id)
    console.log(i + 1)
    if(project.id === i) {
      this.setState({
        opacity: "1",
      });
    } else {
      this.setState({
        opacity: "0.4"
      })
    }
    
  }

  onBackHover = () => {
    this.setState({
      opacity: "1",
      transition: ""
    })
  }

  

  render() {    
    return (
      <div className="container-fluid justify-content-center mainContainer testBackground bioScroll">
        <div className="row customRow">
          <div className="col-lg-2 d-block d-sm-none d-none d-sm-block d-md-block sideNavMainContainer d-flex justify-content-center">
                <SideNav />
          </div>
          <div id="topofPortCol" className="d-block col-lg-10 noPadding">
            <NavTitle title="Portfolio" />
            <ResTopNav />
            <div id="portCardContainer">
              <div className="row" >
                {this.state.Projects.map((project, i) => (
                  <div data-aos="zoom-in-left" className="col-sm-6 col-md-6 col-lg-4"  key={i}>
                  <Link to={`portfolio/${project.title}`}>
                    <div id="portCard" className="card changeOpacity" onMouseOver={this.onColHover.bind(this, project, i)} onMouseOut={this.onBackHover.bind(this)}>
                      <img className="card-img-top projectImg" src={project.image} alt="Card cap"/>
                      <div id="portCardContent" className="d-flex justify-content-between">
                        <div className="card-body portCardBody">
                          <h5 className="projectName">{project.name}</h5>
                          <p className="card-text projectType">{project.type}</p>
                        </div>
                        <i id="portColArrow" className="fa fa-angle-right " aria-hidden="true"></i>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
                <style jsx="true">{`
                  .changeOpacity {
                    opacity: ${this.state.opacity};
                    -webkit-transition: opacity 0.4s ease-out;
                    -moz-transition: opacity 0.4s ease-out;
                    -o-transition: opacity 0.4s ease-out;
                    transition: opacity 0.4s ease-out;
                  }
                `}</style>
                
              </div>
            </div>
            <Footer top={this.state.topOfPage}/>
          </div>
        </div>
      </div>      
    );
  }
}

export default Portfolio;
