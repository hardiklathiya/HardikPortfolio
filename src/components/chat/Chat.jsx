import React, { useState, useRef } from "react";
import "./chat.css";
import "../../css/all.min.css";
import { IoSendSharp } from "react-icons/io5";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
export default function Chat({mode}) {
  const [chat, setChat] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
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

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = '*Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = '*Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = '*Invalid email address. Try again!!';
    }

    if (!formData.message.trim()) {
      errors.message = '*Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const onCursorChange=() => {
    setTimeout(() => {
      
      let errors = {};
      
      if (!formData.name.trim()) {
        errors.name = '*Name is required';
      }
      
      if (!formData.email.trim()) {
        errors.email = '*Email is required';
      } else if (!isValidEmail(formData.email)) {
        errors.email = '*Invalid email address. Try again!!';
      }
      
      if (!formData.message.trim()) {
        errors.message = '*Message is required';
      }
      
      setErrors(errors);
      return Object.keys(errors).length === 0;
    }, 2000);
    }
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const sendEmail = (e) => {
    e.preventDefault();
if(validateForm()){

  emailjs
  .sendForm(
    "service_m4zujal",
    "template_kmgzxod",
    form.current,
    "N_cRDX8Ag-IEMEsce"
  )
  .then(
    (result) => {
      console.log(result.text);
      e.target.reset(); 
      setSuccess("Message sent successfully!");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
      setFormData({ name: '', email: '', message: '' });
    },
    (error) => {
      console.log(error.text);
    }
  );
}
else{
  console.log("error")
}
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
            <form ref={form} onSubmit={sendEmail} onChange={onCursorChange}>
              <div className="form_div">
                <label htmlFor="name">*Name</label>
                <input
                value={formData.name}
                onChange={handleChange}
                  name="name"
                  type="text"
                  id="name"
                  className="input_group"
                />
              </div>
              {errors.name && <p className={mode === "dark" ? "error" : "error_white"}>{errors.name}</p>}
              <div className="form_div">
                <label htmlFor="mobile">*Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  id="email"
                  className="input_group"
                />
              </div>
              {errors.email && <p className={mode === "dark" ? "error" : "error_white"}>{errors.email}</p>}
              <div className="form_div">
                <label htmlFor="message">*Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  type="text"
                  id="message"
                  className="textarea"
                />
              </div>
              {errors.message && <p className={mode === "dark" ? "error" : "error_white"}>{errors.message}</p>}
              {success!=="" && <p className={
                  mode === "dark" ? "success" : "success_white"
                }>{ success}</p>} 
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
