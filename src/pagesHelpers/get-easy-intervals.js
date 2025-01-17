const basicNotes = [
  {numericNote: "do4", textNote: "do", offset: 0},
  {numericNote: "dos4", textNote: "do#", offset: 1},
  {numericNote: "reb4", textNote: "re€", offset: 1},
  {numericNote: "re4", textNote: "re", offset: 2},
  {numericNote: "res4", textNote: "re#", offset: 3},
  {numericNote: "mib4", textNote: "mi€", offset: 3},
  {numericNote: "mi4", textNote: "mi", offset: 4},
  {numericNote: "fa4", textNote: "fa", offset: 5},
  {numericNote: "fas4", textNote: "fa#", offset: 6},
  {numericNote: "solb4", textNote: "sol€", offset: 6},
  {numericNote: "sol4", textNote: "sol", offset: 7},
  {numericNote: "sols4", textNote: "sol#", offset: 8},
  {numericNote: "lab4", textNote: "la€", offset: 8},
  {numericNote: "la4", textNote: "la", offset: 9},
  {numericNote: "las4", textNote: "la#", offset: 10},
  {numericNote: "sib4", textNote: "si€", offset: 10},
  {numericNote: "si4", textNote: "si", offset: 11},
  {numericNote: "do5", textNote: "DO", offset: 12},
  {numericNote: "dos5", textNote: "DO#", offset: 13},
  {numericNote: "reb5", textNote: "RE€", offset: 13},
  {numericNote: "re5", textNote: "RE", offset: 14},
  {numericNote: "res5", textNote: "RE#", offset: 15},
  {numericNote: "mib5", textNote: "MI€", offset: 15},
  {numericNote: "mi5", textNote: "MI", offset: 16},
  {numericNote: "fa5", textNote: "FA", offset: 17},
  {numericNote: "fas5", textNote: "FA#", offset: 18},
  {numericNote: "solb5", textNote: "SOL€", offset: 18},
  {numericNote: "sol5", textNote: "SOL", offset: 19},
  {numericNote: "sols5", textNote: "SOL#", offset: 20},
  {numericNote: "lab5", textNote: "LA€", offset: 20},
  {numericNote: "la5", textNote: "LA", offset: 21},
  {numericNote: "las5", textNote: "LA#", offset: 22},
  {numericNote: "sib5", textNote: "SI€", offset: 22},
  {numericNote: "si5", textNote: "SI", offset: 23},
  ];
  
  const isThereSomeSharp = (note1, note2) => note1.includes('#') || note2.includes('#');
  const isThereSomeFlat = (note1, note2) => note1.includes('€') || note2.includes('€');
  
  export const createEasyIntervals = () => {
    const result = [];
    //const index = 3;
    for (let index=0; index<17; index++){
    for (let i=0; i<basicNotes.length; i++){
      const resta = basicNotes[i].offset - basicNotes[index].offset
      const sharp = isThereSomeSharp(basicNotes[i].textNote, basicNotes[index].textNote);
      const flat = isThereSomeFlat(basicNotes[i].textNote, basicNotes[index].textNote);
      const natural = !sharp && !flat;
      if ((resta > 0)&&(resta<13)) {
        result.push({
          note1: basicNotes[index].numericNote,
          note2: basicNotes[i].numericNote, 
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
          textNote: `${basicNotes[i].textNote} - ${basicNotes[index].textNote}`, 
          sharp: sharp, 
          flat: flat, 
          natural: natural, 
          direction: "-", 
          semitones: resta, 
          keysInBetween: resta-1
        });
      }
        
        
        //console.log(`{note1: "${basicNotes[index].numericNote}", note2: "${basicNotes[i].numericNote}", textNote: '${basicNotes[index].textNote} - ${basicNotes[i].textNote}', sharp: ${sharp}, flat: ${flat}, natural: ${natural}, direction: "+", semitones: ${resta}, keysInBetween: ${resta-1}`);
    };
  };
    return result;

  }
  



export const getEasyIntervals = (completeIntervals, notes)=>{
  //notes será un array de notas (o un set)
  const tempIntervals = completeIntervals.filter((interval)=>notes.includes(interval.note1));
  return tempIntervals;
}