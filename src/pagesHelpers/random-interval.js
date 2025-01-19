import { isFlat } from "../staffHandlers/isFlat";
import { isNatural } from "../staffHandlers/isNatural";
import { isSharp } from "../staffHandlers/isSharp";

export const randomInterval = (intervals, isSharpShowed, isFlatShowed, isNaturalShowed, isLessThan8Showed) => {
    let randomElement;
    let hasSharpNotes, hasFlatNotes, hasNaturalNotes, IsMoreThan8Notes;
    const min = 0;
    const max = intervals.length; // Thus, it will include max value
  
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
  
   //aquí comprueba si isSharpShowed, isFlatShowed y isNaturalShowed están las tres a true, 
   // y entonces no entra en el do while y devuelve algo por defecto, p.e. 486, que es do4 - re4
    if (!isSharpShowed && !isFlatShowed && !isNaturalShowed) return intervals[486];

    do {
      randomElement = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
      hasSharpNotes = isSharp(intervals[randomElement].note1) || isSharp(intervals[randomElement].note2);
      hasFlatNotes = isFlat(intervals[randomElement].note1) || isFlat(intervals[randomElement].note2);
      hasNaturalNotes = isNatural(intervals[randomElement].note1) || isNatural(intervals[randomElement].note2);
      IsMoreThan8Notes = intervals[randomElement].moreThanOneOctave;
    } while ((!isSharpShowed && hasSharpNotes) || 
             (!isFlatShowed && hasFlatNotes) || 
             (!isNaturalShowed && hasNaturalNotes) || 
             (isLessThan8Showed && IsMoreThan8Notes))
  
    return intervals[randomElement];
  };