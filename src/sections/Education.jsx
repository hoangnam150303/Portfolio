import React from "react";
import TitleHeader from "../components/TitleHeader";
import { eduCards } from "../constants";
import GlowCard from "../components/GlowCard";

const Education = () => {
  return (
    <div
      id="education"
      className="w-full md:mt-20 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Educational Journey & Achievements" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {eduCards.map((card, index) => (
              <div
                key={index}
                className="edu-card-wrapper flex flex-col xl:flex-row items-start gap-10"
              >
                <div className="xl:w-2/6 w-full">
                  <GlowCard imgPath={card.img} />
                </div>

                <div className="xl:w-4/6 w-full flex flex-col relative">
                  <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff00ff]/60 via-[#a600ff]/40 to-transparent" />

                  <div className="flex items-start gap-6 pl-10 relative z-10">
                    <div className="index-logo flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border border-[#a600ff]/50">
                      {index + 1}
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-3xl font-semibold text-white leading-snug">
                        {card.title}
                      </h1>
                      <p className="text-gray-300 text-sm mt-2">
                        🏫 {card.institution} | 📅 {card.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
