import { useState } from "react";
import Header from "./component/component-landing-page/Header";
import HeroSection from "./component/component-landing-page/HeroSection";
import Product from "./component/component-landing-page/Product";
import Footer from "./component/component-landing-page/Footer";

export default function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Product/>
      <Footer/>
    </>
  );
}
