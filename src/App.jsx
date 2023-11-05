import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Home/HeroSection";
import About from "./Components/About-Us-Section/About";
import VideoSection from "./Components/Video-Section/VideoSection";
import VideoSection2 from "./Components/Video-Section/VideoSection2";
import Service from "./Components/Service-Section/Service";
import Product from "./Components/Product-Section/Product";
import Discount from "./Components/Discount-Section/Discount";

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
      <Product />
      <Product />
      <Product />
      <Discount />
    </>
  );
};

export default App;
