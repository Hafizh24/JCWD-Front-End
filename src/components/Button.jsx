import React, { useState } from "react";

const Button = () => {
  const [display, setDisplay] = useState("block");
  const handleClick = () => {
    setDisplay("none");
  };
  return (
    <div>
      <button style={{ display: display }} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Button;
