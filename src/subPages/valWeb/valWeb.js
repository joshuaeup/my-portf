import React from "react";
import NavTitle from "../../components/navTitle"
import TopNav from "../../components/topNav";
import Footer from "../../components/Footer"
import Logo from "./valWebAssets/valWebLogo.PNG";
import valWebBanner from "./valWebAssets/valWebBanner.PNG"
import valWebSub1 from "./valWebAssets/valWebSub1.PNG";
import valWebSub2 from "./valWebAssets/valWebSub2.PNG";
import valWebSub3 from "./valWebAssets/valWebSub3.PNG";
import valWeSubBottom from "./valWebAssets/valWebSubBottom.PNG";
require("./valWeb.css");

class valWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frontlLanguagesUsed: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
            backlLanguagesUsed: ["JavaScript", "Node.js", "Express.js"],
            topOfPage: "#topofPortCol",
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
            <NavTitle title="ValWeb" />
            <TopNav />
            <div className="subPageSubContainerWhite">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`}>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol`} data-aos="fade-right">
                        <h1 className="subPageTopTitle globalTextFont">Valerie Web</h1>
                        <hr />
                        <p className="subPageDate globalTextFont">
                            June 2019
                        </p>
                        <p className="subPageBody globalTextFont">I designed Valweb as a single page Realestate website for a local realtor. The recipient was looking for an interactive design that would serve to showcase her biography, while also implementing all the different forms of contacting her.</p>
                    </div>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol d-flex justify-content-center`} data-aos="fade-left">
                        <img className="subPageImg" alt="Project logo" src={Logo} />
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row" >
                    <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200">
                        <img className="subPageWideImg" alt="Project logo" src={valWebBanner} />
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">Background</h1>
                        <p className="subPageBody globalTextFont">The technologies I used to program Valweb were React for my Front-End framework and Express.js for my server-side rendering. My reasoning for choosing React was to allow constant state updates.</p>
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerWhite">
                <div className="row" data-aos="fade-up" data-aos-offset="200">
                    <div className={`col-${this.state.adjustGridCol}`}>
                        <img className="subPageTopGrid" alt="Project logo" src={valWebSub1} />
                    </div>
                    <div className={`col-${this.state.adjustGridCol}`}>
                        <img className="subPageTopGrid" alt="Project logo" src={valWebSub2} />
                    </div>
                    <div className="col-12">
                        <img className="subPageBottomGrid" alt="Project logo" src={valWebSub3} />
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">UI Design Inspiration</h1>
                        <p className="subPageBody globalTextFont">When developing the UI for ValWeb's Portfolio site. My inspiration came from an open home view. layering components on top of each other to give the appearance of a window. A small technique that improves the user experience. </p>
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-offset="200">
                        <img className="subPageWideImg" alt="Project logo" src={valWeSubBottom} />
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
                        {this.state.backlLanguagesUsed.map((language, i) => (
                            <p className="subPageBody globalTextFont" key={i}>{i + 1}. {language}</p>
                        ))}
                    </div>
                </div>
            </div>
          </div>
          <Footer top={this.state.topOfPage}/>
        </div>
        )
    }

}

export default valWeb;