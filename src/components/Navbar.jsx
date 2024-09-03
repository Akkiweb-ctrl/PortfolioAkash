import React from "react";
import logo from "../assets/MyLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.img 
        whileHover={{ scale: 1.2 }}
        className="mx-2 w-28"src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center text-2xl gap-4">
        <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.linkedin.com/in/akash-rananaware-609832159/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></motion.a>
        <motion.a 
        whileHover={{ scale: 1.2 }}
        href="https://github.com/Akkiweb-ctrl" target="_blank" rel="noopener noreferrer"><FaGithub /></motion.a>
        <motion.a 
        whileHover={{ scale: 1.2 }}
        href="https://x.com/akash_1812" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter/></motion.a>
        <motion.a 
        whileHover={{ scale: 1.2 }}
        href="https://www.instagram.com/akash_1812_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></motion.a>      
      </div>
    </nav>
  );
};

export default Navbar;
