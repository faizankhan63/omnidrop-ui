import React from "react";

import Button from "../button";

import arrow from "../../assets/button-arrow-black.svg";

import style from "./discover-card.module.scss";
const DiscoverCard = ({ image, title, desc }) => {
  return (
    <div className={style.cardMain}>
      <div className={style.topSection}>
        <img src={image} className={style.cardImage} alt="descImage" />
      </div>
      <div className={style.gradientSection}>
        <p className={style.titleClass}>{title}</p>
        <p className={style.descClass}>{desc}</p>
        <Button text={"Learn more"} className={style.btnClass} logo={arrow} />
      </div>
    </div>
  );
};

export default DiscoverCard;
