import React from "react";

import navLogo from "../../../assets/omni-nav-logo.svg";
import footerLogo from "../../../assets/footer-logo.svg";

import style from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.upper}>
        <div className={style.left}>
          <img src={navLogo} alt="nav-logo" width={172} height={42} />
        </div>
        <div className={style.right}>
          <div className={style.navSections}>
            <p className={style.heading}>pages</p>
            <p className={style.content}>Features</p>
            <p className={style.content}>Pricing</p>
            <p className={style.content}>FAQs</p>
            <p className={style.content}>Affiliates</p>
          </div>
          <div className={style.navSections}>
            <p className={style.content}>Terms and conditions</p>
            <p className={style.content}>Privacy policy</p>
          </div>
          <div className={style.navSections}>
            <p className={style.heading}>Follow us on</p>
            <p
              className={style.content}
              style={{ textDecoration: "underline" }}
            >
              Twitter
            </p>
            <p
              className={style.content}
              style={{ textDecoration: "underline" }}
            >
              Instagram
            </p>
          </div>
        </div>
      </div>
      <div className={style.lower}>
        <div>
          <p className={style.copyRights}>
            © Copyright 2024 OMNIDROP HOLDING LLC, WY, US
          </p>
        </div>
        <div className={style.footerLogoDiv}>
          <img src={footerLogo} alt="footerLogo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
