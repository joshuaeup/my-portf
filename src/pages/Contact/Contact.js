import React from "react";
import SideNav from "../../components/sideNav";
import NavTitle from "../../components/navTitle"
import ResTopNav from "../../components/resTopNav";
import Footer from "../../components/Footer";
import ContactPhoto from "../../assets/memojii.JPG";

require("./Contact.css");

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailNotSent: true,
      emailSent: false,
      topOfPage: "#topOfContactCol"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div className="container-fluid justify-content-center mainContainer testBackground bioScroll">
      <div className="row customRow">
        <div className="col-lg-2 d-block d-sm-none d-none d-sm-block d-md-block sideNavMainContainer d-flex justify-content-center">
              <SideNav />
        </div>
        <div id="topOfContactCol" className="d-block col-lg-10 noPadding">
          <NavTitle title="Contact" />
          <ResTopNav />
          <div id="mainContactContainer">
            <div id="topContactContainer">
              <div id="contactRow" className="row" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                <div id="contactPageRightCol" className="col-sm-12 col-m-6 col-lg-6 contactCol text-center">
                  <h1 id="contactPageTitle" className="subPageTopTitle globalTextFont">Contact Me</h1>
                  <i className="fab fa-github contentOnImgIcon"></i><p className="contentOnImgTitle">My Github</p>
                    <a className="contentOnImgText" href="https://github.com/joshuaeup">Joshuaeup</a>
                    <i className="fas fa-phone contentOnImgIcon"></i><p className="contentOnImgTitle">Lets Talk</p>
                    <p className="contentOnImgText">+1 (980) 365-1799</p>
                    <i className="fas fa-envelope contentOnImgIcon"></i><p className="contentOnImgTitle">Email</p>
                    <p className="contentOnImgText">joshuaeup@gmail.com</p>
                </div>
                <div className="col-sm-12 col-m-6 col-lg-6 contactCol">
                  <div id="contactContentOnImg">
                  </div>
                  <img id="contactPageImgLeft" alt="Contact" src={ContactPhoto} />
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact;
