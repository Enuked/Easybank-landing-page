import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import hamburger from "../../../public/images/icon-hamburger.svg";
import "../../styles/layouts-scss/navigations.scss";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className={`nav-parent ${isActive ? "active" : ""}`}>
        <img src={logo.src} alt="logo"></img>
        <button
          alt="hamburger"
          onClick={toggleMenu}
          className={`hamburger ${isActive ? "blur-active" : ""}`}
        />
        <ul className="menu-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <button className="req-button">Request Invite</button>
      </nav>
    </div>
  );
};

export default Navigation;
