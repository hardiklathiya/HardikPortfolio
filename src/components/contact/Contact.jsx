import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";
import emailjs from "emailjs-com";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Contact({ mode }) {
  const animateContactBox = {
    offscreen: { opacity: 0, x: "-10vw" },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        bounce: 0.5,

        type: "spring",
      },
    },
  };
  const animateContactForm = {
    offscreen: { opacity: 0, x: "10vw" },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
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
    <section id="contact">
      <h4 className={mode === "dark" ? "contact1" : "contact1_white"}>
        Get In Touch
      </h4>
      <h2
        style={{}}
        className={mode === "dark" ? "contact2" : "contact2_white"}
      >
        Contact Us
      </h2>
      <div className="box">
        <div className="container contact_container">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.1 }}

            className="contact_options"
          >
            <motion.article
              variants={animateContactBox}
              className="contact_option"
            >
              <TbBrandMessenger className="contact_icon" />

              <h4 className="contact_media">Messenger</h4>
              <span className="contact_address">hardik.lathiya007</span>
              <a
                className="contact_link"
                href="https://m.me/hardik.lathiya007"
                target="_blank"
              >
                Send a message
              </a>
            </motion.article>
            <motion.article
              variants={animateContactBox}
              className="contact_option"
            >
              <AiOutlineWhatsApp className="contact_icon" />

              <h4 className="contact_media">Whatsapp</h4>
              <span className="contact_address">+919913177832</span>
              <a
                className="contact_link"
                href="https://wa.me/+919913177832?"
                target="_blank"
              >
                Send a message
              </a>
            </motion.article>
          </motion.div>
          <motion.div  initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.1 }}
          className="contct_form">
            <motion.form variants={animateContactForm} ref={form} onSubmit={sendEmail}>
              <input
                name="name"
                className={
                  mode === "dark" ? "contact_input" : "contact_input_white"
                }
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <input
                name="email"
                className={
                  mode === "dark" ? "contact_input" : "contact_input_white"
                }
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <textarea
                name="message"
                className={
                  mode === "dark" ? "contact_input" : "contact_input_white"
                }
                rows="4"
                placeholder="Enter Your Message"
                required
              />
              <div style={{ marginTop: "-2rem" }}>
                <button
                  type="submit"
                  className={
                    mode === "dark"
                      ? "btn btn-primary"
                      : "btn white_btn_primary"
                  }
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
