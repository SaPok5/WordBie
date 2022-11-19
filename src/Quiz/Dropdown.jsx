import {  Link, Outlet} from 'react-router-dom'
import {useState}  from 'react';
import './styles.css'
function Dropdown() {

    const [isActive, setIsActive] =useState (false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>Choose One 
      <span className='hi'></span>
      </div>
    {isActive && (
      <div className="dropdown-content">
        <div className="dropdown-item"> <a href='/quiz/speech' > DIRECT AND INDIRECT SPEECH</a></div>
        <div className="dropdown-item"><Link to="/quiz/history"> history</Link></div>
        <div className="dropdown-item"><Link to="/quiz/preposition"> PREPOSTION</Link></div>
        
      </div>
      )
      }



    </div>
  )
}
export default Dropdown