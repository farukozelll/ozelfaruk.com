
import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
const Header = () => {
  return (
    <header id='header'>
    <div className='container header__container'>
      <div className='header__profile'>
        <img src={HeaderImage} alt="Header Portait" />

      </div>
      <h3>Faruk ÖZEL</h3>
      <p>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
      </p>
      <div className='header__cta'>
        <a href="#contact" className='btn primary'> İletişim</a>
        <a href="#portfolio" className='btn light'>Projelerim</a>
      </div>
      <div className="header__socials">
        {
          data.map(item => <a key={item.id}  href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)

        }
      </div>
    </div>
    </header>
   
  )
}

export default Header