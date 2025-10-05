import React from "react";

const HeroLights = () => {
  return (
    <>
      <spotLight position={[10, 10, 10]} intensity={60} color="#A259FF" />
      <spotLight position={[-10, 5, 10]} intensity={40} color="#00BFFF" />
      <ambientLight intensity={0.3} color="#ffffff" />
    </>
  );
};

export default HeroLights;
