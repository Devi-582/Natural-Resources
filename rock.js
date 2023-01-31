import React from "react";
import ro from "./rock.jpg";
const Rock = () =>{
    return(
      <>
      <div>
          <h2 style={{fontSize:50+'px'}}>Rocks Resource</h2>
        <div className="div1">
          <img src={ro} height={400} width={400} /><br/>
        </div>
          <a href="https://en.wikipedia.org/wiki/Rock_(geology)" target="_blank" style={{fontSize:50+'px'}}>Click here</a>
      </div>
        </>
    );
}

export default Rock;