const basicNotes = [
  {numericNote: "do4", textNote: "do", offset: 0},
  {numericNote: "dos4", textNote: "do\u{266f}", offset: 1},
  {numericNote: "reb4", textNote: "re\u{266d}", offset: 1},
  {numericNote: "re4", textNote: "re", offset: 2},
  {numericNote: "res4", textNote: "re\u{266f}", offset: 3},
  {numericNote: "mib4", textNote: "mi\u{266d}", offset: 3},
  {numericNote: "mi4", textNote: "mi", offset: 4},
  {numericNote: "fa4", textNote: "fa", offset: 5},
  {numericNote: "fas4", textNote: "fa\u{266f}", offset: 6},
  {numericNote: "solb4", textNote: "sol\u{266d}", offset: 6},
  {numericNote: "sol4", textNote: "sol", offset: 7},
  {numericNote: "sols4", textNote: "sol\u{266f}", offset: 8},
  {numericNote: "lab4", textNote: "la\u{266d}", offset: 8},
  {numericNote: "la4", textNote: "la", offset: 9},
  {numericNote: "las4", textNote: "la\u{266f}", offset: 10},
  {numericNote: "sib4", textNote: "si\u{266d}", offset: 10},
  {numericNote: "si4", textNote: "si", offset: 11},
  {numericNote: "do5", textNote: "DO", offset: 12},
  {numericNote: "dos5", textNote: "DO\u{266f}", offset: 13},
  {numericNote: "reb5", textNote: "RE\u{266d}", offset: 13},
  {numericNote: "re5", textNote: "RE", offset: 14},
  {numericNote: "res5", textNote: "RE\u{266f}", offset: 15},
  {numericNote: "mib5", textNote: "MI\u{266d}", offset: 15},
  {numericNote: "mi5", textNote: "MI", offset: 16},
  {numericNote: "fa5", textNote: "FA", offset: 17},
  {numericNote: "fas5", textNote: "FA\u{266f}", offset: 18},
  {numericNote: "solb5", textNote: "SOL\u{266d}", offset: 18},
  {numericNote: "sol5", textNote: "SOL", offset: 19},
  {numericNote: "sols5", textNote: "SOL\u{266f}", offset: 20},
  {numericNote: "lab5", textNote: "LA\u{266d}", offset: 20},
  {numericNote: "la5", textNote: "LA", offset: 21},
  {numericNote: "las5", textNote: "LA\u{266f}", offset: 22},
  {numericNote: "sib5", textNote: "SI\u{266d}", offset: 22},
  {numericNote: "si5", textNote: "SI", offset: 23},
  ];
  
  const isThereSomeSharp = (note1, note2) => note1.includes('\u{266f}') || note2.includes('\u{266f}');

  const isThereSomeFlat = (note1, note2) => note1.includes('\u{266d}') || note2.includes('\u{266d}');
  
  export const createEasyIntervals = () => {
    const result = [];
    for (let index=0; index<17; index++){
      for (let i=0; i<basicNotes.length; i++){
        const resta = basicNotes[i].offset - basicNotes[index].offset
        const sharp = isThereSomeSharp(basicNotes[i].textNote, basicNotes[index].textNote);
        const flat = isThereSomeFlat(basicNotes[i].textNote, basicNotes[index].textNote);
        const natural = !sharp && !flat;
        if ((resta > 0) && (resta<13)) {
          result.push({
            note1: basicNotes[index].numericNote,
            note2: basicNotes[i].numericNote, 
            note1WithoutNumber: basicNotes[index].textNote,
            note2WithoutNumber: basicNotes[i].textNote,
            textNote: `${basicNotes[index].textNote} - ${basicNotes[i].textNote}`, 
            sharp: sharp, 
            flat: flat, 
            natural: natural, 
            direction: "+", 
            semitones: resta, 
            keysInBetween: resta-1
          });
          result.push({
            note1: basicNotes[i].numericNote, 
            note2: basicNotes[index].numericNote,
            note1WithoutNumber: basicNotes[i].textNote,
            note2WithoutNumber: basicNotes[index].textNote,
            textNote: `${basicNotes[i].textNote} - ${basicNotes[index].textNote}`, 
            sharp: sharp, 
            flat: flat, 
            natural: natural, 
            direction: "-", 
            semitones: resta, 
            keysInBetween: resta-1
          });
        }
      };
    };

    return result;
  }
  



export const getEasyIntervals = (completeIntervals, notes)=>{
  //notes será un array de notas (o un set)
  const tempIntervals = completeIntervals.filter((interval)=>notes.includes(interval.note1));
  return tempIntervals;
}