import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { completeIntervals } from "../pagesHelpers/complete-intervals";
import { MyIntervalButtons } from "../lit-react-components/MyIntervalButtons";
import { randomInterval } from "../pagesHelpers/random-Interval";
import { MyIntervals } from "../lit-react-components/MyIntervals";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { MyIntervalButtons2 } from "../lit-react-components/MyIntervalButtons2";
import { MyThreeButtons } from "../lit-react-components/MyThreeButtons";

export const IntervalsPage = () => {
  const [currentInterval, setCurrentInterval] = useState(completeIntervals[486]); // do4 - re4
  const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
  const [isSharpShowed, setIsSharpShowed] = useState(true);
  const [isFlatShowed, setIsFlatShowed] = useState(true);
  const [isNaturalShowed, setIsNaturalShowed] = useState(true);
  const [isLessThan8Showed, setIsLessThan8Showed] = useState(true);
  const [isShowingModePressed, setIsShowingModePressed] = useState(false);
  const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(true);
  const [intervalsSelection, setIntervalsSelection] = useState(completeIntervals);

  const optionsRange = ["all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const updateItemIndex = (num)=>{
    setSelectedItemIndex(num);
  }

  const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  };

  const showNextIntervalAnswer = () => {
    //setCurrentInterval(randomInterval(completeIntervals, isSharpShowed, isFlatShowed, isNaturalShowed, isLessThan8Showed)); 
    setCurrentInterval(randomInterval(intervalsSelection, isSharpShowed, isFlatShowed, isNaturalShowed, isLessThan8Showed)); 
  };

  const updateIsSharpShowed = () => {
    setIsSharpShowed((prevState)=> !prevState);    
  }

  const updateIsFlatShowed = () => {
    setIsFlatShowed((prevState)=> !prevState);    
  }

  const updateIsNaturalShowed = () => {
    setIsNaturalShowed((prevState)=> !prevState);    
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

  const setNumberInterval = () => isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;

const getIntervalsBySemitones = (allIntervals, semitones) => {
  const result = allIntervals.filter((note) => note.semitones === +semitones);
/*   const result = "mierda";
  console.log(result); */
  return result;
}

  const updateIntervalsSelection = (allintervals, item)=>{
    if (optionsRange[item]==="all") {
      setIntervalsSelection(allintervals);
      return;
    }
   setIntervalsSelection(getIntervalsBySemitones(allintervals, optionsRange[item])) ;

  }

  return (
    <>
      <Navbar />
      <div className="intervals-main-container">
        <div>
          <p className="title">INTERVALS PRACTICE</p>
        </div>

        <div className="bloque-vertical">
            <div className="interval-view-container"> 
                <div onClick={showAnswer}>
                  <MyIntervals showingMode={isShowingModePressed} showingModeText={currentInterval.direction + setNumberInterval()} nota1={currentInterval.note1} nota2={currentInterval.note2}/>
                </div>
                <MyThreeButtons
                  activateAction={()=>updateIntervalsSelection(completeIntervals, selectedItemIndex)} 
                  updateItemIndex={updateItemIndex} 
                  textItems={optionsRange} 
                  selectedItemIndex={selectedItemIndex}
                  height="180px"
                  width="100px"            
                />                
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
                    isNaturalShowed={isNaturalShowed}
                    isNaturalShowedAction={updateIsNaturalShowed}
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
