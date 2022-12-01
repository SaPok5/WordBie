import React from 'react'
import './rectangle.css';
import sampleicon from '../../assets/sampleicon.svg';
import challenging from '../../assets/challenging.svg';
import learning from '../../assets/learning.svg';
import typing from '../../assets/typing.svg';
import vocabulary from '../../assets/vocabulary.svg';
import simplicity from '../../assets/simplicity.svg';
import variety from '../../assets/variety.svg';
import gram from '../../assets/gram.svg';
import composition from '../../assets/composition.svg';
const Rectangle = () => {
  return (
    <div className="wordbie__rectangle_content" id='overview'>
        <h1 className="features">Features</h1>
        <div className="line1">
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={vocabulary} alt='vocabulary' className='img' />
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Vocab</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Increase Your Vocabulary</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={typing} alt='typing' className='img'/>
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Typing</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Fasten Your Typing speed</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={learning} alt='learning' className='img'/>
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Learning</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'> Enjoy Learning English</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={challenging} alt='challenging' className='img'/>
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Challenging</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Play and Score points to Challenge Yourself</p>
            </div>
        </div>
        </div>


        <div className="line1">
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={simplicity} alt='simplicity' className='img'/>            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Simplicity</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>No login, No signups, Open and Play</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={variety} alt='variety' className='img'/>            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Eclectic</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Try yourself with Variety of our games</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={composition} alt='composition' className='img'/>
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Association</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Sharpen your associative word skills</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={gram} alt='simplicity' className='img'/> 
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Grammar</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Learn Grammar in a fun way. Preposition and speech etc.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Rectangle;
