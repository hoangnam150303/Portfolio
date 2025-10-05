import React from "react";

const Button = ({ className, text, id }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <span className="text">{text}</span>
      </div>
    </a>
  );
};

export default Button;
