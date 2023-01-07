
import './portfolio.css'

import data from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>Benim Projelerim</h5>
      <h2>Projelerim</h2>

      <div className="container portfolio__container">
     {
       data.map(item =>            
        <a key={item.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className='btn' target='_blank'>Github</a>
              <a href={item.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Canlı Demo</a>
            </div>
          </div>
        </a>  
          )
        }

      </div>

    </section >
  )
}

export default Portfolio