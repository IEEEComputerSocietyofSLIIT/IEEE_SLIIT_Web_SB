import React from "react";
import "../Button.css"; // Import the CSS file for styling

const ScrollButton = ({ targetElement }) => {
  const handleClick = () => {
    // Scroll to the specified target element on click
    <targetElement className="scrollIntoView"></targetElement>
    ({ behavior: "smooth" });
  };

  return (
    <button className="scrollButton" onClick={handleClick}>
      Scroll
    </button>
  );
};

export default ScrollButton;
