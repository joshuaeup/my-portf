import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from 'aos';
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import mockOne from "./subPages/mockOne";
import valWeb from "./subPages/valWeb";
import tipCalculator from "./subPages/tipCalculator";
import giphy from "./subPages/giphy";

import 'aos/dist/aos.css';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollValue: 0
    }
  }



  componentDidMount(){
    AOS.init({
      duration : 2000
    })



    // var ua = navigator.userAgent.toLowerCase(); 
    // if (ua.indexOf('safari') !== -1) { 
    //   if (ua.indexOf('chrome') > -1) {
    //     alert("Chrome") // Chrome
    //   } else {
    //     alert("Safari") // Safari
    //   }
    // }
  }

  render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/my-port/" component={Home} />
              {/* <Route exact path="/my-port/bio" component={Bio} /> */}
              {/* <Route exact path={process.env.PUBLIC_URL + "/bio"} component={Bio} /> */}
              <Route exact path={process.env.PUBLIC_URL + "/my-port/bio"} component={Bio} />
              <Route exact path="/my-port/portfolio" component={Portfolio} />
              <Route exact path="/my-port/portfolio/mock-one" component={mockOne} />
              <Route exact path="/my-port/portfolio/valweb" component={valWeb} />
              <Route exact path="/my-port/portfolio/tipCalculator" component={tipCalculator} />
              <Route extact path="/my-port/portfolio/giphy" component={giphy} />
              <Route exact path="/my-port/experience" component={Experience} />
              <Route exact path="/my-port/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;