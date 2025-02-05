import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { StaffControls } from "../staffComponents/StaffControls";
import { complete_notes_distances } from "../staffHandlers/complete-notes-distances";
import "../lit-elements/my-trumpet-pistons";
import "../staffComponents/staffStyles.css";
import "../lit-elements/my-sharp-flat-showed-buttons";
import { pistons } from "../staffHandlers/pistons";
import { graphicNotes } from "../staffHandlers/graphic-notes";
import { MySharpFlatShowedButtons } from "../lit-react-components/MySharpFlatShowedButtons";
import { siSharpNotesKind, flatNotes, sharpNotes, naturalNotes } from "../staffHandlers/selectable-notes";
import { MyStaff } from "../lit-react-components/MyStaff";
import { useToggleValue } from "../hooks/useToggleValue";
import { useAudio } from "../hooks/useAudio";


export const StaffPracticePage = () => {
  const notaInicial = "do4"; 

  const [activeNote, setActiveNote] = useState(notaInicial);
  const activeNoteRef = useRef(notaInicial);
  const [currentSpeed, setCurrentSpeed] = useState(2000);
  const speed = useRef(2000);
  const nIntervId = useRef();
  
  const {audioRef, playNote} = useAudio();

  const {value: isSolutionShowed, updateToggleValue: showSolution} = useToggleValue(false);
  const {value: isOneOctavePressed, updateToggleValue: updateIsOneOctavePressed} = useToggleValue(false);
  const {value: isSiSharpKindShowed, updateToggleValue: updateIsSiSharpKindShowed} = useToggleValue(false);
  const {value: isSharpShowed, updateToggleValue: updateIsSharpShowed} = useToggleValue(true);
  const {value: isFlatShowed, updateToggleValue: updateIsFlatShowed} = useToggleValue(true);
  const {value: isNaturalNotesShowed, updateToggleValue: updateIsNaturalNotesShowed} = useToggleValue(true);

  const getForbiddenNotes = () => {
    let notes = [];
    if (!isSiSharpKindShowed) notes = [...notes, ...siSharpNotesKind];
    if (!isSharpShowed) notes = [...notes, ...sharpNotes];
    if (!isFlatShowed) notes = [...notes, ...flatNotes];
    if (!isNaturalNotesShowed) notes = [...notes, ...naturalNotes];

    return notes;
  }


  const getNote = (min, max) => {
    let randomNote;
    let isTheSameNote = false;
    let moreThanOneOctave = false;
    let isAforbiddenNote = false;
    let forbiddenNotes = getForbiddenNotes();
    let currentNote = Object.keys(complete_notes_distances).indexOf(activeNoteRef.current);
    const max_number_of_notes = 81;

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    if (forbiddenNotes.length >= max_number_of_notes) {
      randomNote = 58; //cuando no hay notas q mostrar, q muestre el do4
    }
    else {
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
        isAforbiddenNote = forbiddenNotes.includes(Object.keys(complete_notes_distances)[randomNote]);
      } while (isTheSameNote || moreThanOneOctave || isAforbiddenNote);
  }
      
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

  const buttonHandlers = {
    isOneOctavePressed: isOneOctavePressed,
    //setIsOneOctavePressed: setIsOneOctavePressed,
    updateIsOneOctavePressed: updateIsOneOctavePressed,
    showNextNote: showNextNote,
    setSpeed: setSpeed,
    timeHandler: timeHandler,
    showSolution: showSolution,
    isSolutionShowed: isSolutionShowed,
    currentSpeed: currentSpeed,
    resetInterval: resetInterval,
  };

const isTrumpet = (note)=>{
  if (Object.keys(complete_notes_distances).indexOf(note) < 16 || Object.keys(complete_notes_distances).indexOf(note) > 69) return false;
  return true;
}




  return (
    <div className="staff-practice-page-container">
      <audio ref={audioRef}></audio>
      <Navbar />
      <main className="staff-practice">
        <span className="title">STAFF PRACTICE</span>
        <div className="container-row-center">
          <MyStaff nota1={activeNote} onClick={showSolution}/>
          <MySharpFlatShowedButtons 
            isSiSharpKindShowed={isSiSharpKindShowed} 
            isSharpShowed={isSharpShowed} 
            isFlatShowed={isFlatShowed} 
            isNaturalNotesShowed={isNaturalNotesShowed}
            isSiSharpKindShowedAction={updateIsSiSharpKindShowed}
            isSharpShowedAction={updateIsSharpShowed}
            isFlatShowedAction={updateIsFlatShowed}
            isNaturalNotesShowedAction={updateIsNaturalNotesShowed}
          />
        </div>
        <div className="container-span">
          <button className="wide-button tall-60" onClick={()=>playNote(activeNote)}>PLAY</button>
          <div className="horizontal-block wide-solution">
            <span className={isSolutionShowed ? "answer" : "hidden-answer"}>{graphicNotes[activeNote]}</span>
            {isSolutionShowed && isTrumpet(activeNote) && <my-trumpet-pistons pistons={pistons[activeNote]}></my-trumpet-pistons> }
          </div>
        </div>
        <StaffControls buttonHandlers={buttonHandlers}/>
      </main>
      
    </div>
  );
};

