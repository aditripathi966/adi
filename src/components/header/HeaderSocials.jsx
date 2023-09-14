import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aditripathi966/" target="_blank" ><BsLinkedin/></a>
        <a href="https://github.com/aditripathi966" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/aditya_tripathi04/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials