import React from 'react';
import './works.css';
import '../../index.css';
import workimg from '../../assets/workimg.png';

const Works = () => {
  return (
    <works id="works">
      <div className='divw'>
        <h2 className='h2p'>Portfolio</h2>
        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={workimg} alt='workimg'/>
            </div>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>live demo</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={workimg} alt='workimg'/>
            </div>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>live demo</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={workimg} alt='workimg'/>
            </div>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>live demo</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={workimg} alt='workimg'/>
            </div>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>live demo</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={workimg} alt='workimg'/>
            </div>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>live demo</a>  
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={workimg} alt='workimg'/>
            </div>
            <h3>This</h3>
            <a href="https://fly.io/docs/languages-and-frameworks/" className='btn btn-primary'>live demo</a>  
          </article>
        </div>
      </div>
    </works>
  )
}

export default Works;