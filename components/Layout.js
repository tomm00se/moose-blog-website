import React from "react";
import Style from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Moose's Blog!</h1>
      <p className={Style.tag}>
        My website for all things related to me... Moose!
      </p>
      <Navbar />
      <main>{children}</main>
      <footer className={Style.footer}>
        <div>
          <h3 className={Style.footertext}>Moose 2023</h3>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
