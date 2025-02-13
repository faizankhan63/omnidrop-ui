import React, { useState } from "react";
import arrow from "../../assets/arrow-up.svg";
import style from "./faq-tile.module.scss";

const FaqTile = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.main} onClick={toggleFAQ}>
      <div>
        <p className={style.faqQuestion}>{question}</p>
        <p className={`${style.faqAnswer} ${isOpen ? style.show : style.hide}`}>
          {answer}
        </p>
      </div>
      <img
        src={arrow}
        alt="arrow-up"
        className={`${style.arrowIcon} ${isOpen ? style.rotate : ""}`}
      />
    </div>
  );
};

export default FaqTile;
