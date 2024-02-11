import React from "react";
import "./Footer.scss";
import twitter from "../../assets/FirstHomepageImages/twitter.svg";
import instagram from "../../assets/FirstHomepageImages/instagram.svg";
import discod from "../../assets/FirstHomepageImages/discord.svg";
import facebook from "../../assets/FirstHomepageImages/facebook.svg";
import mainlogo from "../../assets/FirstHomepageImages/Logo.svg";
import Copywrite from "./Copywrite";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        {/* social media section */}

        <div className="social-media-link">
          <div className="logo">
            {" "}
            <img src={mainlogo} alt="" />
          </div>
          <div className="socilmedia">
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={discod} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={facebook} alt="" />
            </a>
          </div>
          <p>(+91) 730679297</p>
        </div>

        {/* Menu section */}

        <div className="Menu-section">
          <h3>Menu</h3>
          <p>Home</p>
          <p>Catalog</p>
          <p>Features</p>
          <p>Contact</p>
        </div>

        {/* company section */}

        <div className="company-section">
          <h3>Company</h3>
          <p>Login</p>
          <p>Sign Up</p>
          <p>Privacy</p>
          <p>Products</p>
        </div>

        {/* subscribe section */}

        <div className="subscribe-section">
          <h3>Subscribe Our News Letter</h3>
          <p>
            Sure, please provide your email address to subscribe to <br /> newsletter
          </p>
          <form action="">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <Copywrite />
    </div>
  );
};

export default Footer;
