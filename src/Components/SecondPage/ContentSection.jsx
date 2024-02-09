import React from "react";
import StarIcon from "../../assets/FirstHomepageImages/StarIcon.svg";
import { motion } from "framer-motion";

const ContentSection = () => {
  const textVarients = {
    initial: {
      scale:.6,
      opacity: 0,
    },
    animate: {
      scale:1,
      x: 0,
      opacity: 1,
      transition: {
        // delay:.7,
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    blinking: {
      opacity: .5,
      // y: 0,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };
  const paragraphAnimetion={
    initial:{
      scale:.6
    },
    animate:{
       scale:1,
       transition:{
         duration:.8
       }
    }
  }
  return (
    <div className="secondPage-contentContainer">
      <motion.h1 variants={textVarients} initial="initial" whileInView="animate">Our Virtual Headsets Shine with Unique Features!</motion.h1>
      <div className="Feature-container">
        <div className="first-row">
          <div>
            <motion.img variants={textVarients} animate="blinking" src={StarIcon} alt="star-icon" />{" "}
            <motion.p variants={paragraphAnimetion} initial="initial" whileInView="animate">
              High-resolution OLED or LCD screens: Provide sharp and clear
              visuals.
            </motion.p>
          </div>
          <div>
            <motion.img variants={textVarients} animate="blinking" src={StarIcon} alt="star-icon" />{" "}
            <motion.p  variants={paragraphAnimetion} initial="initial" whileInView="animate">
              Inside-out tracking: Built-in sensors (cameras or other sensors).
            </motion.p>
          </div>
          <div>
            <motion.img variants={textVarients} animate="blinking" src={StarIcon} alt="star-icon" />{" "}
            <motion.p  variants={paragraphAnimetion} initial="initial" whileInView="animate">
              High-resolution OLED or LCD screens: Provide sharp and clear
              visuals.
            </motion.p>
          </div>
        </div>
        <div className="second-row">
          <div>
            <motion.img variants={textVarients} animate="blinking" src={StarIcon} alt="star-icon" />{" "}
            <motion.p  variants={paragraphAnimetion} initial="initial" whileInView="animate">
              High-resolution OLED or LCD screens: Provide sharp and clear
              visuals.
            </motion.p>
          </div>
          <div>
            <motion.img variants={textVarients} animate="blinking" src={StarIcon} alt="star-icon" />{" "}
            <motion.p  variants={paragraphAnimetion} initial="initial" whileInView="animate">
              Inside-out tracking: Built-in sensors (cameras or other sensors).
            </motion.p>
          </div>
          <div>
            <motion.img variants={textVarients} animate="blinking" src={StarIcon} alt="star-icon" />{" "}
            <motion.p  variants={paragraphAnimetion} initial="initial" whileInView="animate">
              High-resolution OLED or LCD screens: Provide sharp and clear
              visuals.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
