/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import "./pages.css";
import { MyIntervals } from "../lit-react-components/MyIntervals";
import { MyKeyboard } from "../lit-react-components/MyKeyboard";
import { easyIntervalsConfiguration, filteredEasyIntervals, unsortedIntervals, isConfigurationRight } from "../pagesHelpers/easy-intervals-configuration";
import { My4GenericButtons } from "../lit-react-components/My4GenericButtons";
import { useConfigurationModal } from "../hooks/useConfigurationModal";
import { MyEasyIntervalsConfigurationModal } from "../lit-react-components/MyEasyIntervalsConfigurationModal";
import { completeEasyIntervals } from "../pagesHelpers/complete-easy-intervals";
import { useAudio } from "../hooks/useAudio";

export const EasyIntervalsPage = () => {

  const { configuration, oldConfiguration, configurationRef, isVisibleModal, 
          updateConfiguration, hideModalWithUpdade, hideModalWithoutUpdade, 
          showModal } = useConfigurationModal(easyIntervalsConfiguration, isConfigurationRight);
         
  const intervalsRef = useRef(unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, configurationRef.current)));
  const [intervals, setIntervals] = useState(intervalsRef.current);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const nIntervId = useRef();
  const [currentInterval, setCurrentInterval] = useState(intervalsRef.current[0]);

  const [isSolutionShowed, setIsSolutionShowed] = useState(false);
  const [isShowingModePressed, setIsShowingModePressed] = useState(false);
  const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(false);

  const updateIsShowingModePressed = ()=>{ setIsShowingModePressed((prevState => !prevState))};
  const updateIsSemitonesToggleSelected = ()=>{ setIsSemitonesToggleSelected((prevState => !prevState))};
  const showSolution = ()=>{ setIsSolutionShowed((prevState => !prevState))};


  const {audioRef: audioRef1, playNote: playNote1} = useAudio();
  const {audioRef: audioRef2, playNote: playNote2} = useAudio();

  const setNumberInterval = () => isSemitonesToggleSelected ? currentInterval.semitones : currentInterval.keysInBetween;
  
  const timeHandler = () => {
    if (!nIntervId.current) {
      nIntervId.current = setInterval(() => {
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

  const showNextIntervalAnswer = ()=>{
    if (index < intervals.length-1) {
      setIndex(value=>value + 1);
      indexRef.current = indexRef.current + 1;
    } else {
      setIndex(0);
      indexRef.current = 0;
    }
    setCurrentInterval(intervals[indexRef.current]);
  };

  const restartIntervals = () => {
    const intervalsRef = unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, configuration));
    setIntervals(intervalsRef);
    setIndex(0);
    indexRef.current = 0;
    setCurrentInterval(intervalsRef[indexRef.current]);
  };

  useEffect(() => {
    setCurrentInterval(intervals[0]);
  }, [])        

  useEffect(() => {
    if (JSON.stringify(configuration)!==JSON.stringify(oldConfiguration)) {
      //console.log("no son iguales");
      restartIntervals();
    }
  }, [configuration]) 
  

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

               {/*  <div className="horizontal-block">
                    
                </div> */}
            </div>
            
              <div className="horizontal-block wide-fix">
                  <div className="wide-33">
        {/*             <div className="height-fix">
                       <my-button text="favorites"></my-button>
                    </div>
                    <div className="height-fix">
                       <MyButton text="play" actionOnClick={()=>playNotes(currentInterval)}></MyButton>
                    </div> */}
                    <div className="interval-counter">{ indexRef.current+1 + " / " + intervals.length }</div>
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
              <My4GenericButtons 
                    height="80px" 
                    width="350px"
                    button1Config={{defaultActivation: false, toggle: false, actionOnClick: showNextIntervalAnswer, text: "NEXT"}}
                    button2Config={{defaultActivation: false, toggle: false, actionOnClick: showModal, text: "config"}}
                    button3Config={{defaultActivation: false, toggle: false, actionOnClick: restartIntervals, text: "reinic"}}
                    button4Config={{defaultActivation: false, toggle: false, actionOnClick: () => playNotes(currentInterval), text: "PLAY"}}
                    />
              
              <My4GenericButtons 
                    height="80px" 
                    width="350px" 
                    button1Config={{defaultActivation: isShowingModePressed, toggle: true, actionOnClick: updateIsShowingModePressed, text: "mode"}}
                    button2Config={{defaultActivation: isSemitonesToggleSelected, toggle: true, actionOnClick: updateIsSemitonesToggleSelected, text: "pk / st"}}
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
          actionOnHideWithUpdate={hideModalWithUpdade} 
          actionOnHideWithoutUpdate={hideModalWithoutUpdade} 
      />
    </>
  );
};

