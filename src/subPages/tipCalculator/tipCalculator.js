import React from "react";
import NavTitle from "../../components/navTitle"
import TopNav from "../../components/topNav";
import Footer from "../../components/Footer"
import tipCalculator1 from "./tipCalculatorAssets/tipCalculator1.PNG";
import tipCalculator2 from "./tipCalculatorAssets/tipCalculator2.PNG";
import tipCalculator3 from "./tipCalculatorAssets/tipCalculator3.PNG";
require("./tipCalculator.css");

class tipCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topOfPage: "#topofPortCol",
            datePublished: "April 2020",
            swapPositions: "",
            adjustCol: "6",
            adjustGridCol: "6"
        }
    }

    componentWillMount() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener("resizeGrid", this.resize.bind(this));
        this.resize();
        this.resizeGrid();
    }

    resize() {
        if (window.innerWidth <= 1142) {
          this.setState({
              swapPositions: "flex-column-reverse",
              adjustCol: "12",
            });
        } else {
          this.setState({
            swapPositions: "6",
            adjustCol: "6",
          })
        }
      }

      resizeGrid() {
        if (window.innerWidth <= 960) {
          this.setState({
              adjustGridCol: "12"
            });
        } else {
          this.setState({
            adjustGridCol: "6"
          })
        }
      }


    render() {
        return (
        <div className="container-fluid justify-content-center subPagesMainContainer bioScroll">
          <div id="topofPortCol" className="d-block col-lg-12 noPadding">
            <NavTitle title="Tip Calculator" />
            <TopNav />
            <div className="subPageSubContainerWhite">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`}>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol`} data-aos="fade-right">
                        <h1 className="subPageTopTitle globalTextFont">Tip Calculator App</h1>
                        <hr />
                        <p className="subPageDate globalTextFont">
                            {this.state.datePublished}
                        </p>
                        <p className="subPageBody globalTextFont">The Tip Calculator was designed to allow the user to input a given check amount, then toggle between the 3 different tip options 15%, 18%, and 20%. After doing so the user will be given the calculated tip amount as well as total.  </p>
                    </div>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol d-flex justify-content-center`} data-aos="fade-left">
                        <img className="subPageImg" alt="Project logo" src="https://icons.iconarchive.com/icons/tristan-edwards/sevenesque/512/Calculator-icon.png" />
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="subImages" alt="Project logo" src={tipCalculator1} />
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="subImages" alt="Project logo" src={tipCalculator2} />
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="subImages" alt="Project logo" src={tipCalculator3} />
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">Background</h1>
                        <p className="subPageBody globalTextFont">The Tip Calculator was my first IOS project. The technologies I used for the project include some swift library functions and Autolayout properties. This project enabled me to practice linking the storyboard to the view controller.</p>
                    </div>
                </div>
            </div>
          </div>
          <Footer top={this.state.topOfPage}/>
        </div>
        )
    }

}

export default tipCalculator;