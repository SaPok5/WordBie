import {  Link} from 'react-router-dom'
import {useState}  from 'react';
import logo from 'C:/Users/samip/OneDrive/Desktop/lol/WordBie/src/Quiz/assets/logo.svg'
import './styles.css'
function Dropdown() {

    const [isActive, setIsActive] =useState (false);
  return (

    <div className="dropdown" ><div className='logan'><img src={logo} alt="logo" /></div>
      <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>Choose a category 
      <span className='hi'></span>
      </div>
    {isActive && (
      
      <div className="dropdown-content">
        <div className="dropdown-item"><Link to='/quiz/speech' className='vocab'> DIRECT AND INDIRECT SPEECH</Link></div>
        <div className="dropdown-item"><Link to="/quiz/vocab" className='vocab'>VOCABULARY</Link></div>
        <div className="dropdown-item"><Link to="/quiz/preposition" className='vocab'> PREPOSTION</Link></div>
      </div>
      )
      }
    </div>
    
  )
}
export default Dropdown