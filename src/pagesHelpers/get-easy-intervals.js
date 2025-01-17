/*
export const easyIntervals = [
{note1: "do4", note2: "dos4", textNote: "do - do#", flat: false, sharp: true, natural: true, direction: "+"},




];
*/

export const getEasyIntervals = (completeIntervals, notes)=>{
  //notes será un array de notas (o un set)
  const tempIntervals = completeIntervals.filter((interval)=>notes.includes(interval.note1));
  return tempIntervals;
}