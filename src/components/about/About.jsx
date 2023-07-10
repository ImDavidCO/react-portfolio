import React from 'react';
import './about.css';
import logo from '../../assets/logo.png';
import CTA from './CTA';

const About = () => {
  return (
    <about id="about" className="section">
      <div className='.container about_container'>
        <div className='labout'>
          <h1>
            CRAFTING DIGITAL EXPERIENCES.
          </h1>
          <h5>
            Unlock your digital potential with my web development expertise.
          </h5>
          <CTA/>
        </div>
        <div className='dabout'>
          <img className='logo' src={logo} alt='logo'/>
        </div>
      </div>
    </about>
  )
}

export default About;