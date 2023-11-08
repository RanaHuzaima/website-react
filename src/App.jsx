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
import Pricing from "./Components/Pricing-Section/Pricing";
import Card from "./Components/Card-Section/Card";
import Discount2 from "./Components/Discount-Section/Discount2";
import Blog from "./Components/Blog-Section/Blog";
import Footer from "./Components/Footer/Footer";

const productData = [
  {
    id: "1",
    title: "Peanut",
    price: "$45",
    img: "https://www.seekpng.com/png/full/11-113394_cooked-chicken-png-transparent-image-chicken-leg-piece.png",
  },
  {
    id: "2",
    title: "Peanut",
    price: "$45",
    img: "https://www.seekpng.com/png/full/11-113394_cooked-chicken-png-transparent-image-chicken-leg-piece.png",
  },
  {
    id: "2",
    title: "Peanut",
    price: "$45",
    img: "https://www.seekpng.com/png/full/11-113394_cooked-chicken-png-transparent-image-chicken-leg-piece.png",
  },
];
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
      <Product product={productData} />
      {/* <Product /> */}
      {/* <Product /> */}
      <Discount />
      <Pricing />
      <Card />
      <Discount2 />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
