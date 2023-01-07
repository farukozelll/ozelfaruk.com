
import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/about.jpg'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <h5>Beni Tanıyor Musun?</h5>
      <h2>Hakkımda</h2>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
        <h2>Hakkımda</h2>
          <div className="about__cards">
{
         data.map(item => (
         <Card key={item.id} className="about__card">
           <span className='about__card-icon'>{item.icon}</span>
           <h5>{item.title}</h5>
          <small>{item.desc}</small>

         </Card>
         ))
}
          </div>
          <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
          </p>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
          </p>
          <a href={CV} download className='btn primary' > CV İndir<HiDownload/></a>
        </div>

      </div>

    </section>
  )
}

export default About