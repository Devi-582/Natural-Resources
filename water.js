import React from "react";
import acqua from "./water.jpg";
const Water = () =>{
    return(
      <>
      <div>
          <h2 style={{fontSize:50+'px'}}>water Resource</h2>
        <div className="div1">
          <img src={acqua} height={400} width={400} /><br/>
        </div>
          <a href="https://en.wikipedia.org/wiki/Water" target="_blank" style={{fontSize:50+'px'}}>Click here</a>
      </div>
        </>
    );
}

export default Water;