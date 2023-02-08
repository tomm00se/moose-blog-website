import React from "react";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Moose's Blog!</h1>
      <p className={Style.tag}>
        My website for all things related to me... Moose!
      </p>
    </div>
  );
};

export default Header;
