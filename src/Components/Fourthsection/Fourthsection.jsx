import React from "react";
import leftArrow from "../../assets/forthSectionImages/leftArroe.svg";
import rightArrow from "../../assets/forthSectionImages/raightArrow.svg";
import DATAS from "./Datastore";
import "./Fourthsection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Fourthsection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="fourth-section-container">
      <div className="top-section">
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>Top Games</motion.h1>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
          If you buy video 2 games, you will receive <br /> 1 video game for
          free, along with a <span>50%</span> discount.
        </motion.p>
      </div>
      <div className="list-section">
        <motion.div initial={{x:-1000}} whileInView={{x:1}} transition={{duration:1}} className="list">
          <Slider {...settings}>
            {DATAS.map((datas) => {
              return (
                <div className="listing-items">
                  <img src={datas.image} alt="" />
                  <p>{datas.description}</p>
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Fourthsection;


{/* <div className="lifting-button">
          <button>
            <img src={leftArrow} alt="" />
          </button>
          <button>
            <img src={rightArrow} alt="" />
          </button>
        </div> */}
