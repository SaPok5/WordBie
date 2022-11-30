import React from 'react';
import illustration from '../../assets/illustration.svg';
import './header.css';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    
    <div className="wordbie__header" id="home">
      <div className="wordbie__header__main">
      <div className="wordbie__header-content" >
        <h1 className="wordbie__text">
        <ul>
        <li>PLAY IT.</li> 
        <li>LEARN IT.</li>
        <li>LOVE IT.</li>
        </ul>
        </h1>
    
      </div>
      <div className="wordbie__header-content__input">
      <Link className="linku"  to="products" spy={true} smooth={true} offset={20} duration={500}>
          Get Started
        </Link> 
      </div>
      
      
    </div>

      <div className='wordbie__header-image'>
        <img src={illustration} alt='illustration' />
      </div>
    </div>
  )
}

export default Header;
