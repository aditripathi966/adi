import React from 'react'
import './footer.css'
import {BsFacebook, BsLinkedin, BsMailbox} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>AADI</a>
    <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/aditripathi966/"><BsLinkedin/></a>
      <a href="https://www.instagram.com/aditya_tripathi04/"><FiInstagram/></a>
      <a href="https://mail.google.com/mail/u/0/#inbox"><BsMailbox/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; ADITYA. All rights are reserved</small>
    </div>
   </footer>
  )
}

export default Footer