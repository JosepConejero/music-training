import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Staff } from "../staffComponents/Staff";
import { StaffControls } from "../staffComponents/StaffControls";
import { distancia } from "../staffHandlers/distances";

export const StaffPracticePage = () => {
  const notaInicial = "do4"; //19
  const [visibleNote, setVisibleNote] = useState(true);
  const [activeNote, setActiveNote] = useState(notaInicial);
  const [oneOctavePressed, setOneOctavePressed] = useState(false);
  const activeNoteRef = useRef(notaInicial);
  // const oneOctaveTogglePressed = false; //TO-DO: crear estado para esta funcionalidad

  const handleClick = () => {
    setVisibleNote((prevState) => !prevState);
  };

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
      moreThanOneOctave = setOneOctavePressed && resta > 7; //si está pulsado el botón
      isTheSameNote = randomNote === currentNote;
    } while (isTheSameNote || moreThanOneOctave);

    return Object.keys(distancia)[randomNote];
  };

  const updateNote = (newNote) => {
    setActiveNote(newNote);
    activeNoteRef.current = newNote;
  };

  const showNextMiddleNote = () => {
    updateNote(getNote(4, 23));
  };

  return (
    <>
      <Navbar />
      <main className="staff-practice">
        <span>Staff Practice</span>
        <Staff visible={visibleNote} activeNote={activeNote} />
        <StaffControls setVisibleNote={handleClick} showNextMiddleNote={showNextMiddleNote} setOneOctavePressed={setOneOctavePressed} />
      </main>
    </>
  );
};
