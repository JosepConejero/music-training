/* 
let showedNote = "";
let nIntervId;
let speed = 2000;
let currentNote = 19; //do4
let oneOctaveTogglePressed = false;

const showNote = (index) => {
  if (index < 0 || index > 26) {
    console.log("el número debe estar entre 0 y 26");
    return;
  }
  let note = Object.entries(distancia)[index][0];
  showedNote = note;
  switch (note) {
    case "la5":
    case "si5":
      [".la5"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "do6":
    case "re6":
      [".la5", ".do6"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "mi6":
    case "fa6":
      [".la5", ".do6", ".mi6"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "sol6":
    case "la6":
      [".la5", ".do6", ".mi6", ".sol6"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "do4":
    case "si3":
      [".do4"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "la3":
    case "sol3":
      [".do4", ".la3"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "fa3":
    case "mi3":
      [".do4", ".la3", ".fa3"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;

    case "re3":
    case "do3":
      [".do4", ".la3", ".fa3", ".re3"].forEach((note) => {
        document.querySelector(note).style.visibility = "visible";
      });
      break;
    default:
  }
  document.querySelector(".nota").style.top = distancia[note];
};

const resetLines = () => {
  [".sol6", ".mi6", ".do6", ".la5", ".do4", ".la3", ".fa3", ".re3"].forEach((note) => {
    document.querySelector(note).style.visibility = "hidden";
  });
  document.querySelector(".answer").textContent = "vacío";
  document.querySelector(".answer").style.visibility = "hidden";
};

const handlerClick = (min, max) => {
  resetLines();

  let randomNote;
  let isTheSameNote = false;
  let moreThanOneOctave = false;

  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  do {
    randomNote = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    const resta = Math.abs(Math.abs(randomNote) - Math.abs(currentNote));
    moreThanOneOctave = oneOctaveTogglePressed && resta > 7; //si está pulsado el botón
    isTheSameNote = randomNote === currentNote;
  } while (isTheSameNote || moreThanOneOctave);

  currentNote = randomNote;

  showNote(randomNote); //0-26
};

const handlerAnswer = () => {
  const answerNode = document.querySelector(".answer");
  answerNode.textContent = showedNote;
  answerNode.style.visibility === "hidden" ? (answerNode.style.visibility = "visible") : (answerNode.style.visibility = "hidden");
};

const handleTime = (min, max) => {
  if (!nIntervId) {
    nIntervId = setInterval(() => handlerClick(min, max), speed);
  } else {
    clearInterval(nIntervId);
    nIntervId = null;
  }
};

const setSpeed = (newSpeed) => {
  clearInterval(nIntervId);
  nIntervId = null;
  speed = newSpeed;
};

const handleOneOctaveToggle = () => {
  const buttonOneOctaveToggle = document.querySelector(".one-octave-toggle");
  if (oneOctaveTogglePressed) {
    buttonOneOctaveToggle.style.backgroundColor = "lightgrey";
    buttonOneOctaveToggle.style.color = "black";
  } else {
    buttonOneOctaveToggle.style.backgroundColor = "#555";
    buttonOneOctaveToggle.style.color = "white";
  }
  oneOctaveTogglePressed = !oneOctaveTogglePressed;
  // if (oneOctaveTogglePressed) {console.log("pulsado")} else {console.log("no pulsado")}
};

document.querySelector(".buttonAnswer").addEventListener("click", handlerAnswer);

document.querySelector(".buttonNext").addEventListener("click", () => handlerClick(0, 27));
document.querySelector(".buttonNextTime").addEventListener("click", () => handleTime(0, 27));

document.querySelector(".buttonNextMiddle").addEventListener("click", () => handlerClick(4, 23));
document.querySelector(".buttonNextMiddleTime").addEventListener("click", () => handleTime(4, 23));

document.querySelector(".buttonNextShort").addEventListener("click", () => handlerClick(8, 19));
document.querySelector(".buttonNextShortTime").addEventListener("click", () => handleTime(8, 19));

document.querySelector(".speedButton500").addEventListener("click", () => setSpeed(500));
document.querySelector(".speedButton1000").addEventListener("click", () => setSpeed(1000));
document.querySelector(".speedButton1500").addEventListener("click", () => setSpeed(1500));
document.querySelector(".speedButton2000").addEventListener("click", () => setSpeed(2000));

document.querySelector(".one-octave-toggle").addEventListener("click", handleOneOctaveToggle);

showNote(currentNote);
 */
