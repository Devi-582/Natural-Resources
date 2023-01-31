import React from "react";
import ReactDOM from "react-dom/client";
import Animals from "./animals";
import Minerals from "./minerals";
import Water from "./water";
import Forest from "./forest";
import Rock from "./rock";
import "./index.css";

const Resource = () =>{
    return(
      <>
      <h1 align="center" style={{fontSize:70+'px'}}>Natural Resources</h1>
      <div class="div2">
        <Animals />
        <Minerals />
        <Water />
        <Forest />
        <Rock />
      </div>
      </>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Resource />);
export default Resource;
