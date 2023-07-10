import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {AiFillInstagram} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';




const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v73akb9",
        "template_lubgtln",
        form.current,
        "SNdoDXuwNzkDsAdBb"
      )

    e.target.reset()
  };
  return (
    <contact id="contact">
      <div className=".container contact_container">
        <div className="lcontact">
          <div className="form">
            <h1>Contact Me</h1>
            <form className="form" ref={form} onSubmit={sendEmail}>
              <input className="forma" placeholder="Name" type="text" name="name" autoComplete='name' required/>
              <input className="forma" placeholder="Company" type="text" name="company" autoComplete='off' required/>
              <input className="forma" placeholder="Email" type="email" name="email" autoComplete='email' required/>
              <textarea className='texta' placeholder="Write Your Message" name="message" autoComplete='off' rows={6} required/>
              <input className='btn btn-primary' type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="rcontact">
          <div className='contact_options'>
            <article className='contact_option'>
              <MdEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>solutions@dmwebdesigns.com</h5>
              <a className='btn' href='mailto:solutions@dmwebdesigns.com' rel="noreferrer" target="_blank">Send a message</a>
            </article>
            <article className='contact_option'>
              <AiFillInstagram className='contact_option-icon'/>
              <h4>Instagram</h4>
              <h5>designmindsdm</h5>
              <a className='btn' href='https://ig.me/m/designmindsdm' rel="noreferrer"  target="_blank">Send a message</a>
            </article>
            <article className='contact_option'>
              <IoLogoWhatsapp className='contact_option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+57 3219678288</h5>
              <a className='btn' href='https://api.whatsapp.com/send?phone=573219678288' rel="noreferrer" target="_blank">Send a message</a>
            </article>

          </div>
        </div>
        </div>
    </contact>
  )
} 

export default Contact;