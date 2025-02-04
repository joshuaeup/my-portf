import React from "react";
import { BrowserRouter as Redirect, Route } from "react-router-dom";
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
import gateWay from "./subPages/gateWay";
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
        // <HashRouter basename="/my-port/">
          <div>
            {/* <Switch> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/bio" component={Bio} />
              {/* <Route exact path={process.env.PUBLIC_URL + "/bio"} component={Bio} /> */}
              {/* <Route exact path={process.env.PUBLIC_URL + "/bio"} component={Bio} /> */}
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/portfolio/mock-one" component={mockOne} />
              <Route exact path="/portfolio/valweb" component={valWeb} />
              <Route exact path="/portfolio/tipcalculator" component={tipCalculator} />
              <Route extact path="/portfolio/giphy" component={giphy} />
              <Route extact path="/portfolio/gateway" component={gateWay} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/contact" component={Contact} />
              <Redirect exact from="/" component={NoMatch} />
            {/* </Switch> */}
          </div>
        // </HashRouter>
      );
    }
  }

export default App;