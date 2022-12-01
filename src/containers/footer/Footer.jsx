import React from 'react'
import './footer.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Products from '../products/Products';
const Footer = () => {
  return (
    <div className="wordbie__footer-content" id='contactus'>
      <div className="foralignment">
                        <div className="footer_logo-stuff">
                        <div className="logo-image"><img src={logo} alt='logo' />
                        </div>
                        <div className="logo-para">We provide an all in one platform for learning and practising language, especially English.
                        </div>
                        </div> 
                  <div className="footerelements">
                  {/* <div className="footer_account">
                  <h1 className="account">Account</h1>
     
                  <p><a href ="#home">Profile</a></p>
                  <p><a href ="#home">Settings</a></p>
                  <p><a href ="#home">Notification</a></p>
                  </div> */}
                  {/* <div className="footer_about">
                  <h1 className="about">About</h1>
                  <p><Link className="huu"  to="products" spy={true} smooth={true} offset={20} duration={500}>
          Services
        </Link> </p>
                  
                  </div> */}


                  <div className="footer_help">
                  <h1 className="helpus" >Help</h1>
                  <p><a href ="#home" className='huu'>FAQs</a></p>
        <p><Link to = '/contactus'> <button type="button" className='hii'>Contact US</button>
       </Link> </p>
                  </div>
                  </div>
       </div>    
       <div className="containerrr">
  <p>© 2022 WordBie</p>
</div>      
      </div>
      

  )
}

export default Footer;
