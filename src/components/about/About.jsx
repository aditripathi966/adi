import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className='container about__container'>
              

              <div className="about__me">
                 <div className="about__me-image">
                  <img className='photo' src={ME} alt="About Image" />
                 </div>
              </div>

            
              <div className="about__content">
              {/* <h5>Get to Know</h5>
            <h2>About me</h2> */}

                 <div className="about__cards">
                  <article className="about__card">
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>
                      1+ Years Working
                    </small>
                  </article>
                  {/* <article className="about__card">
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>
                      5+ Worldwide
                    </small>
                  </article> */}
                  <article className="about__card">
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>
                      5+ completed
                    </small>
                  </article>
                 </div>

                 <p>I am Aditya Tripathi. I recently graduated with a Bachelor's of Technology from Technocrats Institute of Technology in Bhopal, Madhya Pradesh. I am currently actively seeking opportunities to further develop my career. I possess proficiency in web technologies and have a foundational understanding of DevOps and cloud computing.</p>

                 <a href="#contact" className='btn btn-primary'>Let's talk</a>
              </div>

            </div>
  
    </section>
  )
}

export default About