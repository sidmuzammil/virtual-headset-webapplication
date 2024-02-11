import React from "react";
import "./Thirdpage.scss";
import viewersImage from "../../assets/thirdpageImages/viewers.svg";
import mainhero from "../../assets/thirdpageImages/mainhero.svg";
import twitterimage from "../../assets/thirdpageImages/twitterimage.svg";
import arrowimage from "../../assets/thirdpageImages/buttonarrow.svg";
import { motion } from "framer-motion";

const ThirdHomepage = () => {
   const textvarients={
    blinking: {
      opacity: 0,
      x: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
   }
  return (
    <div className="thirdpage-container">
      {/* left section */}

      <div className="description-area">
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>Jane Wilson, Gaming Creator</motion.h1>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          A virtual headset creator is an individual or company that specializes
          in designing and manufacturing virtual reality headsets, also known as
          VR headsets.
        </motion.p>
        <motion.button initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          Read my blog <motion.img variants={textvarients} animate="blinking" src={arrowimage} alt="" />
        </motion.button>
        <div className="viewers">
          <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} src={viewersImage} alt="" />
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>+258K Views</motion.p>
        </div>
      </div>

      {/* right section */}
      <div className="heroimage">
        <div className="girl-image">
          <motion.img initial={{x:-1000}} whileInView={{x:1}} transition={{duration:1}} src={mainhero} alt="" />
        </div>
        <div className="twitter-image">
          <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} src={twitterimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdHomepage;
