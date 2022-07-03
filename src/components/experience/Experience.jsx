import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
export default function Experience({ mode }) {
  const animateExperience = {
    offscreen: { opacity: 0, y: "20"   },
    onscreen: {
      y: 0,

      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };
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
          <motion.div className={mode === "dark" ? "experience" : "experience_white"}>
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>HTML</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Experienced
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>CSS</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Experienced
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>JavaScript</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>Bootstrap</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Experienced
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>JQuery</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Basic
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>React</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Intermediate
                  </small>
                </div>
              </article>
            </div>
          </motion.div>
          <motion.div className={mode === "dark" ? "experience" : "experience_white"}>
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>Python</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>MySQL</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Experienced
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>Node JS</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="experience_details">
                <div className="exp_icon">
                  <HiBadgeCheck className="icon_check" />
                </div>
                <div className="experience_txt">
                  <h4>MongoDB</h4>
                  <small className={mode === "dark" ? "text_light" : ""}>
                    Intermediate
                  </small>
                </div>
              </article>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
