
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip text="This is a tooltip for the first text">
          <h2>Hover over me!</h2>
        </Tooltip>
        <br />
        <Tooltip text="Another tooltip, even longer!">
          <p>This text has a longer tooltip description.</p>
        </Tooltip>
    </div>
  )
}

export default App
