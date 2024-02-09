import React from "react";
import "./Home.scss";
import Eclipse from "./Eclipse";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

const Home = () => {

  const textVarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    blinking: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };



  // const sliderVarients = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: "-220%",
  //     transition: {
  //       repeat: Infinity,
  //       repeatType: "mirror",
  //       duration: 20,
  //     },
  //   },
  // };
  return (
    <motion.div className="Home-container" id="Home">
      <div className="Eclip-container">
        <Eclipse />
      </div>
      <div className="Navigation">
        <Navbar />
      </div>
      <div className="Hero-section">
        <HeroSection />
      </div>
    </motion.div>
  );
};

export default Home;
