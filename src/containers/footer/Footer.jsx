import React from 'react'
import './footer.css';
import logo from '../../assets/logo.svg';
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
                  <div className="footer_about">
                  <h1 className="about">About</h1>
                  <p><a href ="#home" className='huu'>Services</a></p>
                  <p><a href ="#home" className='huu'>Contact</a></p>
                  </div>


                  <div className="footer_help">
                  <h1 className="helpus" >Help</h1>
                  <p><a href ="#home" className='huu'>FAQs</a></p>
                  <p><a href ="#home" className='huu'>Ask Us</a></p>

                  </div>
                  </div>



       </div>          
      </div>
      

  )
}

export default Footer;
