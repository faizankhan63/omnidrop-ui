import React from "react";

import style from "./info-card.module.scss";
const InfoCard = ({ title, desc, image, className }) => {
  return (
    <div className={`${className && className} ${style.main}`}>
      <p className={style.title}>{title}</p>
      <p className={style.desc}>{desc}</p>
      {image && (
        <img src={image} alt="infocard-image" className={style.imageClass} />
      )}
    </div>
  );
};

export default InfoCard;
