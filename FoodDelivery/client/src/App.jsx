import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./components/style.css";
import Hero from "./components/Hero";
import Delivery from "./components/Delivery";
import Healthy from "./components/Healthy";
import ProductSlider from "./components/ProductSlider";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Delivery />
      <Healthy />
      <ProductSlider />
      <Products />
      <Footer />
    </>
  );
}

export default App;
