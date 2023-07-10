import React from 'react';
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai';
import {BiLogoFacebookSquare} from 'react-icons/bi'
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

const Footer = () => {
  return (
    <footer>
      <img className='footer_logo' href='#about' src={logo} alt='logo'/>
      <img className='footer_logo' href='#about' src={logo2} alt='logo2'/>
      <div className='footer_socials'>
        <a href='https://instagram.com/designmindsdm' rel="noreferrer" target="_blank">
        <AiFillInstagram className='social_logo' /></a>
        <a href='https://facebook.com/profile.php?id=100094362619181' rel="noreferrer" target="_blank">
        <BiLogoFacebookSquare className='social_logo' /></a>
      </div>
      <div className='footer_copyright'>
        <small>
          &copy; DMwebDesigns 2023. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer;