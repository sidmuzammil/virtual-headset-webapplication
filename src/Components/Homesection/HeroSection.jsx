import React from "react";
import starimage from "../../assets/FirstHomepageImages/StarIcon.svg";
import ArrowIcon from "../../assets/FirstHomepageImages/arrowicon.svg";
import Exploreicon from "../../assets/FirstHomepageImages/ExplorebuttonIcon.svg";
import HeroImage from "../../assets/FirstHomepageImages/virtualHero.svg";
import Educationicon from "../../assets/FirstHomepageImages/EducationIcon.svg";
import sportsIcon from "../../assets/FirstHomepageImages/sportsIcon.svg";
import twitter from "../../assets/FirstHomepageImages/twitter.svg";
import instagram from "../../assets/FirstHomepageImages/instagram.svg";
import discod from "../../assets/FirstHomepageImages/discord.svg";
import { delay, motion } from "framer-motion";
import facebook from "../../assets/FirstHomepageImages/facebook.svg";

const HeroSection = () => {
  const textVarients = {
    initial: {
      x: -1000,
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
  const sliderVarients = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  return (
    <div className="Herosection-container">
      <div className="contant-place">
        <motion.p variants={textVarients} initial="initial" animate="animate">
          Virtual Headsets
        </motion.p>
        <hr />
        <motion.h1 variants={textVarients} initial="initial" animate="animate">
          Experience a new dimension of reality
        </motion.h1>
        <div className="Star-with-content">
          <motion.img
            src={starimage}
            alt="star iage"
            variants={textVarients}
            animate="blinking"
          />
          <motion.p variants={textVarients} initial="initial" animate="animate">
            Step into the future with our virtual headset, come to life right
            before your eyes
          </motion.p>
        </div>
        <div className="home-page-buttons">
          <div className="blue">
            <motion.button
              variants={textVarients}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
            >
              visit Store{" "}
              <motion.img
                animate={{ opacity: 0, x: 10 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                src={ArrowIcon}
                alt="icon image"
              />
            </motion.button>
          </div>
          <motion.button
            variants={textVarients}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              whileHover={{ rotate: 180 }}
              src={Exploreicon}
              alt="icon image"
            />
            Explore
          </motion.button>
        </div>
        <div className="socialmedia">
          <motion.p variants={textVarients} initial="initial" animate="animate">
            follow us
          </motion.p>
          <div className="socialmedia-links">
            <motion.img
              initial="initial"
              animate="animate"
              variants={textVarients}
              whileHover={{ rotate: 360 }}
              src={twitter}
              alt=""
            />
            <motion.img
              initial="initial"
              animate="animate"
              variants={textVarients}
              whileHover={{ rotate: 360 }}
              src={instagram}
              alt=""
            />
            <motion.img
              initial="initial"
              animate="animate"
              variants={textVarients}
              whileHover={{ rotate: 360 }}
              src={discod}
              alt=""
            />
            <motion.img
              initial="initial"
              animate="animate"
              variants={textVarients}
              whileHover={{ rotate: 360 }}
              src={facebook}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Heroimage-section">
        <div className="hero-image">
          <motion.img
            src={HeroImage}
            alt="heroimage"
            initial={{opacity:0}}
            transition={{duration:.5,delay:.5}}
            // variants={textVarients}
            whileInView={{opacity:1}}
          />
        </div>
        <hr />
        <motion.div className="providens" variants={textVarients}>
          <motion.div  whileHover={{scale:1.1}} className="first-providence">
            <img src={Educationicon} alt="" />
            <p>Enhanced Education</p>
          </motion.div>
          <div className="second-providence">
            <img src={sportsIcon} alt="" />
            <p>Training and Simulation</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
