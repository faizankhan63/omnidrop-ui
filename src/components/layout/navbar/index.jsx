import React from "react";

import navLogo from "../../../assets/omni-nav-logo.svg";

import Button from "../../button";

import style from "./navbar.module.scss";

const NavBar = () => {
  return (
    <div className={style.nav}>
      <div>
        <img src={navLogo} alt="nav-logo" />
      </div>
      <div>
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
};

export default NavBar;
