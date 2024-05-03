import React, { useEffect, useState } from "react";
import "./header.css";

import cv from "../../images/cv.pdf";
import Me from "../../images/Me.png";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import {  FaLinkedinIn, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill, BsWifiOff } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Header(props) {
  let wifi = navigator.onLine;
  const [online, setOnline] = useState(wifi);

  useEffect(() => {
    setInterval(() => {
      window.addEventListener("online", () => {
        setOnline(true);
      });
      window.addEventListener("offline", () => {
        setOnline(false);
      });
    }, 100);
  });

  let style_color = {
    color: props.mode === "dark" ? "" : "black",
  };
  const animateTopBar = {
    offscreen: { y: -10, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.5,
        duration: 1.5,
        stiffness: 200,
        type: "spring",
      },
    },
  };
  const animateHeaderText = {
    offscreen: { y: -5, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.5,
        duration: 1.5,
        // stiffness: 200,
        type: "spring",
      },
    },
  };
  const animateSocials = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.1,
        duration: 1.5,
        stiffness: 100,
        type: "spring",
        
      },
    },
  };
  const animateBtn = {
    offscreen: { opacity: 0},
    onscreen: {
      
      opacity: 1,
      transition: {

        ease: "easeInOut",
        bounce: 0.5,
        
        type: "spring",
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        className="top_nav"
        id="home"
      >
        <motion.div className="sub_nav">
          <Tooltip
            title={props.mode === "dark" ? "DARK MODE" : "LIGHT MODE"}
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 500 }}
          >
            <motion.div variants={animateTopBar} className="mode">
              {props.mode === "dark" ? (
                <BsFillMoonFill onClick={props.toggleMode} className="moon" />
              ) : (
                <BsFillSunFill className="sun" onClick={props.toggleMode} />
              )}
              
            </motion.div>
          </Tooltip>
          <Tooltip
            title={
              online === true ? "YOU ARE CONNECTED" : "YOU ARE DISCONNECTED"
            }
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 500 }}
          >
            <motion.div variants={animateTopBar} className="wifi">
              {online === true ? (
                <AiOutlineWifi className=" active_net" style={style_color} />
              ) : (
                <BsWifiOff
                  className=" offline"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                />
              )}
            </motion.div>
          </Tooltip>
        </motion.div>
      </motion.nav>
      <header>
        <motion.div    initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ staggerChildren: 0.3 }} className="container header_container">
          
            <motion.h5
              variants={animateHeaderText}
              className="text_light"
              style={style_color}
            >
              Hello I'm
            </motion.h5>
            <motion.h1 variants={animateHeaderText} style={style_color}>
              Hardik Lathiya
            </motion.h1>
            <motion.h5
              variants={animateHeaderText}
              className="text_light "
              style={style_color}
            >
              FullStack Developer
            </motion.h5>
         

            <motion.div  className="cv">
      <Tooltip title="DOWNLOAD CV" arrow placement="left" TransitionComponent={Zoom} TransitionProps={{ timeout: 500 }} >
        <motion.a  variants={animateBtn}
          className={props.mode === "dark"? "btn btn-download":"btn white_btn_download"}
          
          href={cv}
          download
        >
          Download CV
        </motion.a>
        </Tooltip>
        <Tooltip title="LET'S TALK" arrow placement="right" TransitionComponent={Zoom} TransitionProps={{ timeout: 500 }} >
        <motion.a  variants={animateBtn}
          className={
            props.mode === "dark" ? "btn btn-primary" : "btn white_btn_primary"
          }
          
          href="#contact"
        >
          Let's Talk
        </motion.a>
        </Tooltip>
      </motion.div>




          <div
            className={props.mode === "dark" ? "figure" : "figure_white"}
          >
            <img   
              src={Me}
              alt="my picture"
              className={props.mode === "dark" ? "img" : "img_white"}
            />
          </div>

          <motion.div className="socials">
          <Tooltip
              title="INSTAGRAM"
              arrow
              placement="right"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 500 }}
            >
              <motion.a variants={animateSocials}
                href="https://www.instagram.com/hardik_lathiya_007/"
                target="_blank"
              >
                <FaInstagramSquare
                  className={
                    props.mode === "dark"
                      ? "social_links instagram"
                      : "social_links instagram_white"
                  }
                />
              </motion.a>
            </Tooltip>

            <Tooltip
              title="LINKEDIN"
              arrow
              placement="right"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 500 }}
            >
              <motion.a variants={animateSocials}
                href="https://www.linkedin.com/in/hardik-lathiya-a64a02185/"
                target="_blank"
              >
                <FaLinkedinIn
                  className={
                    props.mode === "dark"
                      ? "social_links linkedin"
                      : "social_links linkedin_white"
                  }
                />
              </motion.a>
            </Tooltip>
            
            <Tooltip
              title="GITHUB"
              arrow
              placement="right"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 500 }}
            >
              <motion.a variants={animateSocials} href="https://github.com/hardiklathiya" target="_blank">
                <FaGithub
                  className={
                    props.mode === "dark"
                      ? "social_links github"
                      : "social_links github_white"
                  }
                />
              </motion.a>
            </Tooltip>
          </motion.div>
        </motion.div>
      </header>
    </>
  );
}
