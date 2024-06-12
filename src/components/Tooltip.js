import React, { useState } from 'react';

function Tooltip({ children, text, tag }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltip = () => {
    if (tag === "h2") {
        return (
            <h2 className='tooltip'>
                <div className='tooltiptext'>{text}</div>
            </h2>
        )
    } else {
        return (
            <p className=''>
                <div className='tooltiptext'>{text}</div>
            </p>
        )
    }
  }

  return (
    <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isVisible && getTooltip()}
      <br />
      {children}
    </div>
  );
}

export default Tooltip;
