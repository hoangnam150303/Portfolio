import React from "react";

const GlowCard = ({ imgPath, children }) => {
  return (
    <div className=" group relative rounded-xl p-10 overflow-hidden transition-all duration-500">

      <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


      <div className="relative z-10">
        <div className="mb-5">
          <img src={imgPath} alt="" className="rounded-lg" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
