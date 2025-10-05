import React from "react";
import words from "../constants";
import Button from "../components/Button";
import HeroExperiences from "../components/HeroModels/HeroExperiences";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
     <div className="absolute top-0 left-0 w-[70%] h-[80%] bg-gradient-to-br from-[#ff00ff]/60 via-[#a600ff]/40 to-transparent blur-[160px] opacity-70 z-0" />

      <div className="hero-layout relative z-10 flex flex-col md:flex-row items-center justify-between w-full md:h-screen px-6 md:px-20 gap-10">
        <header className="flex flex-col justify-center md:w-1/2 w-full gap-7">
          <div className="hero-text">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello{" "}
              <span className="slide inline-block">
                <span className="wrapper">
                  {words.map((world) => (
                    <span
                      key={world.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={world.imgPath}
                        alt={world.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{world.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold">
              Welcome To My Portfolio
            </h1>
          </div>

          <p className="text-white-50 md:text-xl text-base mt-2">
            I am Hoang Nam, a software developer in Vietnam with a passion for
            technology and programming.
          </p>

          <Button
            className="md:w-80 md:h-16 w-48 h-12 mt-4"
            id="button"
            text="Explore All My Project"
          />
        </header>

        <figure className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="hero-3d-layout">
            <HeroExperiences />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
