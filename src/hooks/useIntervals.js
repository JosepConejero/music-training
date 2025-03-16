/* import { useEffect, useState, useRef } from "react";
import { useAudio } from "../hooks/useAudio";
import { filteredEasyIntervals, unsortedIntervals } from "../pagesHelpers/easy-intervals-configuration";
import { completeEasyIntervals } from "../pagesHelpers/complete-easy-intervals";
 */

export const useIntervals = (initialIntervals, configuration) => {
 /*  const [currentInterval, setCurrentInterval] = useState(initialIntervals[0]);

  const [isSolutionShowed, setIsSolutionShowed] = useState(false);
  const [isShowingModePressed, setIsShowingModePressed] = useState(false);
  const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(false);

  const updateIsShowingModePressed = ()=>{ setIsShowingModePressed((prevState => !prevState))};
  const updateIsSemitonesToggleSelected = ()=>{ setIsSemitonesToggleSelected((prevState => !prevState))};
  const showSolution = ()=>{ setIsSolutionShowed((prevState => !prevState))};

  //const intervalRef = useRef(unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, configuration)));
  const [intervals, setIntervals] = useState(initialIntervals);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const nIntervId = useRef();

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
    initialIntervals = unsortedIntervals(filteredEasyIntervals(completeEasyIntervals, configuration)); // esto igual se ha de poner de otra forma, con setIntervals a lo mejor
    setIndex(0);
    indexRef.current = 0;
    setCurrentInterval(intervals[indexRef.current]);
  };

  useEffect(() => {
    setCurrentInterval(intervals[0]);
  }, []) */  

  return {
 /*    currentInterval,
    setCurrentInterval,
    isSolutionShowed,
    isShowingModePressed,
    isSemitonesToggleSelected,
    showSolution,
    updateIsShowingModePressed,
    updateIsSemitonesToggleSelected,

    setNumberInterval,
    playNotes,
    showNextIntervalAnswer,
    audioRef1, audioRef2,
    indexRef,
    intervals, */

  }
}
