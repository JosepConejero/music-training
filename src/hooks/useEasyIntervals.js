import { useEffect, useState } from "react";
//import { randomEasyInterval } from "../pagesHelpers/random-easy-interval";


export const useEasyIntervals = (initialEasyIntervals) => {
    
    //const filteredNotesRef = useRef([{noteUp: "do", noteDown: "DO"}]);
    
    const [currentInterval, setCurrentInterval] = useState(initialEasyIntervals[4]); ////
   // const [intervalsSelection, setIntervalsSelection] = useState([]);
    
    const [isSolutionShowed, setIsSolutionShowed] = useState(false);
    const [isShowingModePressed, setIsShowingModePressed] = useState(false);
    const [isSemitonesToggleSelected, setIsSemitonesToggleSelected] = useState(false);
    const updateIsShowingModePressed = ()=>{ setIsShowingModePressed((prevState => !prevState))};
    const updateIsSemitonesToggleSelected = ()=>{ setIsSemitonesToggleSelected((prevState => !prevState))};
    
    const showSolution = ()=>{ setIsSolutionShowed((prevState => !prevState))};
    
/*     const [isSharpShowed, setIsSharpShowed] = useState(false);
    const [isFlatShowed, setIsFlatShowed] = useState(false);
    const [isNaturalShowed, setIsNaturalShowed] = useState(true);
    const [isPlusShowed, setIsPlusShowed] = useState(true);
    const [isMinusShowed, setIsMinusShowed] = useState(false);
    
    const [isDoShowed, setIsDoShowed] = useState(true); 
    const [isDosShowed, setIsDosShowed] = useState(false); 
    const [isRebShowed, setIsRebShowed] = useState(false); 
    const [isReShowed, setIsReShowed] = useState(false); 
    const [isResShowed, setIsResShowed] = useState(false); 
    const [isMibShowed, setIsMibShowed] = useState(false); 
    const [isMiShowed, setIsMiShowed] = useState(false); 
    const [isFaShowed, setIsFaShowed] = useState(false); 
    const [isFasShowed, setIsFasShowed] = useState(false); 
    const [isSolbShowed, setIsSolbShowed] = useState(false); 
    const [isSolShowed, setIsSolShowed] = useState(false); 
    const [isSolsShowed, setIsSolsShowed] = useState(false); 
    const [isLabShowed, setIsLabShowed] = useState(false); 
    const [isLaShowed, setIsLaShowed] = useState(false); 
    const [isLasShowed, setIsLasShowed] = useState(false); 
    const [isSibShowed, setIsSibShowed] = useState(false); 
    const [isSiShowed, setIsSiShowed] = useState(false); 

    const [isDoBlocked, setIsDoBlocked] = useState(true);
    const [isDosBlocked, setIsDosBlocked] = useState(false);
    const [isRebBlocked, setIsRebBlocked] = useState(false); 
    const [isReBlocked, setIsReBlocked] = useState(false); 
    const [isResBlocked, setIsResBlocked] = useState(false); 
    const [isMibBlocked, setIsMibBlocked] = useState(false); 
    const [isMiBlocked, setIsMiBlocked] = useState(false); 
    const [isFaBlocked, setIsFaBlocked] = useState(false); 
    const [isFasBlocked, setIsFasBlocked] = useState(false); 
    const [isSolbBlocked, setIsSolbBlocked] = useState(false); 
    const [isSolBlocked, setIsSolBlocked] = useState(false); 
    const [isSolsBlocked, setIsSolsBlocked] = useState(false); 
    const [isLabBlocked, setIsLabBlocked] = useState(false); 
    const [isLaBlocked, setIsLaBlocked] = useState(false); 
    const [isLasBlocked, setIsLasBlocked] = useState(false); 
    const [isSibBlocked, setIsSibBlocked] = useState(false); 
    const [isSiBlocked, setIsSiBlocked] = useState(false); 

    const updateIsSharpShowed = ()=>{ setIsSharpShowed((prevState)=>!prevState); }
    const updateIsFlatShowed = ()=>{ setIsFlatShowed((prevState => !prevState))};
    const updateIsNaturalShowed = ()=>{ setIsNaturalShowed((prevState => !prevState))}; 
    const updateIsPlusShowed = ()=>{ setIsPlusShowed((prevState => !prevState))};
    const updateIsMinusShowed = ()=>{ setIsMinusShowed((prevState => !prevState))};
    
    const updateIsDoShowed = ()=>{ setIsDoShowed((prevState => !prevState))};
    const updateIsDosShowed = ()=>{ setIsDosShowed((prevState => !prevState))};
    const updateIsRebShowed = ()=>{ setIsRebShowed((prevState => !prevState))};
    const updateIsReShowed = ()=>{ setIsReShowed((prevState => !prevState))};
    const updateIsResShowed = ()=>{ setIsResShowed((prevState => !prevState))};
    const updateIsMibShowed = ()=>{ setIsMibShowed((prevState => !prevState))};
    const updateIsMiShowed = ()=>{ setIsMiShowed((prevState => !prevState))};
    const updateIsFaShowed = ()=>{ setIsFaShowed((prevState => !prevState))};
    const updateIsFasShowed = ()=>{ setIsFasShowed((prevState => !prevState))};
    const updateIsSolbShowed = ()=>{ setIsSolbShowed((prevState => !prevState))};
    const updateIsSolShowed = ()=>{ setIsSolShowed((prevState => !prevState))};
    const updateIsSolsShowed = ()=>{ setIsSolsShowed((prevState => !prevState))};
    const updateIsLabShowed = ()=>{ setIsLabShowed((prevState => !prevState))};
    const updateIsLaShowed = ()=>{ setIsLaShowed((prevState => !prevState))};
    const updateIsLasShowed = ()=>{ setIsLasShowed((prevState => !prevState))};
    const updateIsSibShowed = ()=>{ setIsSibShowed((prevState => !prevState))};
    const updateIsSiShowed = ()=>{ setIsSiShowed((prevState => !prevState))};
    */

    /* const getIntervalsByNotes = (allintervals, notes)=>{ //notes ==> [{noteUp: "do", noteDown: "DO"},{....}]
        if (notes.length === 0) return [];

        let intervalsSelection = [];
        intervalsSelection = allintervals.filter((interval)=> {
            let result = false;
            notes.forEach((pair)=>{
                if (pair.noteUp === interval.note1WithoutNumber || pair.noteDown === interval.note1WithoutNumber) result = true;
              })
            return result;
          });
        return intervalsSelection;
      } */
    
    /* const showNextIntervalAnswer = () => {
        if (!isSharpShowed && !isFlatShowed && !isNaturalShowed) return;
        if (!isPlusShowed && !isMinusShowed) return;
        if (intervalsSelection.length===0) return;

        setCurrentInterval(randomEasyInterval(intervalsSelection, currentInterval, 
                                              isSharpShowed, isFlatShowed, isNaturalShowed, 
                                              isPlusShowed, isMinusShowed)); 
    }; */

    /* const updateIsDoShowedAction = ()=> {
        if (isDoShowed) {
            const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "do" && nota.noteDown === "DO");
            if (index !== -1) filteredNotesRef.current.splice(index, 1);
            setIsDoShowed(false);
        }
        else {
            filteredNotesRef.current.push({noteUp: "do", noteDown: "DO"});
            setIsDoShowed(true);
        };
        setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
    };

  const updateIsDosShowedAction = ()=>{
    if (isDosShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "do\u{266f}" && nota.noteDown === "DO\u{266f}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsDosShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "do\u{266f}", noteDown: "DO\u{266f}"});
        setIsDosShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsRebShowedAction = ()=>{
    if (isRebShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "re\u{266d}" && nota.noteDown === "RE\u{266d}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsRebShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "re\u{266d}", noteDown: "RE\u{266d}"});
        setIsRebShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsReShowedAction = ()=>{
    if (isReShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "re" && nota.noteDown === "RE");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsReShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "re", noteDown: "RE"});
        setIsReShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

      const updateIsResShowedAction = ()=>{
    if (isResShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "re\u{266f}" && nota.noteDown === "RE\u{266f}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsResShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "re\u{266f}", noteDown: "RE\u{266f}"});
        setIsResShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsMibShowedAction = ()=>{
    if (isMibShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "mi\u{266d}" && nota.noteDown === "MI\u{266d}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsMibShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "mi\u{266d}", noteDown: "MI\u{266d}"});
        setIsMibShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsMiShowedAction = ()=>{
    if (isMiShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "mi" && nota.noteDown === "MI");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsMiShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "mi", noteDown: "MI"});
        setIsMiShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsFaShowedAction = ()=>{
    if (isFaShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "fa" && nota.noteDown === "FA");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsFaShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "fa", noteDown: "FA"});
        setIsFaShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsFasShowedAction = ()=>{
    if (isFasShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "fa\u{266f}" && nota.noteDown === "FA\u{266f}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsFasShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "fa\u{266f}", noteDown: "FA\u{266f}"});
        setIsFasShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsSolbShowedAction = ()=>{
    if (isSolbShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "sol\u{266d}" && nota.noteDown === "SOL\u{266d}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsSolbShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "sol\u{266d}", noteDown: "SOL\u{266d}"});
        setIsSolbShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsSolShowedAction = ()=>{
    if (isSolShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "sol" && nota.noteDown === "SOL");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsSolShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "sol", noteDown: "SOL"});
        setIsSolShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsSolsShowedAction = ()=>{
    if (isSolsShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "sol\u{266f}" && nota.noteDown === "SOL\u{266f}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsSolsShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "sol\u{266f}", noteDown: "SOL\u{266f}"});
        setIsSolsShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsLabShowedAction = ()=>{
    if (isLabShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "la\u{266d}" && nota.noteDown === "LA\u{266d}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsLabShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "la\u{266d}", noteDown: "LA\u{266d}"});
        setIsLabShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsLaShowedAction = ()=>{
    if (isLaShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "la" && nota.noteDown === "LA");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsLaShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "la", noteDown: "LA"});
        setIsLaShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsLasShowedAction = ()=>{
    if (isLasShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "la\u{266f}" && nota.noteDown === "LA\u{266f}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsLasShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "la\u{266f}", noteDown: "LA\u{266f}"});
        setIsLasShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsSibShowedAction = ()=>{
    if (isSibShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "si\u{266d}" && nota.noteDown === "SI\u{266d}");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsSibShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "si\u{266d}", noteDown: "SI\u{266d}"});
        setIsSibShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   }

   const updateIsSiShowedAction = ()=>{
    if (isSiShowed) {
        const index = filteredNotesRef.current.findIndex(nota => nota.noteUp === "si" && nota.noteDown === "SI");
        if (index !== -1) filteredNotesRef.current.splice(index, 1);
        setIsSiShowed(false);
    }
    else {
        filteredNotesRef.current.push({noteUp: "si", noteDown: "SI"});
        setIsSiShowed(true);
    };
    setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, filteredNotesRef.current));
   } */

   useEffect(() => {
    //setIntervalsSelection(getIntervalsByNotes(initialEasyIntervals, [{noteUp: "do", noteDown: "DO"}]));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

    return {
        currentInterval,
        setCurrentInterval,
        //intervalsSelection,
        //setIntervalsSelection,
        isSolutionShowed, //setIsSolutionShowed,
        isShowingModePressed, //setIsShowingModePressed,
        isSemitonesToggleSelected, //setIsSemitonesToggleSelected,
        showSolution,
        updateIsShowingModePressed,
        updateIsSemitonesToggleSelected,
        // showNextIntervalAnswer,
        
     /* isSharpShowed, setIsSharpShowed,
        isFlatShowed, setIsFlatShowed,
        isNaturalShowed, setIsNaturalShowed,
        isPlusShowed, setIsPlusShowed,
        isMinusShowed, setIsMinusShowed,
        updateIsSharpShowed,
        updateIsFlatShowed,
        updateIsNaturalShowed,
        updateIsPlusShowed,
        updateIsMinusShowed,
        isDoShowed, setIsDoShowed,
        isDosShowed, setIsDosShowed,
        isRebShowed, setIsRebShowed,
        isReShowed, setIsReShowed,
        isResShowed, setIsResShowed,
        isMibShowed, setIsMibShowed,
        isMiShowed, setIsMiShowed,
        isFaShowed, setIsFaShowed,
        isFasShowed, setIsFasShowed,
        isSolbShowed, setIsSolbShowed,
        isSolShowed, setIsSolShowed,
        isSolsShowed, setIsSolsShowed,
        isLaShowed, setIsLaShowed,
        isLabShowed, setIsLabShowed,
        isLasShowed, setIsLasShowed,
        isSibShowed, setIsSibShowed,
        isSiShowed, setIsSiShowed,
        updateIsDoShowed,
        updateIsDosShowed,
        updateIsRebShowed,
        updateIsReShowed,
        updateIsResShowed,
        updateIsMibShowed,
        updateIsMiShowed,
        updateIsFaShowed,
        updateIsFasShowed,
        updateIsSolbShowed,
        updateIsSolShowed,
        updateIsSolsShowed,
        updateIsLabShowed,
        updateIsLaShowed,
        updateIsLasShowed,
        updateIsSibShowed,
        updateIsSiShowed,
        isDoBlocked, setIsDoBlocked,
        isDosBlocked, setIsDosBlocked,
        isRebBlocked, setIsRebBlocked,
        isReBlocked, setIsReBlocked,
        isResBlocked, setIsResBlocked,
        isMibBlocked, setIsMibBlocked,
        isMiBlocked, setIsMiBlocked,
        isFaBlocked, setIsFaBlocked,
        isFasBlocked, setIsFasBlocked,
        isSolbBlocked, setIsSolbBlocked,
        isSolBlocked, setIsSolBlocked,
        isSolsBlocked, setIsSolsBlocked,
        isLaBlocked, setIsLaBlocked,
        isLabBlocked, setIsLabBlocked,
        isLasBlocked, setIsLasBlocked,
        isSiBlocked, setIsSiBlocked,
        isSibBlocked, setIsSibBlocked,
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
        updateIsSiShowedAction, */
    }
}

