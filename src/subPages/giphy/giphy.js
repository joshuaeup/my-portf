import React from "react";
import NavTitle from "../../components/navTitle"
import TopNav from "../../components/topNav";
import Footer from "../../components/Footer"
import giphy1 from "./giphyAssets/giphy1.PNG";
import giphy2 from "./giphyAssets/giphy2.PNG";
import giphy3 from "./giphyAssets/giphy3.PNG";
require("./giphy.css");

class giphy extends React.Component {
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
            <NavTitle title="Giphy" />
            <TopNav />
            <div className="subPageSubContainerWhite">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`}>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol`} data-aos="fade-right">
                        <h1 className="subPageTopTitle globalTextFont">Giphy</h1>
                        <hr />
                        <p className="subPageDate globalTextFont">
                            {this.state.datePublished}
                        </p>
                        <p className="subPageBody globalTextFont">The Giphy App was designed to allow the user to open the application each day and view the top trending Gifs for that day. The App const of a collection view that expands to a larger display of the automatically played Gif.</p>
                    </div>
                    <div className={`col-lg-${this.state.adjustCol} resonsiveCol d-flex justify-content-center`} data-aos="fade-left">
                        <img className="subPageImg" alt="Project logo" src="https://store-images.s-microsoft.com/image/apps.54373.13510798886612985.f025f35f-da60-4f9e-ad25-715eae369216.78618d24-3d70-4bc9-8f67-293136ad658c" />
                    </div>
                </div>
            </div>
            <div className="subPageSubContainerGray">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="subImages" alt="Project logo" src={giphy1} />
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="subImages" alt="Project logo" src={giphy2} />
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img className="subImages" alt="Project logo" src={giphy3} />
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 textBodyContainer" data-aos="fade-up" data-aos-offset="0">
                        <h1 className="subPageTitle globalTextFont">Background</h1>
                        <p className="subPageBody globalTextFont">This application utilizes The Giphy API to make Asynchronous GET request, returning the data within a callback closure then displaying the result to the view. This project enabled me to practice linking a swift application to an API. </p>
                    </div>
                </div>
            </div>
          </div>
          <Footer top={this.state.topOfPage}/>
        </div>
        )
    }

}

export default giphy;