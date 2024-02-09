import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavItems = () => {
  return (
    <div className="Nav-items-container">
      <Link whileHover={{scale:1.1}} transition={{delay:.2}}  to="Home">Home</Link>
      <Link whileHover={{scale:1.1}} transition={{delay:.2}} to="catalog">Catalog</Link>
      <Link whileHover={{scale:1.1}} transition={{delay:.2}} to="contact">Contact</Link>
      <Link whileHover={{scale:1.1}} transition={{delay:.2}} to="features">Features</Link>
    </div>
  );
};

export default NavItems;
