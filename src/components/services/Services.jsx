import React from 'react';
import './services.css';

const Services = () => {
  return (
    <services id="services">
      <div className='seco'>
        <h2 className='h2serv'>Services</h2>
        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            </div>
            <h2>Web design and development</h2>
            <h3>Looking for personalized web design and development services? 
            Look no further! I offer top-notch web design and development 
            solutions tailored to your specific requirements. With my expertise 
            in the latest design trends and web technologies, I create visually 
            stunning and user-friendly websites that make a lasting impression. 
            From conceptualizing the design to coding and deployment, I ensure a 
            seamless and responsive web experience. Whether you need a sleek portfolio 
            website or a robust e-commerce platform, I bring creativity and technical 
            proficiency to every project. Let me help you bring your vision to life and 
            elevate your online presence with an exceptional website</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>more</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            </div>
            <h2>Cloud Solutions and DevOps</h2>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>more</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            </div>
            <h2>Pentesting</h2>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>more</a>  
          </article>
        </div>
      </div>
    </services>
  )
}

export default Services;