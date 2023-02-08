import React from "react";
import Link from "next/link";
import Style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.container}>
      <ul className={Style.ul}>
        <li className={Style.li}>
          <Link href="/" className={Style.link}>
            Home
          </Link>
        </li>
        <li className={Style.li}>
          <Link href="/about" className={Style.link}>
            About
          </Link>
        </li>
        <li className={Style.li}>
          <Link href="/tech" className={Style.link}>
            Tech
          </Link>
        </li>
        <li className={Style.li}>
          <Link href="/music" className={Style.link}>
            Music
          </Link>
        </li>
        <li className={Style.li}>
          <Link href="misc" className={Style.link}>
            Misc
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
