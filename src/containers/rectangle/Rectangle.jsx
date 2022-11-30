import React from 'react'
import './rectangle.css';
import sampleicon from '../../assets/sampleicon.svg';

const Rectangle = () => {
  return (
    <div className="wordbie__rectangle_content" id='overview'>
        <h1 className="features">Features</h1>
        <div className="line1">
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={sampleicon} alt='sampleicon' />
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
            <img src={sampleicon} alt='sampleicon' />
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
            <img src={sampleicon} alt='sampleicon' />
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
            <img src={sampleicon} alt='sampleicon' />
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
            <img src={sampleicon} alt='sampleicon' />
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Simplicity</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>No login, No signups, Open and Play</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={sampleicon} alt='sampleicon' />
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Eclectic</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>Try yourself with Variety of our games</p>
            </div>
        </div>
        <div className="wordbie__feature1">
            <div className="wordbie__feature1_icon">
            <img src={sampleicon} alt='sampleicon' />
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
            <img src={sampleicon} alt='sampleicon' />
            </div>
            <div className="wordbie__feature1_header">
                <h1 className="minititle">Grammar</h1>
            </div>
            <div className="wordbie__feature1_paragraph">
                <p className='wordbie__paragraph'>A responsive and mobile-first theme built with the world's most popular component library.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Rectangle;
