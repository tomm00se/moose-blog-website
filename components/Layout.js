import React from "react";
import Style from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>MOOSE</h1>
      <Navbar />
      <main>{children}</main>
      <footer className={Style.footer}>
        <div>
          <footer className={Style.footertext}>Moose 2023</footer>
          <ul className={Style.ul}>
            <li className={Style.li}>
              <a
                className={Style.link}
                href="https://twitter.com/Tom_Moose_"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li className={Style.li}>
              <a
                className={Style.link}
                href="https://www.instagram.com/tommoose_/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li className={Style.li}>
              <a
                className={Style.link}
                href="https://github.com/Mooose17"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className={Style.li}>
              <a
                className={Style.link}
                href="https://www.linkedin.com/in/tommybowden/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
