
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip text="This is a tooltip" tag="h2">
          <h2 className="tooltip"><div><div>Hover over me</div></div></h2>
        </Tooltip>
        <br />
        <Tooltip text="This is another tooltip" tag="p">
          <p className="tooltip "><div>Hover over me to see another tooltip</div></p>
        </Tooltip>
    </div>
  )
}

export default App
