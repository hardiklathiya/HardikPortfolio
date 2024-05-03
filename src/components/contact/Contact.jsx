import React, { useRef,useState } from "react";
import "./contact.css";
import { TbBrandMessenger } from "react-icons/tb";
import emailjs from "emailjs-com";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Contact({ mode }) {
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
              <span className="contact_address">+1(647) 870-0680</span>
              <a
                className="contact_link"
                href="https://wa.me/+16478700680?"
                target="_blank"
              >
                Send a message
              </a>
            </motion.article>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.1 }}
            className="contct_form"
          >
            <motion.form
              variants={animateContactForm}
              ref={form}
              onSubmit={sendEmail}
              onChange={onCursorChange}
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={
                  mode === "dark" ? "contact_input" : "contact_input_white"
                }
                type="text"
                placeholder="Enter Your Name"
              />
              {errors.name && <p className={mode === "dark" ? "error" : "error_white"}>{errors.name}</p>}
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={
                  mode === "dark" ? "contact_input" : "contact_input_white"
                }
                type="text"
                placeholder="Enter Your Email"
              />
              {errors.email && <p className={mode === "dark" ? "error" : "error_white"}>{errors.email}</p>}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={
                  mode === "dark" ? "contact_input" : "contact_input_white"
                }
                rows="4"
                placeholder="Enter Your Message"
              />
              {errors.message && <p className={mode === "dark" ? "error" : "error_white"}>{errors.message}</p>}
              {success!=="" && <p className={
                  mode === "dark" ? "success" : "success_white"
                }>{ success}</p>} 
             
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
