import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {GrLinkedinOption} from 'react-icons/gr'

export default function Footer() {
  let style_color={
    color:'var(--color_primary)'
  }
  return (
      <div className="footer">
        <div className="upper_part">

        <div className="footer_title">
          <h2 className='footer_title1' style={style_color}>Hire me!</h2>
          <h4 className='footer_title2'>Think Once,Happy Forever</h4>
        </div>
        <div className="links">
          <h2 style={style_color}>Useful Links</h2>
          <ul>
            <li><a className='link_name' href="#home">Home</a></li>
            <li><a className='link_name' href="#about">About Us</a></li>
            <li><a className='link_name' href="#experience">My Experience</a></li>
            <li><a className='link_name' href="#services">Services</a></li>
            <li><a className='link_name' href="#portfolio">My Collection</a></li>
            <li><a className='link_name' href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="socials">
        <h2 style={style_color}>Find Me</h2>
        <div className="social_links">

     <a href='https://www.instagram.com/hardik_lathiya_007' target="_blank"><FaInstagram className='social_link'/></a>
    <a href='https://www.linkedin.com/in/hardik-lathiya-a64a02185/' target="_blank"><AiFillGithub className='social_link'/></a>
    <a href='https://github.com/hardiklathiya' target="_blank"><GrLinkedinOption className='social_link'/></a>
        </div>
        </div>
        <div className="call">
          <h2 style={style_color}>Call Me</h2>
          <a href="https://wa.me/+919913177832?" target="_blank">+1(647) 870-0680</a>
        </div>
        </div>
        <div className="below_part">
          <span>©2024 All rights Reservered</span>
        </div>
      </div>
  )
}
