import React from "react";
import SideNav from "../../components/sideNav";
import NavTitle from "../../components/navTitle";
import ResTopNav from "../../components/resTopNav";
import Footer from "../../components/Footer";
import profilePhoto from "../../assets/bioPhoto3.JPG";
import profileOne from "../../profileImages/profileOne.JPG";
import profileTwo from "../../profileImages/profileTwo.JPG";
import profileThree from "../../profileImages/profileThree.JPG";
import profileFour from "../../profileImages/profileFour.JPG"; 
import profileFive from "..//../profileImages/profileFive.JPG";
import profileSix from "../../profileImages/profileSix.JPG";
import profileBrain from "../../profileImages/profileBrain.JPG";
import profileClock from "../../profileImages/profileClock.JPG";
import resume from "../../assets/resume.jpg";
require("./Bio.css");

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Gallery: [
        {
          id: 1,
          image: profileOne,
          link: "https://www.instagram.com/p/B1O9GcqHkS5lB_tUkwV5RrpxPW-LkBx_7zeZLs0/"
        },
        {
          id: 2,
          image: profileTwo,
          link: "https://www.instagram.com/p/Bz39MsRHtGoR3LEetYpGDC90dG8YzvokdUIYXI0/"
        },
        {
          id: 3,
          image: profileThree,
          link: "https://www.instagram.com/p/BfKBlk9hMPW/"
        },
        {
          id: 4,
          image: profileFour,
          link: "https://www.instagram.com/p/BeWyw1MhK-c/"
        },
        {
          id: 5,
          image: profileFive,
          link: "https://www.instagram.com/p/BeJjHIfBWY5/"
        },
        {
          id: 6,
          image: profileSix,
          link: "https://www.instagram.com/p/Be6sITNhnyt/"
        },
      ],
      toDoList: [
        {
          icon: "music",
          todo: "Listen to Music"
        },
        {
          icon: "hiking",
          todo: "Hike"
        },
        {
          icon: "dumbbell",
          todo: "Exercise"
        },
        {
          icon: "pen-nib",
          todo: "Write"
        },
        {
          icon: "gamepad",
          todo: "Play Video Games"
        },
        {
          icon: "utensils",
          todo: "Eat Food..."
        },
      ],
      opacity: "1",
      topOfPage: "#topBioContainer",
      scrollValue: 0,
      swapPositions: "",
      adjustCol: "6",
  }
}

componentDidMount() {
  window.scrollTo(0, 0);
  window.addEventListener("resize", this.resize.bind(this));
  this.resize();
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



  


  onColHover = (post, i) => {

    if(post.id === i) {
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
          <div id="topOfBioCol"  className="d-block col-lg-10 noPadding">
            <NavTitle title="Biography" />
            <ResTopNav />
            <div id="mainBioContainer">
              <div id="topBioContainer">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`} >
                  {/* <div className="col-sm-12 col-md-6 col-lg-6 order-sm-2 order-md-1 order-lg-1" > */}
                  <div className={`col-lg-${this.state.adjustCol} resonsiveCol`} >
                    <div data-aos="fade-right" id="bioTextContainer">
                      <h2 className="globalTextFont ">About Me</h2>
                      <p className="globalTextFont">I'm a Full Stack Web Developer</p>
                      <p className="globalTextFont">I began programming when I was 15 years old when my father introduced me to a wide range of advancements in the IT field. I have a passion to solve puzzles and create solutions; programming gives me that ability. My goal is not to watch the future, form before my eyes, but to shape it for others.
                      </p>
                      <div className="row py-4 d-flex align-items-start">
                        <div className="col-md-6 col-lg-7 text-center text-md-left">
                            <a className="fb-ic" href="https://github.com/joshuaeup">
                                <i className="fab fa-github white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic" href="https://codepen.io/joshuaeup">
                                <i className="fab fa-codepen white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic" href="https://twitter.com/joshuaeup">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="li-ic" href="https://www.linkedin.com/in/joshua-proctor/">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.instagram.com/jcode10/">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-${this.state.adjustCol} d-flex justify-content-center`}>
                    <img className="bioProfileImg" alt="Bio Profile" src={profilePhoto} />
                  </div>
                </div>
                <div className="row bioGridRow d-flex justify-content-center" >
                  {this.state.Gallery.map((post, i) => (
                    <div data-aos="zoom-in-left" className="col-sm-3 col-md-3 col-lg-2" key={i}>
                    <a href={post.link}>
                      <div id="bioCard" className="card subBioImgContainer changeOpacity"
                        onMouseOver={this.onColHover.bind(this, post, i)} onMouseOut={this.onBackHover.bind(this)}>
                        <img id="subBioImg" className="card-img-top" src={post.image} alt="Sub Gallery" />
                      </div>
                      </a>
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
              <div className="bioExperienceContainer">
                <div className="row " >
                  <div className="col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center d-flex align-items-center bioExperienceTextContainer">
                    <div>
                      <h1 className="bioExperienceTitleLeft">Back End</h1>
                      <p className="bioExperienceTextLeft">“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center d-flex align-items-center">
                    <div className="bioExperiencePhotoContainer">
                      <h1 className="bioExperienceTitleOnImg text-center">My Brain</h1>
                      <img className="bioBrainImg" alt="Bio Profile" src={profileBrain} />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center d-flex align-items-center bioExperienceTextContainer">
                    <div>
                      <h1 className="bioExperienceTitleRight">Front End</h1>
                      <p className="bioExperienceTextRight">“In order to be irreplaceable, one must always be different” – Coco Chanel</p>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="bioExperienceContainerTwo">
                <div className={`row d-flex justify-content-center ${this.state.swapPositions}`} >
                  <div className={`col-lg-${this.state.adjustCol} d-flex justify-content-center d-flex align-items-center bioExperienceTextContainer freeTimeCol`}>
                    <div className="">
                      <h1 className="bioExperienceTitleRight">When I'm not programming I...</h1>
                      {this.state.toDoList.map((post, i) => (
                        <div key={i}>
                          <i className={`toDoIcon fas fa-${post.icon}`}></i>
                          <p className="toDoText bioExperienceTextRight">{post.todo}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`col-lg-${this.state.adjustCol} d-flex justify-content-center d-flex align-items-center `}>
                    <div className="bioExperiencePhotoContainer">
                      <h1 className="bioFreeTimeTitle text-center">Free Time</h1>
                      <img className="bioClockImg" alt="Bio Profile" src={profileClock} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bioResumeContainer d-flex justify-content-center">
                <div className="row resumeRow">
                  <div className="resumeInnerContainer">
                    <div className="skillsHeader d-flex justify-content-between">
                      <h1 className="glowTitle" data-toggle="collapse" data-target="#collapseResume" aria-expanded="true" aria-controls="collapseResume">Resume</h1>
                      <i className="fa fa-desktop experienceTitleIcon" aria-hidden="true"></i>
                    </div>
                    <hr></hr>
                    <div className={`skillsBody collapse ${this.state.collapse}`} id="collapseResume" data-parent="#accordion">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <img id="resumeImg" alt="resume" src={resume}/>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            <Footer top={this.state.topOfPage}/>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default Bio;