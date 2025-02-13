import React from "react";

import Button from "../../components/button";

import arrow from "../../assets/arrow-right-yellow.svg";

import style from "./turn-style.module.scss";
const TurnSection = () => {
  return (
    <div className={style.MainWrapper}>
      <h1>Now it’s your turn</h1>
      <Button text={"Get Started"} logo={arrow} className={style.btnClass} />
    </div>
  );
};

export default TurnSection;
