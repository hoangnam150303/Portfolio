import { useState } from "react";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import NavBar from "./components/NavBar";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <Education />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
