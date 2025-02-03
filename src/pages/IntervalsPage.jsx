import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { completeIntervals } from "../pagesHelpers/complete-intervals";
import { MyIntervalButtons } from "../lit-react-components/MyIntervalButtons";
import { randomInterval } from "../pagesHelpers/random-interval";
import { MyIntervals } from "../lit-react-components/MyIntervals";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { MyIntervalButtons2 } from "../lit-react-components/MyIntervalButtons2";
import { MyThreeButtons } from "../lit-react-components/MyThreeButtons";
import { useToggleValue } from "../hooks/useToggleValue";

export const IntervalsPage = () => {
  const [currentInterval, setCurrentInterval] = useState(completeIntervals[486]); // do4 - re4
  const [intervalsSelection, setIntervalsSelection] = useState(completeIntervals);

  const {value: isSharpShowed, updateToggleValue: updateIsSharpShowed} = useToggleValue(true);
  const {value: isFlatShowed, updateToggleValue: updateIsFlatShowed} = useToggleValue(true);
  const {value: isNaturalShowed, updateToggleValue: updateIsNaturalShowed} = useToggleValue(true);
  const {value: isSolutionShowed, updateToggleValue: showSolution} = useToggleValue(false);
  const {value: isLessThan8Showed, updateToggleValue: updateIsLessThan8Showed} = useToggleValue(true);
  const {value: isShowingModePressed, updateToggleValue: updateIsShowingModePressed} = useToggleValue(false);
  const {value: isSemitonesToggleSelected, updateToggleValue: updateIsSemitonesToggleSelected} = useToggleValue(false);

  const optionsRange = isSemitonesToggleSelected 
            ? ["all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] 
            : ["all", "0", "1", "2", "3", "4", "5", "6", "7", "8",  "9", "10", "11"];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const updateItemIndex = (num)=>{
    setSelectedItemIndex(num);
    updateIntervalsSelection(completeIntervals, num);
  }

  const showNextIntervalAnswer = () => {
    setCurrentInterval(randomInterval(intervalsSelection, isSharpShowed, isFlatShowed, isNaturalShowed, isLessThan8Showed)); 
  };

  const setNumberInterval = () => isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;

/* const getIntervalsBySharpFlatNaturalLessThan8 = (allIntervals, sharp, flat, natural, lessThan8)=>{

  return allIntervals.filter((note)=>isFlat(note.note1))
}
 */

  const getIntervalsBySemitones = (allIntervals, semitones) => {
    return allIntervals.filter((note) => note.semitones === +semitones);
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

        <div className="screen-width vertical-block">
            <div className="interval-view-container"> 
                <div onClick={showSolution}>
                  <MyIntervals showingMode={isShowingModePressed} showingModeText={currentInterval.direction + setNumberInterval()} nota1={currentInterval.note1} nota2={currentInterval.note2}/>
                </div>
                <MyThreeButtons
                  /* activateAction={()=>updateIntervalsSelection(completeIntervals, selectedItemIndex)}  */
                  activateAction={()=>{}}
                  updateItemIndex={updateItemIndex} 
                  textItems={optionsRange} 
                  selectedItemIndex={selectedItemIndex}
                  height="180px"
                  width="100px"            
                />                
            </div>
            
            <div className="">
              <p className="interval-view-ask-text">
                {isSolutionShowed ? currentInterval.name : ""}
              </p>
              <p className="interval-view-ask-text">
                {isSolutionShowed 
                    ? (isSemitonesToggleSelected 
                          ? currentInterval.semitones + " semitones"
                          : currentInterval.keysInBetween + " piano keys in between" )
                    : ""}
              </p>
            </div>

          <div className="interval-buttons-container">
            <div className="interval-buttons">
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
              />
              
              <MyIntervalButtons2 
                    height="80px" 
                    width="350px" 
                    isShowingModePressed={isShowingModePressed}
                    isShowingModePressedAction={updateIsShowingModePressed}
                    isLessThan8Showed={isLessThan8Showed}
                    isLessThan8ShowedAction={updateIsLessThan8Showed}
                    isSemitonesToggleSelected={isSemitonesToggleSelected}
                    isSemitonesToggleSelectedAction={updateIsSemitonesToggleSelected}
              />
            </div>
          </div>

          <MyKeyboard notes={[currentInterval.note1, currentInterval.note2]}></MyKeyboard>

        </div>
      </div>
    </>
  );
};






  //const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
  /* const [isSharpShowed, setIsSharpShowed] = useState(true);
  const [isFlatShowed, setIsFlatShowed] = useState(true);
  const [isNaturalShowed, setIsNaturalShowed] = useState(true); */
/*   const [isLessThan8Showed, setIsLessThan8Showed] = useState(true);
  const [isShowingModePressed, setIsShowingModePressed] = useState(false);
  const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(true); */

  /*   const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  }; */

  /*   const updateIsSharpShowed = () => {
    setIsSharpShowed((prevState)=> !prevState);    
  } */

/*   const updateIsFlatShowed = () => {
    setIsFlatShowed((prevState)=> !prevState);    
  } */

/*   const updateIsNaturalShowed = () => {
    setIsNaturalShowed((prevState)=> !prevState);    
  } */
  
/*   const updateIsLessThan8Showed = () => {
    setIsLessThan8Showed((prevState)=> !prevState);    
  } */

/*   const updateIsShowingModePressed = () => {
    setIsShowingModePressed((prevState)=> !prevState);    
  } */

/*   const updateIsSemitonesToggleSelected = () => {
    setIsSemitonesToggleSelected((prevState)=> !prevState);    
  } */
