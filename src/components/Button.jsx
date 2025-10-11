import React from "react";

const Button = ({ className, text, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
      id={id}
    >
      <div className="cta-button group">
        <span className="text">{text}</span>
      </div>
    </a>
  );
};

export default Button;
