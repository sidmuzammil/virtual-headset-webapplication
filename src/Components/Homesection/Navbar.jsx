import React from "react";
import NavItems from "./NavItems";
import "./Navbar.scss";
import mainlogo from "../../assets/FirstHomepageImages/Logo.svg";
import searchIcon from "../../assets/FirstHomepageImages/SearchIcon.svg"
import CartIcon from "../../assets/FirstHomepageImages/CartIcon.svg"
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="Navigation">
      <div className="NavigationContainer">
        <NavItems />
      </div>
      <div className="logo">
        <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} src={mainlogo} alt="" />
      </div>
      <div className="Navigation-serchbar">
        <div className="inputAndSearchimage">
          <motion.input initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}  type="text" placeholder="Search games & products..." />
          <motion.img initial={{x:1000, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:.6}} src={searchIcon} alt="" />
        </div>
        <motion.img initial={{x:-11100}} animate={{x:0}} src={CartIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
