import React from "react";
import { logoList } from "../constants";
import TitleHeader from "../components/TitleHeader";

const LogoIcon = ({ img }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={img} alt="logo" />
    </div>
  );
};
const TechStack = () => {
  return (
    <div id="skills" className="md:my-20 my-10 relative">
      <TitleHeader title="My Tech Stack" />
      <div className="marquee h-52 mt-20">
        <div className="marquee-box md:gap-12 gap-5 py-20">
          {logoList.map((logo, index) => (
            <LogoIcon key={index} img={logo.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
