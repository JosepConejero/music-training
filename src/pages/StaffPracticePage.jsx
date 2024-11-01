import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { StaffControls } from "../staffComponents/StaffControls";
import { complete_notes_distances } from "../staffHandlers/complete-notes-distances";
import "../lit-elements/my-staff";
import "../lit-elements/my-trumpet-pistons";
import "../staffComponents/staffStyles.css";
import { pistons } from "../staffHandlers/pistons";
import { graphicNotes } from "../staffHandlers/graphic-notes";


export const StaffPracticePage = () => {
  const notaInicial = "do4"; 
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [activeNote, setActiveNote] = useState(notaInicial);
  const activeNoteRef = useRef(notaInicial);
  const [isOneOctavePressed, setIsOneOctavePressed] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(2000);
  const speed = useRef(2000);
  const nIntervId = useRef();

  const getNote = (min, max) => {
    let randomNote;
    let isTheSameNote = false;
    let moreThanOneOctave = false;
    let currentNote = Object.keys(complete_notes_distances).indexOf(activeNoteRef.current);

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    do {
      randomNote = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
      //aquí empieza la comprobación de más de una octava
      // se restan los valores de las notas (valor numérico asignado a cada propiedad/nota) 
      // NO se resta el índice del array de keys 
      // es decir, sols5 y lab5 serían la misma nota y tendrían el mismo valor asociado en el objeto de complete_notes_distances
      
      const randomNoteValue = Object.values(complete_notes_distances)[randomNote];
      const currentNoteValue = Object.values(complete_notes_distances)[currentNote];

      const resta = Math.abs(Math.abs(randomNoteValue) - Math.abs(currentNoteValue));
      moreThanOneOctave = isOneOctavePressed && resta > 13; //si está pulsado el botón
      //aquí acaba la comprobación de más de una octava
      isTheSameNote = randomNote === currentNote;
    } while (isTheSameNote || moreThanOneOctave);

    return Object.keys(complete_notes_distances)[randomNote];
  };

  const updateNote = (newNote) => {
    setActiveNote(newNote);
    activeNoteRef.current = newNote;
  };

  const showNextNote = (min, max) => {
    updateNote(getNote(min, max));
  };

  const timeHandler = (min, max) => {
    if (!nIntervId.current) {
      nIntervId.current = setInterval(() => updateNote(getNote(min, max)), speed.current);
    } else {
      resetInterval();
    }
  };

  const setSpeed = (newSpeed) => {
    resetInterval();
    setCurrentSpeed(newSpeed);
    speed.current = newSpeed;
  };

const resetInterval = ()=>{
  clearInterval(nIntervId.current);
  nIntervId.current = null;
}

  const showAnswer = () => {
    setIsAnswerVisible((prevState) => !prevState);
  };

  const buttonHandlers = {
    isOneOctavePressed: isOneOctavePressed,
    setIsOneOctavePressed: setIsOneOctavePressed,
    showNextNote: showNextNote,
    setSpeed: setSpeed,
    timeHandler: timeHandler,
    showAnswer: showAnswer,
    isAnswerVisible: isAnswerVisible,
    currentSpeed: currentSpeed,
    resetInterval: resetInterval,
  };

const isTrumpet = (note)=>{
  if (Object.keys(complete_notes_distances).indexOf(note) < 16 || Object.keys(complete_notes_distances).indexOf(note) > 69) return false;
  return true;
}


  return (
    <>
      <Navbar />
      <main className="staff-practice">
        <span className="title">STAFF PRACTICE</span>
        <my-staff nota1={activeNote}></my-staff>
        <div className="container-span">
          <span className={isAnswerVisible ? "answer" : "hidden-answer"}>{graphicNotes[activeNote]}</span>
          {isAnswerVisible && isTrumpet(activeNote) && <my-trumpet-pistons pistons={pistons[activeNote]}></my-trumpet-pistons> }
        </div>
        <StaffControls buttonHandlers={buttonHandlers}/>
      </main>
    </>
  );
};
