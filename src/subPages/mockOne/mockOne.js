import React from "react";
import NavTitle from "../../components/navTitle"
import TopNav from "../../components/topNav";
import Footer from "../../components/Footer"
import MockOneBanner from "./mockOneAssets/mockOneBanner.PNG"
import mockOneSub1 from "./mockOneAssets/mockOneSub1.PNG";
import mockOneSub2 from "./mockOneAssets/mockOneSub2.PNG";
import mockOneSub3 from "./mockOneAssets/mockOneSub3.PNG";
import mockOneSubBottom from "./mockOneAssets/mockOneSubBottom.PNG";
require("./mockOne.css");

class mockOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frontlLanguagesUsed: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
            backlLanguagesUsed: ["JavaScript", "Node.js", "Express.js", "SQL"],
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
            <NavTitle title="MockOne" />
            <TopNav />
            <div className="subPageSubContainerWhite">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`}>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol`} data-aos="fade-right">
                        <h1 className="subPageTopTitle globalTextFont">Portfolio Mock-One</h1>
                        <hr />
                        <p className="subPageDate globalTextFont">
                            November 2017
                        </p>
                        <p className="subPageBody globalTextFont">I designed the first version of my portfolio after completing the UNC Charlotte Coding Bootcamp. The purpose of this portfolio was to display my current coding abilities, while also housing all of the new projects I would develop in the future. </p>
                    </div>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol d-flex justify-content-center`} data-aos="fade-left">
                        <img className="subPageImg" alt="Project logo" src="https://cdn.auth0.com/blog/react-js/react.png" />
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row" >
                    <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200">
                        <img className="subPageWideImg" alt="Project logo" src={MockOneBanner} />
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">Background</h1>
                        {/* <p className="subPageBody globalTextFont">Like many of us, I spend more time at home than any other place. So it’s always been important for me to design a space that I love being in. I follow quite a few interior design enthusiasts on Instagram and Pinterest, and also subscribe to some newsletters for inspiration. I was discussing my favourite websites to follow with a friend one day, and we realised that there wasn’t a centralised place to go for the latest interior design news. Every morning, I read Designer News and Product Hunt to keep up with what’s happening in the design and product space. We thought that it would be cool to create a similar website for all of the interior design lovers out there. We asked some fellow interior enthusiasts if they’d be interested in using such a website and they all said yes, so we knew that we wouldn’t be the only ones using the site.</p> */}
                        <p className="subPageBody globalTextFont">The Portfolio Mock-One was my first larger scaled project using Javascript Libraries including React.js, and Express.js. This project enabled me to practice linking the Front-End UI design with the Back-End development structure. </p>
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerWhite">
                <div className="row" data-aos="fade-up" data-aos-offset="200">
                    <div className={`col-${this.state.adjustGridCol}`}>
                        <img className="subPageTopGrid" alt="Project logo" src={mockOneSub1} />
                    </div>
                    <div className={`col-${this.state.adjustGridCol}`}>
                        <img className="subPageTopGrid" alt="Project logo" src={mockOneSub2} />
                    </div>
                    <div className="col-12">
                        <img className="subPageBottomGrid" alt="Project logo" src={mockOneSub3} />
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">UI Design Inspiration</h1>
                        <p className="subPageBody globalTextFont">When developing the UI for the first model of my Portfolio. My inspiration came from the android development UI Design. The bottom navigation control was modeled after the same navigation within the android home User Interface structure.</p>
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-offset="200">
                        <img className="subPageMobileImg rounded mx-auto d-block" alt="Project logo" src={mockOneSubBottom} />
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

export default mockOne;