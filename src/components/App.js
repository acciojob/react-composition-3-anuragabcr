
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip text="This is a tooltip for the first text">
          Hover over me!
        </Tooltip>
        <br />
        <Tooltip text="Another tooltip, even longer!">
          This text has a longer tooltip description.
        </Tooltip>
    </div>
  )
}

export default App
