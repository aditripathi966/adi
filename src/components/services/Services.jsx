import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
  <div className="service__head">
    <h3>Web Technologies</h3>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Proficient in HTML, CSS, and JavaScript for building responsive and interactive web applications.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Experienced in React.js for creating dynamic and user-friendly front-end interfaces.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Skilled in Node.js and Express.js for building robust and scalable back-end services.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Utilized Bootstrap and Tailwind CSS for rapid and efficient front-end development.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Created stunning animations using libraries like GSAP and implemented smooth scrolling with Locomotive Scroll. and Reveal.js</p>
    </li>
{/* 
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Developed presentations and interactive websites with Reveal.js.</p>
    </li> */}

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Designed responsive and user-centric web layouts and interfaces.</p>
    </li>
  </ul>
</article>


      {/* -----end UI/UX------ */}

      <article className='service'>
  <div className="service__head">
    <h3>DevOps And Cloud</h3>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/>
      <p>Familiarity with the DevOps lifecycle and best practices.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Hands-on experience with Docker for containerization.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Proficiency in Jenkins for CI/CD (Continuous Integration/Continuous Deployment).</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Expertise in version control using GitHub.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Working knowledge of Microsoft Azure and AWS cloud services.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Passionate about leveraging cloud solutions to optimize development and deployment processes.</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/>
      <p>Proactive learner, continuously exploring new trends and technologies in the cloud and DevOps space.</p>
    </li>
  </ul>
</article>

{/* 
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        </ul>
      </article> */}

      {/* ------web dev---- */}

      {/* <article className='service'>
       <div className="service__head">
        <h3>Content Creation</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        </ul>
      </article> */}

      {/* ----end content--- */}
      </div>
    </section>
  )
}

export default Services