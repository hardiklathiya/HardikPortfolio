import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { AiOutlineDoubleRight } from "react-icons/ai";
export default function Services({ mode }) {
  const animateServices = {
    offscreen: { opacity: 0, y: "20"   },
    onscreen: {
      y: 0,
      
      opacity: 1,
      transition: {
        duration:0.2,
        type: "spring",
      },
    },
  };
  return (
    <section id="services">
      <h4 className={mode === "dark" ? "service1" : "service1_white"}>
        What I offer
      </h4>
      <h2
        style={{}}
        className={mode === "dark" ? "service2" : "service2_white"}
      >
        Services
      </h2>
      <div className="box">
        <motion.div initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
         className="container service_container">
          <motion.article   variants={animateServices} className={mode==="dark"?"service":"service_white"}>
            <div className="service_header">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service_list">
              <li>
                <AiOutlineDoubleRight className="service_icon"  />
                <span className="service_text">Landing Pages</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">User Flow</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">Wireframing</span>
              </li>
              
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">Mobile App Design</span>
              </li>
            </ul>
          </motion.article>
          <motion.article   variants={animateServices} className={mode==="dark"?"service":"service_white"}>
            <div className="service_header">
              <h3>Web Development</h3>
            </div>
            <ul className="service_list">
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">HTML/CSS</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">Bootstrap</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">JavaScript</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">Animation</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">React</span>
              </li>
            </ul>
          </motion.article>
          <motion.article   variants={animateServices} className={mode==="dark"?"service":"service_white"}>
            <div className="service_header">
              <h3>SEO Marketing</h3>
            </div>
            <ul className="service_list">
              <li>
                <AiOutlineDoubleRight className="service_icon" />
               <span className="service_text">White Hat SEO</span>
              </li>
          
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">On-page SEO</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">Off-page SEO</span>
              </li>
              <li>
                <AiOutlineDoubleRight className="service_icon" />
                <span className="service_text">Technical SEO</span>
              </li>
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
