import React from "react";
import "./portfolio.css";
import data from "./ImgData";
import {motion} from 'framer-motion'

export default function Portfolio({ mode }) {
  let style_content={
    backgroundColor:mode==="dark"?"":"white",
    boxShadow:mode==="dark"?"none":"4px 2px 5px 2px rgba(0,0,0,0.1)"
  }
  const animatePortfolio = {
    offscreen: { opacity: 0, y: "20"   },
    onscreen: {
      y: 0,
      
      opacity: 1,
      transition: {
        duration:0.5,
        type: "spring",
      },
    },
  };
  return (
    <>
      <section id="portfolio">
        <h4 className={mode === "dark" ? "portfolio1" : "portfolio1_white"}>
          My Recent Work
        </h4>
        <h2 className={mode === "dark" ? "portfolio2" : "portfolio2_white"}>
          Portfolio
        </h2>
        <div className="box">
          <div className="container portfolio_container">
            <motion.div initial={"offscreen"}
          whileInView={"onscreen"} 
          viewport={{ once: false, amount: 0.1 }} transition={{staggerChildren:0.2}} className="portfolios">
              {data.map((ele) => {
                return (
                  <motion.div variants={animatePortfolio} className="content" key={ele.id} style={style_content}>
                    <figure>
                      <img className="content_image" src={ele.img} />
                      <figcaption className="fig_caption" style={{color:mode==="dark"?"":"black",
                    fontWeight:mode==="dark"?"":"500"}}>
                        {ele.title}
                      </figcaption>
                    </figure>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
