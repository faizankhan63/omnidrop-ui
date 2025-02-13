import React from "react";

import style from "./pricing.module.scss";
import PricingCard from "../../components/pricing-card";
const PricingSection = () => {
  return (
    <div className={style.main}>
      {pricing?.map((e, index) => (
        <PricingCard
          key={index}
          title={e?.title}
          price={e?.price}
          features={e?.features}
          isPopular={e?.isPopular}
          yearly={e?.yearly}
        />
      ))}
    </div>
  );
};

export default PricingSection;

const pricing = [
  {
    title: "All-in-One Monthly",
    price: "49.99$",
    features: [
      "Access to all Products",
      "Unlimited Spend",
      "Unlimited Order Fulfillment",
      "Unlimited Customers",
    ],
  },
  {
    title: "All-in-One Yearly",
    price: "39.99$",
    isPopular: true,
    yearly: true,
    features: [
      "Access to all Products",
      "Unlimited Spend",
      "Unlimited Order Fulfillment",
      "Unlimited Customers",
    ],
  },
];
