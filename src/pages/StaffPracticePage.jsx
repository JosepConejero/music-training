import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { StaffControls } from "../staffComponents/StaffControls";
import { distancia } from "../staffHandlers/distances";
import "../lit-elements/my-staff";

export const StaffPracticePage = () => {
  const notaInicial = "do4"; //19
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
    let currentNote = Object.keys(distancia).indexOf(activeNoteRef.current);

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    do {
      randomNote = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
      const resta = Math.abs(Math.abs(randomNote) - Math.abs(currentNote));
      moreThanOneOctave = isOneOctavePressed && resta > 7; //si está pulsado el botón
      isTheSameNote = randomNote === currentNote;
    } while (isTheSameNote || moreThanOneOctave);

    return Object.keys(distancia)[randomNote];
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
      clearInterval(nIntervId.current);
      nIntervId.current = null;
    }
  };

  const setSpeed = (newSpeed) => {
    clearInterval(nIntervId.current);
    nIntervId.current = null;
    setCurrentSpeed(newSpeed);
    speed.current = newSpeed;
  };

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
  };

  return (
    <>
      <Navbar />
      <main className="staff-practice">
        <span className="title">STAFF PRACTICE</span>
        {/*  <Staff activeNote={activeNote} /> */}
        <my-staff nota1={activeNote}></my-staff>
        <span className={isAnswerVisible ? "answer" : "hidden-answer"}>{activeNote}</span>
        <StaffControls buttonHandlers={buttonHandlers} />
      </main>
    </>
  );
};
