import React from "react";

const HeroLights = () => {
  return (
    <>
      <spotLight position={[10, 10, 10]} intensity={100} color="#A259FF" />
      <spotLight position={[-10, 5, 10]} intensity={200} color="#00BFFF" />
      <ambientLight intensity={0.3} color="#ffffff" />
    </>
  );
};

export default HeroLights;
