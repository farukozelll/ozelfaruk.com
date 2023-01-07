
import './navbar.css'
import Logo from '../../assets/logo.png'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'

const Navbar = () => {
  return (
    
    <nav>
      <div className='container nav__container'>
        <a href="indext.html" className='nav__logo'>
          <img src={Logo} alt="Logo" /> 
        </a>

        <ul className='nav__menu'>
{
  data.map(item => <li key={item.id}> <a href={item.link}>{item.title}</a></li>)
}
        </ul>
        <button id='theme__icon' ><IoIosColorPalette />


        </button>
      </div>

    </nav>
  )
}

export default Navbar