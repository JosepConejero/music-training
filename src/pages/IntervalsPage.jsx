import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { completeIntervals } from "../pagesHelpers/complete-intervals";
import { MyIntervalButtons } from "../lit-react-components/MyIntervalButtons";
import { randomInterval } from "../pagesHelpers/random-Interval";
import { MyIntervals } from "../lit-react-components/MyIntervals";

export const IntervalsPage = () => {
  const [currentInterval, setCurrentInterval] = useState(completeIntervals[486]); // do4 - re4
  const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
  const [isSharpShowed, setIsSharpShowed]=useState(true);
  const [isFlatShowed, setIsFlatShowed]=useState(true);
  const [isLessThan8Showed, setIsLessThan8Showed]=useState(true);
  const [isShowingModePressed, setIsShowingModePressed]=useState(false);

  const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  };

  const showNextIntervalAnswer = () => {
    setCurrentInterval(randomInterval(completeIntervals, isSharpShowed, isFlatShowed, isLessThan8Showed));
  };

  const updateIsSharpShowed = () => {
    setIsSharpShowed((prevState)=> !prevState);    
  }

  const updateIsFlatShowed = () => {
    setIsFlatShowed((prevState)=> !prevState);    
  }
  const updateIsLessThan8Showed = () => {
    setIsLessThan8Showed((prevState)=> !prevState);    
  }

  const updateIsShowingModePressed = () => {
    setIsShowingModePressed((prevState)=> !prevState);    
  }

  return (
    <>
      <Navbar />
      <div className="intervals-main-container">
        <div>
          <p className="title">INTERVALS PRACTICE</p>
        </div>

        <div className="bloque-vertical">
          {/* <div className="interval-view-container"> */}
            <div onClick={showAnswer}>
              <MyIntervals showingMode={isShowingModePressed} showingModeText={currentInterval.direction + currentInterval.keysInBetween} nota1={currentInterval.note1} nota2={currentInterval.note2}/>
            </div>
            <div className="interval-view-ask-box">
              <p className="interval-view-ask-text" /* onClick={showAnswer} */>
                {pressedAnswerButton ? currentInterval.name : ""}
              </p>
              <p className="interval-view-ask-text" /* onClick={showAnswer} */>
                {pressedAnswerButton ? currentInterval.keysInBetween+" piano keys in between" : ""}
              </p>
              <p className="interval-view-ask-text" /* onClick={showAnswer} */>
                {pressedAnswerButton ? currentInterval.semitones+" semitones" : ""}
              </p>
            </div>
            {/* <div className="interval-view-answer-box">
              <p className="interval-view-answer-text" onClick={showAnswer}>
                {pressedAnswerButton ? currentInterval.name : "?"}
              </p>
            </div> */}
          {/* </div> */}

          <div className="interval-buttons-container">
            {/* <div className="interval-next-button-box"> */}
            <div className="interval-buttons">
              {/* <button className="interval-next-button" onClick={showNextIntervalAnswer}>
                NEXT
              </button> */}
              {/* <MyButton width="120px" height="40px" actionOnClick={showNextIntervalAnswer} text="NEXT"></MyButton> */}
              <MyIntervalButtons 
                    height="80px" 
                    width="350px" 
                    showNext={showNextIntervalAnswer}
                    isSharpShowed={isSharpShowed}
                    isFlatShowed={isFlatShowed}
                    isLessThan8Showed={isLessThan8Showed}
                    isShowingModePressed={isShowingModePressed}
                    isSharpShowedAction={updateIsSharpShowed}
                    isFlatShowedAction={updateIsFlatShowed}
                    isLessThan8ShowedAction={updateIsLessThan8Showed}
                    isShowingModePressedAction={updateIsShowingModePressed}
              />
              
            </div>
            {/* <div className="interval-show-table-box"> */}
           {/*  <div className="interval-buttons"> */}
              {/* <button className="interval-show-table-button" onClick={showIntervalTable}>
                SHOW TABLE
              </button> */}
             {/*  <MyButton width="120px" height="40px" toggle actionOnClick={showIntervalTable} text="SHOW TABLE"></MyButton> */}
           {/*  </div> */}
          </div>

          {/* <div className={pressedShowTableButton ? "interval-table-container" : "hidden-interval-table-container"}>
            <div className="interval-table-box">
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index < (intervals.length/2) && <span key={uniqueKey()}> {`${interval[0]}`}</span>)}</div>
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index < (intervals.length/2) && <span key={uniqueKey()}> {`${interval[1]}`}</span>)}</div>
            </div>
            <div className="interval-table-box">
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index >= (intervals.length/2) && <span key={uniqueKey()}> {`${interval[0]}`}</span>)}</div>
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index >= (intervals.length/2) && <span key={uniqueKey()}> {`${interval[1]}`}</span>)}</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
