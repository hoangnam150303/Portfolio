import React from "react";
import { socialImg } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <span>Terms and Condition</span>
        </div>
        <div className="socials">
          {socialImg.map((item, index) => (
            <a href={item.link} key={index} target="_blank" rel="noreferrer">
              <img src={item.img} alt="logo" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © 2025 Vu Hoang Nam | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
