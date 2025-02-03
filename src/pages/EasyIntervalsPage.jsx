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
           isRebShowed, 
           isReShowed, 
           isResShowed,
           isMibShowed,
           isMiShowed,
           isFaShowed,
           isFasShowed,
           isSolbShowed,
           isSolShowed,
           isSolsShowed,
           isLabShowed,
           isLaShowed,
           isLasShowed,
           isSibShowed,
           isSiShowed,
           updateIsDoShowedAction,
           updateIsDosShowedAction,
           updateIsRebShowedAction,
           updateIsReShowedAction,
           updateIsResShowedAction,
           updateIsMibShowedAction,
           updateIsMiShowedAction,
           updateIsFaShowedAction,
           updateIsFasShowedAction,
           updateIsSolbShowedAction,
           updateIsSolShowedAction,
           updateIsSolsShowedAction,
           updateIsLabShowedAction,
           updateIsLaShowedAction,
           updateIsLasShowedAction,
           updateIsSibShowedAction,
           updateIsSiShowedAction,

           showNextIntervalAnswer,
        } = useEasyIntervals(intervalRef.current);

  //POSIBLE MEJORA: SI SOLO HAY UN BOTÓN PULSADO, NO LO DESPULSA

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
                      isRebShowed={isRebShowed}
                      isRebShowedAction={updateIsRebShowedAction}
                      isReShowed={isReShowed}
                      isReShowedAction={updateIsReShowedAction}
                      isResShowed={isResShowed}
                      isResShowedAction={updateIsResShowedAction}
                      isMibShowed={isMibShowed}
                      isMibShowedAction={updateIsMibShowedAction}
                      isMiShowed={isMiShowed}
                      isMiShowedAction={updateIsMiShowedAction}
                      isFaShowed={isFaShowed}
                      isFaShowedAction={updateIsFaShowedAction}
                      isFasShowed={isFasShowed}
                      isFasShowedAction={updateIsFasShowedAction}
                      isSolbShowed={isSolbShowed}
                      isSolbShowedAction={updateIsSolbShowedAction}
                      isSolShowed={isSolShowed}
                      isSolShowedAction={updateIsSolShowedAction}
                      isSolsShowed={isSolsShowed}
                      isSolsShowedAction={updateIsSolsShowedAction}
                      isLabShowed={isLabShowed}
                      isLabShowedAction={updateIsLabShowedAction}
                      isLaShowed={isLaShowed}
                      isLaShowedAction={updateIsLaShowedAction}
                      isLasShowed={isLasShowed}
                      isLasShowedAction={updateIsLasShowedAction}
                      isSibShowed={isSibShowed}
                      isSibShowedAction={updateIsSibShowedAction}
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

