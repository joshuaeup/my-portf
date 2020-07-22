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
              <Route exact path="/myport/" component={Home} />
              <Route exact path="/myport/bio" component={Bio} />
              {/* <Route exact path="/bio" component={NoMatch} /> */}
              <Route exact path="/myport/portfolio" component={Portfolio} />
              <Route exact path="/myport/portfolio/mock-one" component={mockOne} />
              <Route exact path="/myport/portfolio/valweb" component={valWeb} />
              <Route exact path="/myport/portfolio/tipCalculator" component={tipCalculator} />
              <Route extact path="/myport/portfolio/giphy" component={giphy} />
              <Route exact path="/myport/experience" component={Experience} />
              <Route exact path="/myport/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;