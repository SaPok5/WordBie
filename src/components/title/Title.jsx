import React from 'react'
import './title.css';

const Title = () => {
  return (
    <div className="worbie__numbers-content">
      <div className="content">
      <div className="line1">
          <div className="number1">
                     <h1 className="number1_header">
                        50+ Words
                     </h1>
                     <p className="number1_para">
                         More than 50 words in Word-Guessing game to test your associativity skills                     </p>
          </div>
          <div className="number2">
          <h1 className="number1_header">
                        1000+ Words
                     </h1>
                     <p className="number1_para">
                         We have more than 1000 words combined for typing test.                     </p>

          </div>
      </div>

      <div className="line2">
      <div className="number3">
      <h1 className="number1_header">
                        25+ Questions
                     </h1>
                     <p className="number1_para">
                         We provide more than 25 questions combined Quiz to help improve your grammar knowledge.
                     </p>
      </div>
      <div className="number4">
                    <h1 className="number1_header">
                        3 Games
                     </h1>
                     <p className="number1_para">
                         We provide 3 different games, to help improve, test and widen your language skills.
                     </p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Title;
