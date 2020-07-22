import React from "react"
import TopNav from "../../components/topNav";
import pageNotFound from "../../assets/pageNotFound.JPG"
require("./NoMatch.css");

const NoMatch = () => {
    return (
        <div id="noMatchImg">
          <TopNav />
          <img id="notFoundImg" alt="pageNotFound" src={pageNotFound}/>
        </div>
    )
}

export default NoMatch