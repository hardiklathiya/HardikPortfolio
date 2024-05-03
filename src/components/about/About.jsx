import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
// import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
export default function About(props) {
  let picture = require("../../images/my_picture.jpg");
  let style_color = {
    color: props.mode === "dark" ? "white" : "black",
  };

  const animateAboutBox = {
    offscreen: { opacity: 0, y: "-20" },
    onscreen: {
      y: 0,

      opacity: 1,
      transition: {
        bounce: 1.5,
        duration: 0.2,
        type: "spring",
      },
    },
  };

  const animateAboutMe = {
    offscreen: { opacity: 0, x: "10" },
    onscreen: {
      x: 0,

      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };
  const animateAboutMyIntro = {
    offscreen: { opacity: 0, y: "20" },
    onscreen: {
      y: 0,

      opacity: 1,
      transition: {
        duration: 0.2,

        type: "spring",
      },
    },
  };
  return (
    <>
      <section id="about">
        <h4 style={style_color} className="about_title1">
          Get To Know
        </h4>
        <h2 style={style_color} className="about_title2 ">
          About Me
        </h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_picture">
              <img src={picture} alt="" />
            </div>
          </div>
          <div
            className={
              props.mode === "dark" ? "about_content" : "about_content_white"
            }
          >
            <motion.div
              className="about_cards"
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.article className="about_card" variants={animateAboutBox}>
                <FaAward className="about_icon" />
                <h5 className="about_info">Experience</h5>
                <small>1+ Year working</small>
              </motion.article>
              <motion.article className="about_card" variants={animateAboutBox}>
                <VscFolderLibrary className="about_icon" />
                <h5 className="about_info">Projects</h5>
                <small>10+ Completed</small>
              </motion.article>
            </motion.div>
            <div className="my_info">
              <motion.p
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.1 }}
                variants={animateAboutMe}
                className={
                  props.mode === "dark" ? "description" : "description_white"
                }
              >
                I'm Hardik Lathiya, a budding Full Stack Developer from Surat, India, equipped with a Bachelor's degree in Information Technology. My passion for web development blossomed during my post-graduation at Conestoga College, Canada. Proficient in languages like C++, JavaScript, and React, I excel in crafting premium websites. With hands-on experience at Akiyam Solutions Pvt. Ltd, I've honed my skills in full-stack development, delivering impactful solutions. Eager for new challenges, I'm poised to innovate and excel in the dynamic field of web development.{" "}
              </motion.p>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.1}}
                variants={animateAboutMyIntro}
                className="short_info"
              >
                <motion.span>Name : Hardik Lathiya</motion.span>
                <motion.span>Age : 23</motion.span>
                <motion.span>Phone : +1(647) 870-0680</motion.span>
                <motion.span>Education : Post graduation in web development</motion.span>
                <motion.span>Address : Mississauga, Canada</motion.span>
                <motion.span>Freelance : Available</motion.span>
              </motion.div>
              {/* <a href=""></a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
