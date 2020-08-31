import React from "react";
import NavTitle from "../../components/navTitle"
import TopNav from "../../components/topNav";
import Footer from "../../components/Footer"
import gateWayBanner from "./GateWayAssets/gateWayBanner.PNG";
import gateWaySub1 from "./GateWayAssets/gateWaySub1.PNG";
import gateWaySub2 from "./GateWayAssets/gateWaySub2.PNG";
import gateWaySubBottom from "./GateWayAssets/gateWaySubBottom.PNG";
require("./gateWay.css");

class gateWay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frontlLanguagesUsed: ["HTML", "CSS"],
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
            <NavTitle title="GateWay" />
            <TopNav />
            <div className="subPageSubContainerWhite">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`}>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol`} data-aos="fade-right">
                        <h1 className="subPageTopTitle globalTextFont">GateWay</h1>
                        <hr />
                        <p className="subPageDate globalTextFont">
                            November 2017
                        </p>
                        <p className="subPageBody globalTextFont">I designed The San Francisco Travel Site for the Road To Hire Gateway Fellowship. The purpose was to develop a fully interactive/responsive informative site with the use of HTML and CSS only. </p>
                    </div>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol d-flex justify-content-center`} data-aos="fade-left">
                        <img className="subPageImg" alt="Project logo" src="https://www.pinclipart.com/picdir/big/20-205603_image-of-bridges-clipart-0-golden-gate-bridge.png" />
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row" >
                    <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200">
                        <img className="subPageWideImg" alt="Project logo" src={gateWayBanner} />
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">Background</h1>
                        <p className="subPageBody globalTextFont">The San Francisco Travel Site was my first responsive site developed without the addition of any Front-End libraries. This project enabled me to practice programming from the ground up.  </p>
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerWhite">
                <div className="row" data-aos="fade-up" data-aos-offset="200">
                    <div className={`col-${this.state.adjustGridCol}`}>
                        <img className="subPageTopGrid" alt="Project logo" src={gateWaySub1} />
                    </div>
                    <div className={`col-${this.state.adjustGridCol}`}>
                        <img className="subPageTopGrid" alt="Project logo" src={gateWaySub2} />
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">UI Design Inspiration</h1>
                        <p className="subPageBody globalTextFont">When developing the UI for The San Francisco Travel Site. My inspiration originated from the simplistic designs of Netflix.com, Hulu.com, and Apple.com</p>
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-offset="200">
                        <img className="subPageMobileImg rounded mx-auto d-block" alt="Project logo" src={gateWaySubBottom} />
                    </div>
                    <div className="col-12" data-aos="fade-up" data-aos-offset="200">
                        <h1 className="subPageTitle globalTextFont text-center">Languages Used</h1>
                    </div>
                    <div className="col-6 textBodyContainer" data-aos="fade-right">
                        <h1 className="subPageSecondaryTitle globalTextFont" >Front End</h1>
                        {this.state.frontlLanguagesUsed.map((language, i) => (
                            <p className="subPageBody globalTextFont" key={i}>{i + 1}. {language}</p>
                        ))}
                    </div>
                    <div className="col-6 textBodyContainer" data-aos="fade-left">
                        <h1 className="subPageSecondaryTitle globalTextFont" >Back End</h1>
                    </div>
                </div>
            </div>
          </div>
          <Footer top={this.state.topOfPage}/>
        </div>
        )
    }

}

export default gateWay;