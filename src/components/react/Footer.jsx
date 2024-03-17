import React from "react";
import "../../styles/layouts-scss/footer.scss";
import logo2 from "../../../public/images/logo-light.svg";
import facebook from "../../../public/images/icon-facebook.svg";
import youtube from "../../../public/images/icon-youtube.svg";
import twitter from "../../../public/images/icon-twitter.svg";
import pinterest from "../../../public/images/icon-pinterest.svg";
import instagram from "../../../public/images/icon-instagram.svg";

function footer() {
  return (
    <div className="footer-container">
      <div>
        <img src={logo2.src} alt="logo" />
        <ul className="socials">
          <li>
            <a href="#" className="facebook">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className="youtube">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className="pinterest">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <span></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-columns">
        <div>
          <h3>About Us</h3>
          <h3>Contact</h3>
          <h3>Blog</h3>
        </div>
        <div>
          <h3>Careers</h3>
          <h3>Support</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>
      <div className="footer-right">
        <button>Request Invite</button>

        <p>@ Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default footer;
