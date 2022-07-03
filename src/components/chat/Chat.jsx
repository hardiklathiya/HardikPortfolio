import React, { useState, useRef } from "react";
import "./chat.css";
import "../../css/all.min.css";
import { IoSendSharp } from "react-icons/io5";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import emailjs from "emailjs-com";
// import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
export default function Chat() {
  const [chat, setChat] = useState(false);
  const animateChat = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.1,
        delay: 1,
        type: "spring",
      },
    },
  };
  const animateChatSection = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        bounce: 0.5,
        type: "spring",
      },
    },
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pr2spsk",
        "template_31jwe0q",
        form.current,
        "N_cRDX8Ag-IEMEsce"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      {chat === true ? (
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          variants={animateChatSection}
          className="contact_us"
        >
          <div className="title_section">
            <h3 className="title_chat">Talk With me!</h3>
          </div>
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form_div">
                <label htmlFor="name">*FullName</label>
                <input
                  required
                  name="name"
                  type="text"
                  id="name"
                  className="input_group"
                />
              </div>
              <div className="form_div">
                <label htmlFor="mobile">*Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  id="mobile"
                  className="input_group"
                />
              </div>
              <div className="form_div">
                <label htmlFor="message">*Message</label>
                <textarea
                  required
                  name="message"
                  type="text"
                  id="message"
                  className="textarea"
                />
              </div>
              <button className="submit_data">
                <IoSendSharp />
                &nbsp;Submit
              </button>
            </form>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      <Tooltip
        title="TALK WITH ME"
        arrow
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 500 }}
      >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          variants={animateChat}
          className="chat_section"
          id="chat_section"
          onClick={() => {
            setChat(!chat);
          }}
        >
          {chat === false ? (
            <i className="fa-solid fa-comment-dots chat"></i>
          ) : (
            <i className="fa-solid fa-xmark close"></i>
          )}
        </motion.div>
      </Tooltip>
    </>
  );
}
