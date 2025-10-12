import { useState } from "react";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import NavBar from "./components/NavBar";
import Education from "./sections/Education";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <Education />
      <Experience />
    </>
  );
}

export default App;
