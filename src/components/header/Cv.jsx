// import React from "react";
// import cv from "../../images/cv.pdf";
// import Tooltip from '@mui/material/Tooltip';
// import Zoom from '@mui/material/Zoom';
// // import { useInView } from 'react-intersection-observer';
// import { motion } from "framer-motion";
// export default function Cv(props) {
//   const animateBtn1 = {
//     offscreen: { x: -10, opacity: 0 },
//     onscreen: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         ease: "easeInOut",
//         bounce: 0.5,
//         duration: 1.5,
//         type: "spring",
//       },
//     },
//   };
//   const animateBtn2 = {
//     offscreen: { x: 10, opacity: 0 },
//     onscreen: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         ease: "easeInOut",
//         bounce: 0.5,
//         duration: 1.5,
//         type: "spring",
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div initial={"offscreen"}
//             whileInView={"onscreen"}
//             viewport={{ once: false, amount: 0.5 }} className="cv">
//       <Tooltip title="DOWNLOAD CV" arrow placement="left" TransitionComponent={Zoom} TransitionProps={{ timeout: 500 }} >
//         <motion.a  variants={animateBtn1}
//           className={props.mode === "dark"? "btn btn-download":"btn white_btn_download"}
          
//           href={cv}
//           download
//         >
//           Download CV
//         </motion.a>
//         </Tooltip>
//         <Tooltip title="LET'S TALK" arrow placement="right" TransitionComponent={Zoom} TransitionProps={{ timeout: 500 }} >
//         <motion.a  variants={animateBtn2}
//           className={
//             props.mode === "dark" ? "btn btn-primary" : "btn white_btn_primary"
//           }
          
//           href="#contact"
//         >
//           Let's Talk
//         </motion.a>
//         </Tooltip>
//       </motion.div>
//     </>
//   );
// }
