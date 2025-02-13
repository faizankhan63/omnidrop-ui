import React from "react";

import NavBar from "../../components/layout/navbar";
import Button from "../../components/button";
import InfoCard from "../../components/innfo-card";

import info1 from "../../assets/info-card1.svg";
import info2 from "../../assets/info-card2.svg";
import info3 from "../../assets/info-card3.svg";

import style from "./home-style.module.scss";
import DiscoverSection from "../../sections/discover-section";
import FaqSection from "../../sections/faq-section";
import PricingSection from "../../sections/pricing-section";
import TurnSection from "../../sections/turn-section";
import Footer from "../../components/layout/footer";

const Home = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.topSection}>
          <NavBar />
          <div className={style.centerDiv}>
            <div className={style.upper}>
              <span className={style.gradientText}>All</span>
              <div className={style.upperFlex}>
                <div>
                  <p className={style.desc}>
                    The All-In-One Platform To Start,
                  </p>
                  <p className={style.desc}>
                    Scale & Run Your Dropshipping Business
                  </p>
                </div>
                <Button text="Start free trial" className={style.buttonWhite} />
              </div>
            </div>

            <div className={style.lower}>
              <span className={style.gradientTextBottom}>In One</span>
            </div>

            <div className={style.lowerDiv}>
              <InfoCard
                image={info1}
                title="Fastest shipping, lowest rates"
                desc="Giving your products the fastest shipping, lowest rates & automatically fulfilled without you lifting a finger"
                className={style.infoCard1}
              />
              <InfoCard
                image={info2}
                title="Integrate your Shopify store with one click"
                desc="All your business metrics from one dashboard"
                className={style.infoCard2}
              />
              <InfoCard
                image={info3}
                title="5+ million"
                desc="Products in our database"
                className={style.infoCard3}
              />
            </div>
          </div>
        </div>
        <DiscoverSection />
        <FaqSection />
        <PricingSection />
      </div>
      <TurnSection />
      <Footer />
    </div>
  );
};

export default Home;
