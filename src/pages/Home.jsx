import React from "react";
import Hero from "./Hero";

import Contact from "./Contact";

import AboutOwner from "./AboutOwner";
import Products from "./Products";
import AboutServices from "./AboutServices";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutServices />
      <AboutOwner />
      <Products />
      <Testimonials />
      <Contact />
      
    </div>
  );
};

export default Home;
