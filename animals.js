import React from "react";
import ani from "./animals.jpg";
const Animals = () =>{
    return(
      <>
      <div>
        <h2 style={{fontSize:50+'px'}}>Animals Resource</h2>
        <div className="div1" >
          <img src={ani} height={400} width={400} border="sloid"/><br/>
        </div>
          <a href="https://en.wikipedia.org/wiki/Animal" target="_blank" style={{fontSize:50+'px'}}>Click here</a>
      </div>
      </>
    );
}

export default Animals;