import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
export default function Experience({ mode }) {
  const animateExperience = {
    offscreen: { opacity: 0, y: "20" },
    onscreen: {
      y: 0,

      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };
  const frontEnd = [
    {
      skill: "HTML",
      level: "Experienced",
    },
    {
      skill: "CSS",
      level: "Experienced",
    },
    {
      skill: "JavaScript",
      level: "Intermediate",
    },
    {
      skill: "JQuery",
      level: "Intermediate",
    },
    {
      skill: "React",
      level: "Intermediate",
    },
    {
      skill: "SCSS",
      level: "Experienced",
    },
    {
      skill: "Wordpress",
      level: "intermediate",
    },
    {
      skill: "SEO",
      level: "Intermediate",
    },
  ];
  const backEnd = [
    {
      skill: "Nodejs",
      level: "Intermediate",
    },
    {
      skill: "Expressjs",
      level: "Intermediate",
    },
 
    {
      skill: "Python",
      level: "Intermediate",
    },
    {
      skill: "Django",
      level: "Intermediate",
    },
    {
      skill: "MySQL",
      level: "Intermediate",
    },
    {
      skill: "MongoDb",
      level: "Intermediate",
    },
    
  ];
  return (
    <section id="experience">
      <h4 className={mode === "dark" ? "exp1" : "exp1_white"}>
        What skills I have
      </h4>
      <h2 style={{}} className={mode === "dark" ? "exp2" : "exp2_white"}>
        My Experience
      </h2>
      <div className="box">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ staggerChildren: 0.3 }}
          variants={animateExperience}
          className="container experience_container"
        >
          <motion.div
            className={mode === "dark" ? "experience" : "experience_white"}
          >
            <h3>Frontend Development</h3>
            <div className="experience_content">
                {frontEnd.map((skill, index) => (
              <article className="experience_details">
                
                  <div key={index} className="experience_txt">
                    <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                    <h4>{skill.skill}</h4> 
                    <small className={mode === "dark" ? "text_light" : ""}>
                      {skill.level}
                    </small>
                  </div>
              </article>
                ))}
            </div>
          </motion.div>
          <motion.div
            className={mode === "dark" ? "experience" : "experience_white"}
          >
            <h3>Backend Development</h3>
            <div className="experience_content">
            {backEnd.map((skill, index) => (
              <article className="experience_details">
                
                  <div key={index} className="experience_txt">
                    <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                    <h4>{skill.skill}</h4> 
                    <small className={mode === "dark" ? "text_light" : ""}>
                      {skill.level}
                    </small>
                  </div>
              </article>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
