import React from "react";
import "./Secondpage.scss";
import roundBlurImage from "../../assets/secondpageImages/roundblurimage.svg";
import HeadsetImage from "../../assets/secondpageImages/vitualHeadsetImage.svg";
import ContentSection from "./ContentSection";
import { motion } from "framer-motion";
const Secondpage = () => {
  return (
    <div className="secondpage-container" >
      <section className="Hero-image-section">
        <div className="blur-image">
          <img src={roundBlurImage} alt="" />
        </div>
        <div  className="Hero-image">
          <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}   src={HeadsetImage} alt="" />
        </div>
      </section>
      <section className="content-section">
        <ContentSection />
      </section>
    </div>
  );
};

export default Secondpage;
