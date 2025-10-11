import React from "react";
import { counterItems } from "../constants/index";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-8 xl:mt-0 mt-20">
      {/* Container grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900/80 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg backdrop-blur"
          >
            <p className="text-gray-400 text-sm">{item.label}</p>
            <div className="text-white text-4xl font-bold mb-1">
              <CountUp
                end={item.value}
                duration={2}
                decimals={item.value % 1 !== 0 ? 1 : 0}
              />
              {item.suffix}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
