import React from "react";

const Flag = ({ height }) => {
  return (
    <svg
      width="auto"
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flag shape */}
      <path d="M0,0 L0,75 L50,100 L100,75 L100,0 Z" fill="#2196F3" />

      {/* Rectangular body */}
    </svg>
  );
};

export default Flag;
