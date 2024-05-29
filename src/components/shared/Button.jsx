import React from "react";

const Button = ({ title, bgColor }) => {
  return (
    <button
      className={`lg:px-10 px-4 py-2 rounded-lg ${bgColor}  hover:scale-105
     transition-all duration-300`}
    >
      {title}
    </button>
  );
};

export default Button;
