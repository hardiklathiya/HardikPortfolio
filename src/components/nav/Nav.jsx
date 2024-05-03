import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export default function Nav(props) {
  const [active, setActive] = useState("#");
  
  
  return (
    <>
      <nav className="navigation" id="navigation" style={{backgroundColor:props.mode==="dark"?"":"rgba(0,0,0,0.9)"}}>
        <ul>
          <li className={active==="#home" | ""?"list active":"list"} onClick={()=>setActive("#home")} >
            <a href="#home"  >
              <span className="icon" >
                <AiOutlineHome />
              </span>
              <span className="text">HOME</span>
            </a>
          </li>
          <li className={active==="#about"?"list active":"list"} onClick={()=>setActive("#about")}>
            <a href="#about">
              <span className="icon">
                <AiOutlineUser />
              </span>
              <span className="text">ABOUT</span>
            </a>
          </li>
          <li className={active==="#experience"?"list active":"list"} onClick={()=>setActive("#experience")}>
            <a href="#experience">
              <span className="icon">
                <BiBook />
              </span>
              <span className="text">EXPERIENCE</span>
            </a>
          </li>
          <li className={active==="#services"?"list active":"list"} onClick={()=>setActive("#services")}>
            <a href="#services">
              <span className="icon">
                <RiServiceLine />
              </span>
              <span className="text">SERVICES</span>
            </a>
          </li>
          <li className={active==="#contact"?"list active":"list"} onClick={()=>setActive("#contact")}>
            <a href="#contact">
              <span className="icon">
                <BiMessageSquareDetail />
              </span>
              <span className="text">CONTACT</span>
            </a>
          </li>
          {/* <div className="indicator"></div> */}
        </ul>
       
      </nav>
    </>
  );
}
