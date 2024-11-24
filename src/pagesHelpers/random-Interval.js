import { isFlat } from "../staffHandlers/isFlat";
import { isSharp } from "../staffHandlers/isSharp";

export const randomInterval = (intervals, isSharpShowed, isFlatShowed, isLessThan8Showed) => {
    let randomElement;
    let hasSharpNotes, hasFlatNotes, IsMoreThan8Notes;
    const min = 0;
    const max = intervals.length; // Thus, it will include max value
  
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
  
    do {
      randomElement = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
      hasSharpNotes = isSharp(intervals[randomElement].note1) || isSharp(intervals[randomElement].note2);
      hasFlatNotes = isFlat(intervals[randomElement].note1) || isFlat(intervals[randomElement].note2);
      IsMoreThan8Notes = intervals[randomElement].moreThanOneOctave;
    } while ((!isSharpShowed && hasSharpNotes) || (!isFlatShowed && hasFlatNotes) || (isLessThan8Showed && IsMoreThan8Notes))
  
    return intervals[randomElement];
  };