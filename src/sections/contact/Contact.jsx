import './contact.css'
import React, { useRef } from 'react';
//import emailjs from 'emailjs-com';

import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsSlack} from 'react-icons/bs'

const Contact = () => {
 /* const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ov4urre', 'template_vq4fn7g', form.current, 'Pv0AsNOnARuq1VUme')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };*/
  return (
    <section id='contact'>
    <h5>İletişime Geçelim</h5>
    <h2>İletişim</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>faruk.ozelll@gmail.com</h5>
          <a href="mailto:cpford13@gmail.com" target="_blank">Mail Gönder</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Mesaj</h4>
          <h5>Faruk ÖZEL</h5>
          <a href="https://m.me/farukozelll" target="_blank">Mesaj Gönder</a>
        </article>
        {/* <article className="contact__option">
          <BsSlack className='contact__option-icon'/>
          <h4>Slack</h4>
          <h5>Send me a Slack message</h5>
          <a href="mailto:cpford13@gmail.com">Send an Email</a>
        </article> */}

      </div>

    </div>
  </section>
  )
}

export default Contact