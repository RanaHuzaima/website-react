import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Home/HeroSection";
import About from "./Components/About/About";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection/>
      <About/>
    </>
  );
};

export default App;
