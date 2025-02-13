import React from "react";

import style from "./faq-styles.module.scss";
import FaqTile from "../../components/faq-tile";
const FaqSection = () => {
  return (
    <div className={style.faqMain}>
      <div>
        <p className={style.faqIndicator}>FAQ ●</p>
        <h1 className={style.faqHeading}>Everything you need to know</h1>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <FaqTile key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

const faqs = [
  {
    question: "What is Omnidrop?",
    answer:
      "Omnidrop is an all-in-one platform designed to help dropshippers start, scale, and run their businesses with ease.",
  },
  {
    question: "Who is Omnidrop for?",
    answer:
      "Omnidrop is built for both beginners and experienced dropshippers. Whether you’re just starting out or looking to scale your existing business, Omnidrop provides the tools and insights you need to grow.",
  },
  {
    question: "How do I get started with Omnidrop?",
    answer:
      "Getting started is simple. Just connect your Shopify store to Omnidrop, and you’ll be ready to start using all of our powerful features. No complicated setup required.",
  },
  {
    question: "What does the Omnidrop pricing plan include?",
    answer:
      "With Omnidrop’s single, all-inclusive pricing plan, you get full access to the entire platform and all its powerful features for one subscription price. Order fulfillment costs are paid separately as you process orders through your store, so you only pay for what you fulfill.",
  },
  {
    question: "How does Omnidrop protect my store’s data?",
    answer:
      "Your privacy and security are our top priorities. With Omnidrop, your store is protected from being tracked by other users, ensuring that your sales data remains confidential.",
  },
];
