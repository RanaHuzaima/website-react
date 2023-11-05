import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Home/HeroSection";
import About from "./Components/About-Us-Section/About";
import VideoSection from "./Components/Video-Section/VideoSection";
import VideoSection2 from "./Components/Video-Section/VideoSection2";
import Service from "./Components/Service-Section/Service";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <About />
      <VideoSection />
      <VideoSection2 />
      <Service />
    </>
  );
};

export default App;
