import { useState } from "react";
import Hero from "./sections/hero";
import ShowCase from "./sections/ShowCase";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
    </>
  );
}

export default App;
