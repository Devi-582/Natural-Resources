import React from "react";
import min from "./minerals.jpg";
const Minerals = () =>{
    return(
      <>
      <div>
          <h2 style={{fontSize:50+'px'}}>Mineral Resource</h2>
        <div className="div1">
          <img src={min} height={400} width={400} /><br/>
        </div>
          <a href="https://en.wikipedia.org/wiki/Mineral" target="_blank" style={{fontSize:50+'px'}}>Click here</a>
      </div>
        </>
    );
}

export default Minerals;