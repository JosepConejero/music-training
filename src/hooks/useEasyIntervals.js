import { useEffect, useRef, useState } from "react";
import { randomEasyInterval } from "../pagesHelpers/random-easy-interval";


export const useEasyIntervals = (initialEasyIntervals) => {
    
    
    const filteredNotesRef = useRef([{noteUp: "do", noteDown: "DO"}]);

    const [currentInterval, setCurrentInterval] = useState(initialEasyIntervals[4]); 
    const [intervalsSelection, setIntervalsSelection] = useState([]);
    
    const [isSharpShowed, setIsSharpShowed] = useState(false);
    const [isFlatShowed, setIsFlatShowed] = useState(false);
    const [isNaturalShowed, setIsNaturalShowed] = useState(true);
    const [isSolutionShowed, setIsSolutionShowed] = useState(false);
    const [isShowingModePressed, setIsShowingModePressed] = useState(false);
    const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(false);
    const [isPlusShowed, setIsPlusShowed] = useState(true);
    const [isMinusShowed, setIsMinusShowed] = useState(false);
    
    const [isDoShowed, setIsDoShowed] = useState(true); 
    const [isDosShowed, setIsDosShowed] = useState(false); 
    const [isReShowed, setIsReShowed] = useState(false); 
    const [isResShowed, setIsResShowed] = useState(false); 
    const [isMiShowed, setIsMiShowed] = useState(false); 
    const [isFaShowed, setIsFaShowed] = useState(false); 
    const [isFasShowed, setIsFasShowed] = useState(false); 
    const [isSolShowed, setIsSolShowed] = useState(false); 
    const [isSolsShowed, setIsSolsShowed] = useState(false); 
    const [isLaShowed, setIsLaShowed] = useState(false); 
    const [isLasShowed, setIsLasShowed] = useState(false); 
    const [isSiShowed, setIsSiShowed] = useState(false); 

    const [isDoBlocked, setIsDoBlocked] = useState(true);
    const [isDosBlocked, setIsDosBlocked] = useState(false);
    const [isReBlocked, setIsReBlocked] = useState(false); 
    const [isResBlocked, setIsResBlocked] = useState(false); 
    const [isMiBlocked, setIsMiBlocked] = useState(false); 
    const [isFaBlocked, setIsFaBlocked] = useState(false); 
    const [isFasBlocked, setIsFasBlocked] = useState(false); 
    const [isSolBlocked, setIsSolBlocked] = useState(false); 
    const [isSolsBlocked, setIsSolsBlocked] = useState(false); 
    const [isLaBlocked, setIsLaBlocked] = useState(false); 
    const [isLasBlocked, setIsLasBlocked] = useState(false); 
    const [isSiBlocked, setIsSiBlocked] = useState(false); 

    const updateIsSharpShowed = ()=>{ setIsSharpShowed((prevState)=>!prevState); }
    const updateIsFlatShowed = ()=>{ setIsFlatShowed((prevState => !prevState))};
    const updateIsNaturalShowed = ()=>{ setIsNaturalShowed((prevState => !prevState))};
    const showSolution = ()=>{ setIsSolutionShowed((prevState => !prevState))};
    const updateIsShowingModePressed = ()=>{ setIsShowingModePressed((prevState => !prevState))};
    const updateIsSemitonesToggleSelected = ()=>{ setIsSemitonesToggleSelected((prevState => !prevState))};
    const updateIsPlusShowed = ()=>{ setIsPlusShowed((prevState => !prevState))};
    const updateIsMinusShowed = ()=>{ setIsMinusShowed((prevState => !prevState))};

    const updateIsDoShowed = ()=>{ setIsDoShowed((prevState => !prevState))};
    const updateIsDosShowed = ()=>{ setIsDosShowed((prevState => !prevState))};
    const updateIsReShowed = ()=>{ setIsReShowed((prevState => !prevState))};
    const updateIsResShowed = ()=>{ setIsResShowed((prevState => !prevState))};
    const updateIsMiShowed = ()=>{ setIsMiShowed((prevState => !prevState))};
    const updateIsFaShowed = ()=>{ setIsFaShowed((prevState => !prevState))};
    const updateIsFasShowed = ()=>{ setIsFasShowed((prevState => !prevState))};
    const updateIsSolShowed = ()=>{ setIsSolShowed((prevState => !prevState))};
    const updateIsSolsShowed = ()=>{ setIsSolsShowed((prevState => !prevState))};
    const updateIsLaShowed = ()=>{ setIsLaShowed((prevState => !prevState))};
    const updateIsLasShowed = ()=>{ setIsLasShowed((prevState => !prevState))};
    const updateIsSiShowed = ()=>{ setIsSiShowed((prevState => !prevState))};

    const getIntervalsByNotes = (allintervals, notes)=>{ //notes ==> [{noteUp: "do", noteDown: "DO"},{....}]
        let intervalsSelection = [];
        intervalsSelection = allintervals.filter((interval)=> {
            let result = false;
            notes.forEach((pair)=>{
                if (pair.noteUp === interval.note1WithoutNumber || pair.noteDown === interval.note1WithoutNumber) result = true;
              })
            return result;
          });
          console.log(intervalsSelection);
        return intervalsSelection;
      }
    
    const showNextIntervalAnswer = () => {
        setCurrentInterval(randomEasyInterval(intervalsSelection, isSharpShowed, isFlatShowed, isNaturalShowed, isPlusShowed, isMinusShowed)); 
    };

    const updateisDoShowedAction = ()=> {
        if (isDoShowed) {
            const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "do" && nota.noteDown === "DO");
            if (index !== -1) filteredNotesRef.current.splice(index, 1);
            setIsDoShowed(false);
        }
        else {
            filteredNotesRef.current.push({noteUp: "do", noteDown: "DO"});
            setIsDoShowed(true);
        };
        //filteredNotesRef.current.push({noteUp: "do", noteDown: "DO"});
        setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
        console.log(filteredNotesRef.current);
    };

  const updateisDosShowedAction = ()=>{
    if (isDosShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "do\u{266f}" && nota.noteDown === "DO\u{266f}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsDosShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "do\u{266f}", noteDown: "DO\u{266f}"});
        setIsDosShowed(true);
    };

    //setIntervalsSelection(filteredNotesRef.current);
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
    console.log(filteredNotesRef.current);
   }

   const updateisReShowedAction = ()=>{
    if (isReShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "re" && nota.noteDown === "RE");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsReShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "re", noteDown: "RE"});
        setIsReShowed(true);
    };
    
    //setIntervalsSelection(filteredNotesRef.current);
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
    console.log(filteredNotesRef.current);
   }



   useEffect(() => {
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, [{noteUp: "do", noteDown: "DO"}]));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

    return {
        currentInterval,
        setCurrentInterval,
        intervalsSelection,
        setIntervalsSelection,
        isSharpShowed, setIsSharpShowed,
        isFlatShowed, setIsFlatShowed,
        isNaturalShowed, setIsNaturalShowed,
        isSolutionShowed, setIsSolutionShowed,
        isShowingModePressed, setIsShowingModePressed,
        isSemitonesToggleSelected, setIsSemitonesToggleSelected,
        isPlusShowed, setIsPlusShowed,
        isMinusShowed, setIsMinusShowed,
        updateIsSharpShowed,
        updateIsFlatShowed,
        updateIsNaturalShowed,
        showSolution,
        updateIsShowingModePressed,
        updateIsSemitonesToggleSelected,
        updateIsPlusShowed,
        updateIsMinusShowed,
        isDoShowed, setIsDoShowed,
        isDosShowed, setIsDosShowed,
        isReShowed, setIsReShowed,
        isResShowed, setIsResShowed,
        isMiShowed, setIsMiShowed,
        isFaShowed, setIsFaShowed,
        isFasShowed, setIsFasShowed,
        isSolShowed, setIsSolShowed,
        isSolsShowed, setIsSolsShowed,
        isLaShowed, setIsLaShowed,
        isLasShowed, setIsLasShowed,
        isSiShowed, setIsSiShowed,
        updateIsDoShowed,
        updateIsDosShowed,
        updateIsReShowed,
        updateIsResShowed,
        updateIsMiShowed,
        updateIsFaShowed,
        updateIsFasShowed,
        updateIsSolShowed,
        updateIsSolsShowed,
        updateIsLaShowed,
        updateIsLasShowed,
        updateIsSiShowed,
        isDoBlocked, setIsDoBlocked,
        isDosBlocked, setIsDosBlocked,
        isReBlocked, setIsReBlocked,
        isResBlocked, setIsResBlocked,
        isMiBlocked, setIsMiBlocked,
        isFaBlocked, setIsFaBlocked,
        isFasBlocked, setIsFasBlocked,
        isSolBlocked, setIsSolBlocked,
        isSolsBlocked, setIsSolsBlocked,
        isLaBlocked, setIsLaBlocked,
        isLasBlocked, setIsLasBlocked,
        isSiBlocked, setIsSiBlocked,
        updateisDoShowedAction,
        updateisDosShowedAction,
        updateisReShowedAction,

        showNextIntervalAnswer,
    }
}






/* const {value: isSharpShowed, updateToggleValue: updateIsSharpShowed} = useToggleValue(false);
const {value: isFlatShowed, updateToggleValue: updateIsFlatShowed} = useToggleValue(false);
const {value: isNaturalShowed, updateToggleValue: updateIsNaturalShowed} = useToggleValue(true);
const {value: isSolutionShowed, updateToggleValue: showSolution} = useToggleValue(false);
const {value: isShowingModePressed, updateToggleValue: updateIsShowingModePressed} = useToggleValue(false);
const {value: isSemitonesToggleSelected, updateToggleValue: updateIsSemitonesToggleSelected} = useToggleValue(false);
const {value: isPlusShowed, updateToggleValue: updateIsPlusShowed} = useToggleValue(true);
const {value: isMinusShowed, updateToggleValue: updateIsMinusShowed} = useToggleValue(false); */


