import React from "react";
import fore from "./forest.jpg";
const Forest = () =>{
    return(
      <>
      <div>
          <h2 style={{fontSize:50+'px'}}>Forests Resource</h2>
        <div className="div1">
          <img src={fore} height={400} width={400} /><br/>
        </div>
          <a href="https://en.wikipedia.org/wiki/Forest" target="_blank" style={{fontSize:50+'px'}}>Click here</a>
      </div>
        </>
    );
}

export default Forest;