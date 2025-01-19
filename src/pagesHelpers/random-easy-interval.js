import { isFlat } from "../staffHandlers/isFlat";
import { isNatural } from "../staffHandlers/isNatural";
import { isSharp } from "../staffHandlers/isSharp";

export const randomEasyInterval = (intervals, isSharpShowed, isFlatShowed, isNaturalShowed, isPlusShowed, isMinusShowed) => {
    let randomElement;
    let hasSharpNotes, hasFlatNotes, hasNaturalNotes, isPlusInterval, isMinusInterval;
    const min = 0;
    const max = intervals.length; // Thus, it will include max value
  
//¿COMPRUEBA AQUÍ QUE ISPLUS... Y ISMINUS... NO ESTÉN DESPULSADOS A LA VEZ?

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
  
    //aquí comprueba si isSharpShowed, isFlatShowed y isNaturalShowed están las tres a true, 
    // y entonces no entra en el do while y devuelve algo por defecto, p.e. el intervalo de la posición 3
    // lo mismo con isPlusShowed y isMinusShowed
    if (!isSharpShowed && !isFlatShowed && !isNaturalShowed) return intervals[3];
    if (!isPlusShowed && !isMinusShowed) return intervals[3];

    do {
      randomElement = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
      hasSharpNotes = isSharp(intervals[randomElement].note1) || isSharp(intervals[randomElement].note2);
      hasFlatNotes = isFlat(intervals[randomElement].note1) || isFlat(intervals[randomElement].note2);
      hasNaturalNotes = isNatural(intervals[randomElement].note1) || isNatural(intervals[randomElement].note2);
      isPlusInterval = intervals[randomElement].direction === '+';
      isMinusInterval = intervals[randomElement].direction === '-';
    } while ((!isSharpShowed && hasSharpNotes) || 
             (!isFlatShowed && hasFlatNotes) || 
             (!isNaturalShowed && hasNaturalNotes) || 
             (!isPlusShowed && isPlusInterval) ||
             (!isMinusShowed && isMinusInterval) )
  
    return intervals[randomElement];
  };