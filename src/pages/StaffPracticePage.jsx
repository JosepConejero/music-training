import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { StaffControls } from "../staffComponents/StaffControls";
import { complete_notes_distances } from "../staffHandlers/complete-notes-distances";
import "../lit-elements/my-staff";
import "../lit-elements/my-trumpet-pistons";
import "../staffComponents/staffStyles.css";
import "../lit-elements/my-sharp-flat-showed-buttons";
import { pistons } from "../staffHandlers/pistons";
import { graphicNotes } from "../staffHandlers/graphic-notes";
import { MySharpFlatShowedButtons } from "../lit-react-components/MySharpFlatShowedButtons";
import { siSharpNotesKind, flatNotes, sharpNotes, normalNotes } from "../staffHandlers/selectable-notes";


export const StaffPracticePage = () => {
  const notaInicial = "do4"; 
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [activeNote, setActiveNote] = useState(notaInicial);
  const activeNoteRef = useRef(notaInicial);
  const [isOneOctavePressed, setIsOneOctavePressed] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(2000);
  const speed = useRef(2000);
  const nIntervId = useRef();
  const [isSiSharpKindShowed, setIsSiSharpKindShowed] = useState(false);
  const [isSharpShowed, setIsSharpShowed] = useState(true);
  const [isFlatShowed, setIsFlatShowed] = useState(true);
  const [isNormalNotesShowed, setIsNormalNotesShowed] = useState(true);
  

  const getForbiddenNotes = () => {
    let notes = [];
    if (!isSiSharpKindShowed) notes = [...notes, ...siSharpNotesKind];
    if (!isSharpShowed) notes = [...notes, ...sharpNotes];
    if (!isFlatShowed) notes = [...notes, ...flatNotes];
    if (!isNormalNotesShowed) notes = [...notes, ...normalNotes];

/*     const notesWithDuplicates = new Set(notes);

    let notesWithoutDuplicates = [...notesWithDuplicates];
    
    console.log(notesWithoutDuplicates);
    return notesWithoutDuplicates; */
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
      randomNote = 58;
      console.log("no hay notas que mostrar");
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

  const showAnswer = () => {
    setIsAnswerVisible((prevState) => !prevState);
  };

  const updateIsSiSharpKindShowed = () => {
    setIsSiSharpKindShowed((prevState)=> !prevState);
    
  }

  const updateIsSharpShowed = () => {
    setIsSharpShowed((prevState)=> !prevState);
    
  }

  const updateIsFlatShowed = () => {
    setIsFlatShowed((prevState)=> !prevState);
    
  }

  const updateIsNormalNotesShowed = () => {
    setIsNormalNotesShowed((prevState)=> !prevState);
    
  }


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
    <div className="staff-practice-page-container">
      <Navbar />
      <main className="staff-practice">
        <span className="title">STAFF PRACTICE</span>
        <div className="container-row-center">
          <my-staff nota1={activeNote}></my-staff>
          <MySharpFlatShowedButtons 
            isSiSharpKindShowed={isSiSharpKindShowed} 
            isSharpShowed={isSharpShowed} 
            isFlatShowed={isFlatShowed} 
            isNormalNotesShowed={isNormalNotesShowed}
            isSiSharpKindShowedAction={updateIsSiSharpKindShowed}
            isSharpShowedAction={updateIsSharpShowed}
            isFlatShowedAction={updateIsFlatShowed}
            isNormalNotesShowedAction={updateIsNormalNotesShowed}
          />
        </div>
        <div className="container-span">
          <span className={isAnswerVisible ? "answer" : "hidden-answer"}>{graphicNotes[activeNote]}</span>
          {isAnswerVisible && isTrumpet(activeNote) && <my-trumpet-pistons pistons={pistons[activeNote]}></my-trumpet-pistons> }
        </div>
        <StaffControls buttonHandlers={buttonHandlers}/>
      </main>
      
    </div>
  );
};
