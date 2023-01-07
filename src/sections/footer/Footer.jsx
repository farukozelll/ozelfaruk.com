
import './footer.css'
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import React from 'react'
import data from '../navbar/data'

const Footer = () => {
  return (
    <footer>
    <a href ="#" className='footer__logo'>Footerım</a>

    <ul className='permalinks'>
{
  data.map(item => <li key={item.id}> <a href={item.link}>{item.title}</a></li>)
}
        </ul>

    <div className="footer__socials">
      <a href='https://www.facebook.com/caleb.p.ford.1'><BsFacebook/></a>
      <a href='https://www.linkedin.com/in/caleb-ford13/'><BsLinkedin/></a>
      <a href='https://github.com/impr3ssionist'><BsGithub/></a>
    </div>

    
  </footer>
  )
}

export default Footer