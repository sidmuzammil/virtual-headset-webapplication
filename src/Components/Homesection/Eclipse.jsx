import React from "react";
import Eclips1 from "../../assets/FirstHomepageImages/Ellipse 1.png";
import Eclips2 from "../../assets/FirstHomepageImages/Group 274.png";
import { motion } from "framer-motion";
const Eclipse = () => {
  // const varients = {
  //   initial:{
  //     x: -100,
  //   },
  //   animate: {
  //     opacity: 0,
  //     y: 10,
  //     x:1,
  //     transition: {
  //       delay:.5,
  //       duration: 2,
  //       repeat: Infinity,
  //     },
  //   },
  // };
  return (
    <div className="Eclips">
      <div className="eclip1">
        <motion.img src={Eclips1} alt="" />
      </div>
      <div className="eclip2">
        <img src={Eclips2} alt="" />
      </div>
    </div>
  );
};

export default Eclipse;
