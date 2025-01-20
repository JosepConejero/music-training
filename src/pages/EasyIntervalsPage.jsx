import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { MyIntervalButtons } from "../lit-react-components/MyIntervalButtons";
import { MyIntervals } from "../lit-react-components/MyIntervals";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { useToggleValue } from "../hooks/useToggleValue";
import { createEasyIntervals } from "../pagesHelpers/get-easy-intervals";
import { randomEasyInterval } from "../pagesHelpers/random-easy-interval";
import { MyIntervalButtons3 } from "../lit-react-components/MyIntervalButtons3";
import { MyEasyIntervalsButtons } from "../lit-react-components/MyEasyIntervalsButtons";

export const EasyIntervalsPage = () => {

  const intervalRef = useRef(createEasyIntervals());
  const filteredNotesRef = useRef([{noteUp: "do", noteDown: "DO"}]);

  const [currentInterval, setCurrentInterval] = useState(intervalRef.current[4]); 
  const [intervalsSelection, setIntervalsSelection] = useState([]);
  //const [filteredNotes, setFilteredNotes] = useState()

  const {value: isSharpShowed, updateToggleValue: updateIsSharpShowed} = useToggleValue(false);
  const {value: isFlatShowed, updateToggleValue: updateIsFlatShowed} = useToggleValue(false);
  const {value: isNaturalShowed, updateToggleValue: updateIsNaturalShowed} = useToggleValue(true);
  const {value: isSolutionShowed, updateToggleValue: showSolution} = useToggleValue(false);
  const {value: isShowingModePressed, updateToggleValue: updateIsShowingModePressed} = useToggleValue(false);
  const {value: isSemitonesToggleSelected, updateToggleValue: updateIsSemitonesToggleSelected} = useToggleValue(false);
  const {value: isPlusShowed, updateToggleValue: updateIsPlusShowed} = useToggleValue(true);
  const {value: isMinusShowed, updateToggleValue: updateIsMinusShowed} = useToggleValue(false);
  
  const {value: isDoShowed, updateToggleValue: updateIsDoShowed} = useToggleValue(true);
  const {value: isDosShowed, updateToggleValue: updateIsDosShowed} = useToggleValue(false);
  const {value: isReShowed, updateToggleValue: updateIsReShowed} = useToggleValue(false);
  const {value: isResShowed, updateToggleValue: updateIsResShowed} = useToggleValue(false);
  const {value: isMiShowed, updateToggleValue: updateIsMiShowed} = useToggleValue(false);
  const {value: isFaShowed, updateToggleValue: updateIsFaShowed} = useToggleValue(false);

  const getIntervalsByNotes = (allintervals, notes)=>{ //notes ==> [{noteUp: "do", noteDown: "DO"},{....}]
    let intervalsSelection = [];
    intervalsSelection = allintervals.filter((interval)=> {
        let result = false;
        notes.forEach((pair)=>{
            if (pair.noteUp === interval.note1WithoutNumber || pair.noteDown === interval.note1WithoutNumber) result = true;
          })
        return result;
      });
    return intervalsSelection;
  }

  const showNextIntervalAnswer = () => {
    setCurrentInterval(randomEasyInterval(intervalsSelection, isSharpShowed, isFlatShowed, isNaturalShowed, isPlusShowed, isMinusShowed)); 
  };

  const updateisDoShowedAction = ()=> {
    updateIsDoShowed();
    //console.log("hecho", isDoShowed);//sustituir por useRef
    //const newValue = {};
    //setIntervalsSelection((value)=>newValue);
    //console.log(intervalsSelection);
    
    //[{noteUp: "do", noteDown: "DO"}]
    //comprueba si [{noteUp: "do", noteDown: "DO"}] es el único que hay, y entonces no lo quita
    //POR CIERTO, DA UN ERROR CUANDO LE PULSO # Y b Y LE QUITO NATURAL PERO ESTÁ EN DO NATURAL
  };

 /*  const optionsRange = ["all", "do", "dos", "re", "res", "mi", "fa", "fas", "sol", "sols", "la", "las", "si"] ;
  const [selectedNotes, setSelectedNotes] = useState(["do"]);

  const updateNotes = (num)=>{
    setSelectedNotes(num);
    updateIntervalsSelection(completeIntervals, num);
  } */


  const setNumberInterval = () => isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;
 
  useEffect(() => {
    setIntervalsSelection(getIntervalsByNotes(intervalRef.current, [{noteUp: "do", noteDown: "DO"}]));
  }, [])


  return (
    <>
      <Navbar />
      <div className="intervals-main-container">
        <div>
          <p className="title">EASY INTERVALS PRACTICE</p>
        </div>
        
        <div className="screen-width vertical-block">
            <div className="interval-view-container"> 
                <div onClick={showSolution}>
                  <MyIntervals showingMode={isShowingModePressed} 
                     showingModeText={currentInterval.direction + setNumberInterval()} 
                     nota1={currentInterval.note1} 
                     nota2={currentInterval.note2}
                  />
                </div>

                <div className="horizontal-block">
                    <MyEasyIntervalsButtons
                      isDoShowed={isDoShowed}
                      isDoShowedAction={updateisDoShowedAction}
                    />
                    
                </div>
            </div>
            
            <div className="interval-view-ask-box">
              <p className="interval-view-ask-text">
                {currentInterval.note1WithoutNumber}&nbsp;&nbsp;&nbsp;{"-->"}&nbsp;&nbsp;&nbsp;
                {currentInterval.note2WithoutNumber}
              </p>
              <p className="interval-view-ask-text">
                {isSolutionShowed 
                    ? (isSemitonesToggleSelected 
                          ? currentInterval.semitones + " semitones"
                          : currentInterval.keysInBetween + " keys" )
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
              
              <MyIntervalButtons3 
                    height="80px" 
                    width="350px" 
                    isShowingModePressed={isShowingModePressed}
                    isShowingModePressedAction={updateIsShowingModePressed}
                    isSemitonesToggleSelected={isSemitonesToggleSelected}
                    isSemitonesToggleSelectedAction={updateIsSemitonesToggleSelected}
                    isPlusShowed={isPlusShowed}
                    isPlusShowedAction={updateIsPlusShowed} 
                    isMinusShowed={isMinusShowed}
                    isMinusShowedAction={updateIsMinusShowed} 
              />

            </div>
          </div>

          <MyKeyboard notes={[currentInterval.note1, currentInterval.note2]}></MyKeyboard>
        </div>
      </div>
    </>
  );
};



/* activateAction={()=>updateIntervalsSelection(completeIntervals, selectedItemIndex)}  */
/* <MyThreeButtons
activateAction={()=>{}}
updateItemIndex={updateItemIndex} 
textItems={optionsRange} 
selectedItemIndex={selectedItemIndex}
height="180px"
width="100px"            
/>                 */