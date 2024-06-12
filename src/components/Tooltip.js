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
      {isVisible && <h2 className="tooltip">{text}</h2>}
      <br />
      {children}
    </div>
  );
}

export default Tooltip;
