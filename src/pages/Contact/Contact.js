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

  // handleInputChange = event => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const fname = document.getElementById('inputFname').value;
  //   const lname = document.getElementById('inputLname').value;
  //   const email = document.getElementById('inputEmail').value;
  //   const number = document.getElementById('inputNumber').value;
  //   const message = document.getElementById('inputMessage').value;
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3002/send",
  //     data: {
  //       fname: fname,
  //       lname: lname,
  //       email: email,
  //       number: number,
  //       message: message
  //     }
  //   }).then((response)=> {
  //     if(response.data.msg === 'success') {
  //       this.setState({
  //         emailNotSent: false,
  //         emailSent: true
  //       })
  //     } else if (response.data.msg === 'fail') {
  //       alert("Message failed to send");
  //     }
  //   })


  // };

  render() {
    return (
      // <div className="container-fluid justify-content-center mainContainer testBackground bioScroll">
      //   <div className="row customRow">
      //     <div className="col-lg-2 d-block d-sm-none d-none d-sm-block d-md-block sideNavMainContainer d-flex justify-content-center">
      //           <SideNav />
      //     </div>
      //     <div id="topOfContactCol" className="d-block col-lg-10 noPadding">
      //       <NavTitle title="Contact" />
      //       <ResTopNav />
      //       <div id="mainContactContainer">
      //         <div id="topContactContainer">
      //           <div id="contactRow" className="row" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
      //             <div className="col-sm-12 col-m-6 col-lg-6 contactCol">
      //               <div id="contactContentOnImg">
      //                 <i className="fab fa-github contentOnImgIcon"></i><p className="contentOnImgTitle">My Github</p>
      //                 <a className="contentOnImgText" href="https://github.com/joshuaeup">Joshuaeup</a>
      //                 <i className="fas fa-phone contentOnImgIcon"></i><p className="contentOnImgTitle">Lets Talk</p>
      //                 <p className="contentOnImgText">+1 (980) 365-1799</p>
      //                 <i className="fas fa-envelope contentOnImgIcon"></i><p className="contentOnImgTitle">Email</p>
      //                 <p className="contentOnImgText">joshuaeup@gmail.com</p>
      //               </div>
      //               <img id="contactPageImg" alt="Contact" src={contactPhoto} />
      //             </div>
      //             <div className="col-sm-12 col-m-6 col-lg-6 contactCol">
      //               <form id="mainFormContainer" onSubmit={this.handleSubmit.bind(this)} method="POST">
      //                 <div className="row customFormRow d-flex justify-content-center">
      //                   <h1 id="formTitle" className="text-center">Send Me A Message</h1>
      //                   <div className="formFieldContainer row">
      //                     <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter your name *</label>
      //                     <div className="col-sm-6 col-md-6 col-lg-6 formInputContainer">
      //                       <input id="inputFname" type="text" className="formFields" placeholder="First name" />
      //                     </div>
      //                     <div className="col-sm-6 col-md-6 col-lg-6 formInputContainer">
      //                       <input id="inputLname" type="text" className="formFields" placeholder="Last name" />
      //                     </div>
      //                   </div>
      //                   <div className="formFieldContainer row">
      //                     <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter your email *</label>
      //                     <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
      //                       <input id="inputEmail" type="email" className="formFields" placeholder="Eg. example@email.com" />
      //                     </div>
      //                   </div>
      //                   <div className="formFieldContainer row">
      //                     <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter phone number</label>
      //                     <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
      //                       <input id="inputNumber" type="tel" className="formFields" placeholder="Eg. +1 800 0000000" />
      //                     </div>
      //                   </div>
      //                   <div className="formFieldContainer row">
      //                     <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Message *</label>
      //                     <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
      //                       <textarea id="inputMessage" rows="4" type="message" className="formFields" placeholder="Write a message" />
      //                     </div>
      //                   </div>
      //                   <div className="formFieldContainer row d-flex justify-content-center">
      //                     <button type="submit" id="formSubmitBtn" className="btn-primary">Send Message</button>
      //                   </div>
      //                 </div>
      //               </form>
      //             </div>
      //           </div>
      //         </div>
      //         <Footer top={this.state.topOfPage}/>
      //       </div>
      //     </div>
      //   </div>
      // </div>



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
                  {/* <h1 className="subPageTopTitle globalTextFont">Contact Me</h1> */}

                  {/* <form id="mainFormContainer">
                    <div className="row customFormRow d-flex justify-content-center">
                      <h1 id="formTitle" className="text-center">Send Me A Message</h1>
                      <div className="formFieldContainer row">
                        <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter your name *</label>
                        <div className="col-sm-6 col-md-6 col-lg-6 formInputContainer">
                          <input id="inputFname" type="text" className="formFields" placeholder="First name" />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 formInputContainer">
                          <input id="inputLname" type="text" className="formFields" placeholder="Last name" />
                        </div>
                      </div>
                      <div className="formFieldContainer row">
                        <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter your email *</label>
                        <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
                          <input id="inputEmail" type="email" className="formFields" placeholder="Eg. example@email.com" />
                        </div>
                      </div>
                      <div className="formFieldContainer row">
                        <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Enter phone number</label>
                        <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
                          <input id="inputNumber" type="tel" className="formFields" placeholder="Eg. +1 800 0000000" />
                        </div>
                      </div>
                      <div className="formFieldContainer row">
                        <label className="col-sm-12 col-md-12 col-lg-12 formLabel formFields">Message *</label>
                        <div className="col-sm-12 col-md-12 col-lg-12 formInputContainer">
                          <textarea id="inputMessage" rows="4" type="message" className="formFields" placeholder="Write a message" />
                        </div>
                      </div>
                      <div className="formFieldContainer row d-flex justify-content-center">
                        <button type="submit" id="formSubmitBtn" className="btn-primary">Send Message</button>
                      </div>
                    </div>
                  </form> */}
                </div>
                <div className="col-sm-12 col-m-6 col-lg-6 contactCol">
                  <div id="contactContentOnImg">
                    {/* <i className="fab fa-github contentOnImgIcon"></i><p className="contentOnImgTitle">My Github</p>
                    <a className="contentOnImgText" href="https://github.com/joshuaeup">Joshuaeup</a>
                    <i className="fas fa-phone contentOnImgIcon"></i><p className="contentOnImgTitle">Lets Talk</p>
                    <p className="contentOnImgText">+1 (980) 365-1799</p>
                    <i className="fas fa-envelope contentOnImgIcon"></i><p className="contentOnImgTitle">Email</p>
                    <p className="contentOnImgText">joshuaeup@gmail.com</p> */}
                  </div>
                  <img id="contactPageImgLeft" alt="Contact" src={ContactPhoto} />
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

export default Contact;
