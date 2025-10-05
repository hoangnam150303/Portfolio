import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import { Hacker } from "./Hacker";
import { HackerRoom } from "./Hacker_room";

const HeroExperiences = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      camera={{
        position: [0, 8, 35],
        fov: 45,
        near: 0.1,
        far: 2000,
      }}
    
    >
      <HeroLights />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={15}
        maxDistance={80}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        scale={isMobile ? 0.1 : 0.15}
        position={[0, -10, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <HackerRoom />
      </group>
    </Canvas>
  );
};

export default HeroExperiences;
