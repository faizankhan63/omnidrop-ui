import React from "react";
import style from "./pricinng-card.module.scss";
import Button from "../button";
const PricingCard = ({ title, features, price, yearly, isPopular }) => {
  return (
    <div className={`${isPopular ? style.cardPopular : style.cardWrapper} `}>
      <p className={style.title}>{title}</p>
      <div className={style.pricingDiv}>
        <span className={style.pricing}>{price}</span>
        <span className={style.pricingSmall}>
          {" "}
          /month {yearly && "(Billed Yearly)"}
        </span>
      </div>
      <Button text={"GET STARTED"} className={style.btnClass} />
      <div>
        <p className={style.featureHeading}>What you get:</p>
        {features?.map((faq, index) => (
          <div key={index} className={style.featureDiv}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9557 6.40211L9.05079 20.0078L3.04214 13.9991L4.50055 12.5407L8.95032 16.9905L19.4035 5.04395L20.9557 6.40211Z"
                fill="#F9CB22"
              />
            </svg>

            <span className={style.featureText}>{faq}</span>
          </div>
        ))}
      </div>

      {isPopular && (
        <div className={style.popularLabelDiv}>
          <p className={style.popularLabel}>MOST POPULAR</p>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
