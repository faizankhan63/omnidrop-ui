import React from "react";

import style from "./button.module.scss";
const Button = ({ text, onClick, className, logo }) => {
  return (
    <button
      className={`${className} ${style.buttonStyle}`}
      style={{
        justifyContent: logo ? "space-between" : "center",
        paddingRight: logo ? "5px" : "20px",
      }}
      onClick={onClick}
    >
      <span>{text}</span>
      {logo && <img src={logo} alt="button-logo" />}
    </button>
  );
};

export default Button;
