import { useRef } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { MyIntervalButtons } from "../lit-react-components/MyIntervalButtons";
import { MyIntervals } from "../lit-react-components/MyIntervals";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { createEasyIntervals } from "../pagesHelpers/get-easy-intervals";
import { MyIntervalButtons3 } from "../lit-react-components/MyIntervalButtons3";
import { MyEasyIntervalsButtons } from "../lit-react-components/MyEasyIntervalsButtons";
import { useEasyIntervals } from "../hooks/useEasyIntervals";

export const EasyIntervalsPage = () => {

  const intervalRef = useRef(createEasyIntervals());

  const {  currentInterval,  
           isSharpShowed, 
           isFlatShowed, 
           isNaturalShowed, 
           isSolutionShowed, 
           isShowingModePressed, 
           isSemitonesToggleSelected, 
           isPlusShowed, 
           isMinusShowed, 
           updateIsSharpShowed,
           updateIsFlatShowed,
           updateIsNaturalShowed,
           showSolution,
           updateIsShowingModePressed,
           updateIsSemitonesToggleSelected,
           updateIsPlusShowed,
           updateIsMinusShowed,
           isDoShowed, 
           isDosShowed, 
           isReShowed, 
           isResShowed,
           isMiShowed,
           isFaShowed,
           isFasShowed,
           isSolShowed,
           isSolsShowed,
           isLaShowed,
           isLasShowed,
           isSiShowed,
           updateIsDoShowedAction,
           updateIsDosShowedAction,
           updateIsReShowedAction,
           updateIsResShowedAction,
           updateIsMiShowedAction,
           updateIsFaShowedAction,
           updateIsFasShowedAction,
           updateIsSolShowedAction,
           updateIsSolsShowedAction,
           updateIsLaShowedAction,
           updateIsLasShowedAction,
           updateIsSiShowedAction,

           showNextIntervalAnswer,
        } = useEasyIntervals(intervalRef.current);

  //comprueba si [{noteUp: "do", noteDown: "DO"}] es el único que hay, y entonces no lo quita
  //POR CIERTO, DA UN ERROR CUANDO LE PULSO # Y b Y LE QUITO NATURAL PERO ESTÁ EN DO NATURAL

  const setNumberInterval = () => isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;
 
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
                   //   isDoBlocked={isDoBlocked}
                      isDoShowed={isDoShowed}
                      isDoShowedAction={updateIsDoShowedAction}
                      isDosShowed={isDosShowed}
                      isDosShowedAction={updateIsDosShowedAction}
                      isReShowed={isReShowed}
                      isReShowedAction={updateIsReShowedAction}
                      isResShowed={isResShowed}
                      isResShowedAction={updateIsResShowedAction}
                      isMiShowed={isMiShowed}
                      isMiShowedAction={updateIsMiShowedAction}
                      isFaShowed={isFaShowed}
                      isFaShowedAction={updateIsFaShowedAction}
                      isFasShowed={isFasShowed}
                      isFasShowedAction={updateIsFasShowedAction}
                      isSolShowed={isSolShowed}
                      isSolShowedAction={updateIsSolShowedAction}
                      isSolsShowed={isSolsShowed}
                      isSolsShowedAction={updateIsSolsShowedAction}
                      isLaShowed={isLaShowed}
                      isLaShowedAction={updateIsLaShowedAction}
                      isLasShowed={isLasShowed}
                      isLasShowedAction={updateIsLasShowedAction}
                      isSiShowed={isSiShowed}
                      isSiShowedAction={updateIsSiShowedAction}
                    />
                    
                </div>
            </div>
            
            <div className="interval-view-ask-box">
              <p className="interval-view-ask-text">
                {currentInterval.note1WithoutNumber}&nbsp;&nbsp;&nbsp;{"-->"}&nbsp;&nbsp;&nbsp;
                {isShowingModePressed 
                              ? currentInterval.direction + setNumberInterval() 
                              : currentInterval.note2WithoutNumber
                }
              </p>
              <p className="interval-view-ask-text">
                {isSolutionShowed 
                    ? (isShowingModePressed 
                              ? currentInterval.note2WithoutNumber 
                              : (isSemitonesToggleSelected 
                                              ? currentInterval.semitones + " semitones" 
                                              : currentInterval.keysInBetween + " keys" 
                                )
                      )
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