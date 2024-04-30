import React from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Tours from "../components/Tours";
// import Values from "../components/Values";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Tours />
      <About />
      <Services />
      {/* <Values /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
