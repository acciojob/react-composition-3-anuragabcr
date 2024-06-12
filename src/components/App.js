
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip text="This is a tooltip" tag="h2">
          <h2>Hover over me</h2>
        </Tooltip>
        <br />
        <Tooltip text="This is another tooltip" tag="p">
          <p>Hover over me to see another tooltip</p>
        </Tooltip>
    </div>
  )
}

export default App
