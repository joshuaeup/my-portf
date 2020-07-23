import React from "react";
import SideNav from "../../components/sideNav";
import NavTitle from "../../components/navTitle";
import ResTopNav from "../../components/resTopNav";
import Footer from "../../components/Footer";
const allHtml = require("../../allHtml.js");
const allCss = require("../../allCss.js");
const allJavascript = require("../../allJavascript.js");
const allBackend = require("../../allBackend.js");
const allOther = require("../../allOther.js");
require("./Experience.css");

class Languages extends React.Component {
  constructor() {
    super();
    this.state = {
      Javascript: allJavascript,
      HTML: allHtml,
      CSS: allCss,
      Backend: allBackend,
      Other: allOther,
      topOfPage: "#topOfExpCol",
      collapse: "show"
    };
  }




  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    window.scrollTo(0, 0);
  }

  resize() {
    if (window.innerWidth <= 700) {
      this.setState({
          collapse: "hide"
        });
    } else {
      this.setState({
        collapse: "show"
      })
    }
  }

  render() {


    return (
    <div className="container-fluid justify-content-center mainContainer testBackground bioScroll">
      <div className="row customRow">
        <div className="col-lg-2 d-block d-sm-none d-none d-sm-block d-md-block sideNavMainContainer d-flex justify-content-center">
          <SideNav />
        </div>
        <div id="topOfExpCol" className="d-block col-lg-10 noPadding portMainBackground">    
          <NavTitle title="Skills" />
          <ResTopNav />
            <div id="skillsMainContainer">
              <div className="row" >
                <div className="skillsInnerContainer" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="skillsHeader d-flex justify-content-between">
                    <h1 className="skillsHeaderTitle">Javascript</h1>
                    <i className="fa fa-desktop experienceTitleIcon" aria-hidden="true"></i>
                  </div>
                  <hr></hr>
                  <div className={`skillsBody collapse ${this.state.collapse}`} id="collapseOne" data-parent="#accordion">
                    <div className="row">
                      {this.state.Javascript.map((post, i) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                          <img
                            className="card-img-top languageImg rounded mx-auto d-block "
                            src={post.image}
                            alt={`${post.name}`}
                          />
                          <p className="skillsBodyText">{post.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="skillsInnerContainer" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <div className="skillsHeader d-flex justify-content-between">
                    <h1 className="skillsHeaderTitle">HTML</h1>
                    <i className="fa fa-pencil experienceTitleIcon" aria-hidden="true"></i>
                  </div>
                  <hr></hr>
                  <div className={`skillsBody collapse ${this.state.collapse}`} id="collapseTwo" data-parent="#accordion">
                    <div className="row">
                      {this.state.HTML.map((post, i) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                          <img
                            className="card-img-top languageImg rounded mx-auto d-block"
                            src={post.image}
                            alt={`${post.name}`}
                          />
                          <p className="skillsBodyText">{post.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="skillsInnerContainer" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <div className="skillsHeader d-flex justify-content-between">
                    <h1 className="skillsHeaderTitle">CSS</h1>
                    <i className="fa fa-pencil experienceTitleIcon" aria-hidden="true"></i>
                  </div>
                  <hr></hr>
                  <div className={`skillsBody collapse ${this.state.collapse}`} id="collapseThree" data-parent="#accordion">
                    <div className="row">
                      {this.state.CSS.map((post, i) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                          <img
                            className="card-img-top languageImg rounded mx-auto d-block"
                            src={post.image}
                            alt={`${post.name}`}
                          />
                          <p className="skillsBodyText">{post.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="skillsInnerContainer" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <div className="skillsHeader d-flex justify-content-between">
                    <h1 className="skillsHeaderTitle">Backend</h1>
                    <i className="fa fa-desktop experienceTitleIcon" aria-hidden="true"></i>
                  </div>
                  <hr></hr>
                  <div className={`skillsBody collapse ${this.state.collapse}`} id="collapseFour" data-parent="#accordion">
                    <div className="row">
                      {this.state.Backend.map((post, i) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                          <img
                            className="card-img-top languageImg rounded mx-auto d-block"
                            src={post.image}
                            alt={`${post.name}`}
                          />
                          <p className="skillsBodyText">{post.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="skillsInnerContainer" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  <div className="skillsHeader d-flex justify-content-between">
                    <h1 className="skillsHeaderTitle">Other</h1>
                    <i className="fa fa-desktop experienceTitleIcon" aria-hidden="true"></i>
                  </div>
                  <hr></hr>
                  <div className={`skillsBody collapse ${this.state.collapse}`} id="collapseFive" data-parent="#accordion">
                    <div className="row">
                      {this.state.Other.map((post, i) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                          <img
                            className="card-img-top languageImg rounded mx-auto d-block"
                            src={post.image}
                            alt={`${post.name}`}
                          />
                          <p className="skillsBodyText">{post.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
