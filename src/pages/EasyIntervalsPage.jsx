/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { MyIntervals } from "../lit-react-components/MyIntervals";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { completeEasyIntervals } from "../pagesHelpers/complete-easy-intervals";
import { useEasyIntervals } from "../hooks/useEasyIntervals";
import { useAudio } from "../hooks/useAudio";
import { easyIntervalsConfiguration, filteredEasyIntervals, unsortedIntervals } from "../pagesHelpers/easy-intervals-configuration";
import { My4GenericButtons } from "../lit-react-components/My4GenericButtons";
import { useConfigurationModal } from "../hooks/useConfigurationModal";
import { MyEasyIntervalsConfigurationModal } from "../lit-react-components/MyEasyIntervalsConfigurationModal";

export const EasyIntervalsPage = () => {

  const configurationRef = useRef(easyIntervalsConfiguration);
  //const [configuration, setConfiguration] = useState(configurationRef.current);
  const {configuration, isVisibleModal, updateConfiguration, hideModal, showModal} = useConfigurationModal(configurationRef.current)
  const intervalRef = useRef(unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, configurationRef.current)));
  const [intervals, setIntervals] = useState(intervalRef.current);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const nIntervId = useRef();

  const {audioRef: audioRef1, playNote: playNote1} = useAudio();
  const {audioRef: audioRef2, playNote: playNote2} = useAudio();
  
  

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
           setCurrentInterval,
        } = useEasyIntervals(intervalRef.current);

  //POSIBLE MEJORA: SI SOLO HAY UN BOTÓN PULSADO, NO LO DESPULSA

  const setNumberInterval = () => isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;
 
  const timeHandler = () => {
    if (!nIntervId.current) {
      nIntervId.current = setInterval(() => {
        //console.log("aparece");
        playNote2(currentInterval.note2);
        clearInterval(nIntervId.current);
        nIntervId.current = null;
  
      }, 1000);

    } else {
      clearInterval(nIntervId.current);
      nIntervId.current = null;
    }
  };

  const playNotes = ()=>{
    playNote1(currentInterval.note1);
    timeHandler();
  };

  const showNextIntervalAnswer_temp = ()=>{

    if (index < intervals.length-1) {
      setIndex(value=>value + 1);
      indexRef.current = indexRef.current + 1;
    } else {
      setIndex(0);
      indexRef.current = 0;
    }
    setCurrentInterval(intervals[indexRef.current]);
    console.log(indexRef.current+1 + " / " + intervals.length, intervals[indexRef.current].note2WithLetters);

  };

  const restartIntervals = () => {
    intervalRef.current = unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, configurationRef.current));
    setIndex(0);
    indexRef.current = 0;
    setCurrentInterval(intervals[indexRef.current]);
  };


  useEffect(() => {
    //console.log(filteredEasyIntervals(completeEasyIntervals, easyIntervalsConfiguration));
    //filteredEasyIntervals(completeEasyIntervals, easyIntervalsConfiguration);
    //const a = [1,2,3,4,5];
    //console.log(unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, easyIntervalsConfiguration)));
    setCurrentInterval(intervals[0]);
    console.log(indexRef.current+1 + " / " + intervals.length);
    
  }, [])
  

  return (
    <>
      <Navbar />
      <audio ref={audioRef1}></audio>
      <audio ref={audioRef2}></audio>
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
                 {/*    <MyEasyIntervalsButtons
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
                    /> */}
                    
                </div>
            </div>
            
              <div className="horizontal-block wide-fix">
                  <div className="wide-33">
        {/*             <div className="height-fix">
                       <my-button text="favorites"></my-button>
                    </div>
                    <div className="height-fix">
                       <MyButton text="play" actionOnClick={()=>playNotes(currentInterval)}></MyButton>
                    </div> */}
                  </div>
                  <div className="vertical block wide-66">
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
                  <div className="wide-33">
                  {/*   <my-button text="favorite"></my-button> */}
                  </div>
            </div>

          <div className="interval-buttons-container">
            <div className="interval-buttons">
              {/* <MyIntervalButtons  */}
              <My4GenericButtons 
                    height="80px" 
                    width="350px"
                    button1Config={{defaultActivation: false, toggle: false, actionOnClick: showNextIntervalAnswer_temp, text: "NEXT"}}
                    button2Config={{defaultActivation: false, toggle: false, actionOnClick: showModal, text: "config"}}
                    button4Config={{defaultActivation: false, toggle: false, actionOnClick: () => playNotes(currentInterval), text: "PLAY"}}
                    
                    /* button2Config={{defaultActivation: isSharpShowed, toggle: true, actionOnClick: updateIsSharpShowed, text: "\u{266f}"}}
                    button3Config={{defaultActivation: isFlatShowed, toggle: true, actionOnClick: updateIsFlatShowed, text: "\u{266d}"}}
                    button4Config={{defaultActivation: isNaturalShowed, toggle: true, actionOnClick: updateIsNaturalShowed, text: "natural"}} */
                    /* showNext={showNextIntervalAnswer_temp} 
                    isSharpShowed={isSharpShowed}
                    isSharpShowedAction={updateIsSharpShowed} 
                    isFlatShowed={isFlatShowed}
                    isFlatShowedAction={updateIsFlatShowed}
                    isNaturalShowed={isNaturalShowed}
                    isNaturalShowedAction={updateIsNaturalShowed}*/
                    />
              
         {/*      <MyIntervalButtons3  */}
              <My4GenericButtons 
                    height="80px" 
                    width="350px" 
                    button1Config={{defaultActivation: isShowingModePressed, toggle: true, actionOnClick: updateIsShowingModePressed, text: "mode"}}
                    button2Config={{defaultActivation: isSemitonesToggleSelected, toggle: true, actionOnClick: updateIsSemitonesToggleSelected, text: "pk / st"}}
                   /*  button3Config={{defaultActivation: isPlusShowed, toggle: true, actionOnClick: updateIsPlusShowed, text: "+"}}
                    button4Config={{defaultActivation: isMinusShowed, toggle: true, actionOnClick: updateIsMinusShowed, text: "-"}} */
/*                     isShowingModePressed={isShowingModePressed}
                    isShowingModePressedAction={updateIsShowingModePressed}
                    isSemitonesToggleSelected={isSemitonesToggleSelected}
                    isSemitonesToggleSelectedAction={updateIsSemitonesToggleSelected}
                    isPlusShowed={isPlusShowed}
                    isPlusShowedAction={updateIsPlusShowed} 
                    isMinusShowed={isMinusShowed}
                    isMinusShowedAction={updateIsMinusShowed}  */
              />

            </div>
          </div>

          <MyKeyboard notes={[currentInterval.note1, currentInterval.note2]}></MyKeyboard>
        </div>
      </div>
      <MyEasyIntervalsConfigurationModal 
          visible={isVisibleModal} 
          configuration={configuration} 
          updateConfiguration={updateConfiguration} 
          actionOnHide={hideModal} 
      />
    </>
  );
};

