import React, { useState } from 'react';

function Tooltip({ children, text }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isVisible && <span className="tooltiptext">{text}</span>}
      <br />
      {children}
    </div>
  );
}

export default Tooltip;
