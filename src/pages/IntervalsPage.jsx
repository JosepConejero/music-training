import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { completeIntervals } from "../pagesHelpers/complete-intervals";
import { MyIntervalButtons } from "../lit-react-components/MyIntervalButtons";
import { randomInterval } from "../pagesHelpers/random-Interval";
import { MyIntervals } from "../lit-react-components/MyIntervals";
//import "../lit-elements/my-keyboard.js";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { MyIntervalButtons2 } from "../lit-react-components/MyIntervalButtons2";

export const IntervalsPage = () => {
  const [currentInterval, setCurrentInterval] = useState(completeIntervals[486]); // do4 - re4
  const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
  const [isSharpShowed, setIsSharpShowed] = useState(true);
  const [isFlatShowed, setIsFlatShowed] = useState(true);
  const [isNormalShowed, setIsNormalShowed] = useState(true);
  const [isLessThan8Showed, setIsLessThan8Showed] = useState(true);
  const [isShowingModePressed, setIsShowingModePressed] = useState(false);
  const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(true);

  const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  };

  const showNextIntervalAnswer = () => {
    setCurrentInterval(randomInterval(completeIntervals, isSharpShowed, isFlatShowed, isLessThan8Showed)); // <----- isNormalShowed
  };

  const updateIsSharpShowed = () => {
    setIsSharpShowed((prevState)=> !prevState);    
  }

  const updateIsFlatShowed = () => {
    setIsFlatShowed((prevState)=> !prevState);    
  }

  const updateIsNormalShowed = () => {
    setIsNormalShowed((prevState)=> !prevState);    
  }
  
  const updateIsLessThan8Showed = () => {
    setIsLessThan8Showed((prevState)=> !prevState);    
  }

  const updateIsShowingModePressed = () => {
    setIsShowingModePressed((prevState)=> !prevState);    
  }

  const updateIsSemitonesToggleSelected = () => {
    setIsSemitonesToggleSelected((prevState)=> !prevState);    
  }

  const setNumberInterval = ()=> isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;


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
              <MyIntervals showingMode={isShowingModePressed} showingModeText={currentInterval.direction + setNumberInterval()} nota1={currentInterval.note1} nota2={currentInterval.note2}/>
            </div>
            <div className="interval-view-ask-box">
              <p className="interval-view-ask-text" /* onClick={showAnswer} */>
                {pressedAnswerButton ? currentInterval.name : ""}
              </p>
              <p className="interval-view-ask-text" /* onClick={showAnswer} */>
                {pressedAnswerButton 
                    ? (isSemitonesToggleSelected 
                          ? currentInterval.semitones + " semitones"
                          : currentInterval.keysInBetween + " piano keys in between" )
                    : ""}
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
                    isSharpShowedAction={updateIsSharpShowed}
                    isFlatShowed={isFlatShowed}
                    isFlatShowedAction={updateIsFlatShowed}
                    isNormalShowed={isNormalShowed}
                    isNormalShowedAction={updateIsNormalShowed}
/*                    isLessThan8Showed={isLessThan8Showed}
                    isShowingModePressed={isShowingModePressed}
                     isLessThan8ShowedAction={updateIsLessThan8Showed}
                    isShowingModePressedAction={updateIsShowingModePressed} */
              />
              
              <MyIntervalButtons2 
                    height="80px" 
                    width="350px" 
                    /* showNext={showNextIntervalAnswer}
                    isSharpShowed={isSharpShowed}
                    isFlatShowed={isFlatShowed}
                    isSharpShowedAction={updateIsSharpShowed}
                    isFlatShowedAction={updateIsFlatShowed} */
                    isShowingModePressed={isShowingModePressed}
                    isShowingModePressedAction={updateIsShowingModePressed}
                    isLessThan8Showed={isLessThan8Showed}
                    isLessThan8ShowedAction={updateIsLessThan8Showed}
                    isSemitonesToggleSelected={isSemitonesToggleSelected}
                    isSemitonesToggleSelectedAction={updateIsSemitonesToggleSelected}
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

          {/* <my-keyboard></my-keyboard> */}
          <MyKeyboard notes={[currentInterval.note1, currentInterval.note2]}></MyKeyboard>

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
