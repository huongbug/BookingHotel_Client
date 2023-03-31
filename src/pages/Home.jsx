import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Service from "../components/Home/Service";
import About from "../components/Home/About";
import Slider from "../components/Home/Slider";
import RoomIntroduction from "../components/Home/Room-Introduction";
import Testimonials from "../components/Home/Testimonials";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blog from "../components/Home/Blog";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Service />
      <RoomIntroduction />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
