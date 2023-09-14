import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/skillex.png'  
import IMG2 from '../../assets/tasty.png'  
import IMG3 from '../../assets/travel.png'  
import IMG4 from '../../assets/usability.png'  
// import IMG5 from '../../assets/portfolio5.webp'  
// import IMG6 from '../../assets/portfolio6.webp'  

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Skillex Education',
    github: 'https://github.com/aditripathi966/Skillex.edu',
    demo: 'https://aditripathi966.github.io/Skillex.edu/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Tasty Food Restuarant',
    github: 'https://github.com/aditripathi966/Tasty-Restaurant',
    demo: 'https://aditripathi966.github.io/Tasty-Restaurant/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Travel-Web',
    github: 'https://github.com/aditripathi966/Travel-website.github.io',
    demo: '------------------------------'
  },
  {
    id:4,
    image: IMG4,
    title: 'Usability-hub Clone',
    github: 'https://github.com/aditripathi966/Usability-hub-responsive-web',
    demo: 'https://aditripathi966.github.io/Usability-hub-responsive-web/'
  },
  // {
  //   id:5,
  //   image: IMG5,
  //   title: 'hui hui hui hui',
  //   github: 'https://github.com',
  //   demo: '------------------------------'
  // },
  // {
  //   id:6,
  //   image: IMG6,
  //   title: 'hui hui hui hui',
  //   github: 'https://github.com',
  //   demo: '------------------------------'
  // }
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

          {
            data.map(({id, image,title,github,demo}) => {
              return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>   
            </div>
            </article>
              )
            })
          }

          {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>

            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>   
           </div>
          </article> */}
{/* 
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>

            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>   
           </div>  
          </article> */}

          {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>

            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>   
           </div>
          </article> */}

          {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>

            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>   
           </div>  
          </article> */}

          {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>

            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>   
           </div>  
          </article> */}

          {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>

            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>   
           </div> 
          </article> */}

         
        </div>
    </section>
  )
}

export default Portfolio