import React from "react";

import DiscoverCard from "../../components/discover-card";

import desc1 from "../../assets/discover1.svg";
import desc2 from "../../assets/discover2.svg";

import style from "./discover.module.scss";
const DiscoverSection = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.header}>
        <h1 className={style.headerText}>Discover why thousands of</h1>
        <h1 className={style.headerText}> dropshippers use Omnidrop</h1>
      </div>
      <div className={style.cardWrapper}>
        <DiscoverCard
          title={"Product Sourcing"}
          desc={
            "Over 1M+ products from the highest quality suppliers at the lowest prices with the fastest shipping times"
          }
          image={desc1}
        />

        <DiscoverCard
          title={"Automated Fulfillment"}
          desc={
            "In just a few clicks connect your online store to Omnidrop & automate all your product fulfillment"
          }
          image={desc2}
        />
      </div>
    </div>
  );
};

export default DiscoverSection;
