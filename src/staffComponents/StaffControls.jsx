import { distancia } from "../staffHandlers/distances";

export const StaffControls = () => {
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

  const handlerTime = (min, max) => {
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

  showNote(currentNote);

  return (
    <>
      <div className="controls">
        <div>CONTROLS</div>
        <button className="one-octave-toggle" onClick={handleOneOctaveToggle}>
          less than 8
        </button>
        <span>from</span>
        <input value="0"></input>
        <span>to</span>
        <input value="26"></input>

        <div className="speedBox">
          <button className="speedButton500" onClick={() => setSpeed(500)}>
            500
          </button>
          <button className="speedButton1000" onClick={() => setSpeed(1000)}>
            1000
          </button>
          <button className="speedButton1500" onClick={() => setSpeed(1500)}>
            1500
          </button>
          <button className="speedButton2000" onClick={() => setSpeed(2000)}>
            2000
          </button>
        </div>

        <div>
          <button className="buttonNext" onClick={() => handlerClick(0, 27)}>
            NEXT
          </button>
          <button className="buttonNextTime" onClick={() => handlerTime(0, 27)}>
            T-next
          </button>
        </div>

        <div>
          <button className="buttonNextMiddle" onClick={() => handlerClick(4, 23)}>
            MIDDLE
          </button>
          <button className="buttonNextMiddleTime" onClick={() => handlerTime(4, 23)}>
            T-middle
          </button>
        </div>

        <div>
          <button className="buttonNextVoice" onClick={() => handlerClick(4, 23)}>
            VOICE
          </button>
          <button className="buttonNextVoiceTime" onClick={() => handlerTime(4, 23)}>
            T-voice
          </button>
        </div>

        <div>
          <button className="buttonNextShort" onClick={() => handlerClick(8, 19)}>
            SHORT
          </button>
          <button className="buttonNextShortTime" onClick={() => handlerTime(8, 19)}>
            T-short
          </button>
        </div>
        <div>
          <button className="buttonAnswer" onClick={handlerAnswer}>
            ?
          </button>
          <p className="answer"></p>
        </div>
      </div>
    </>
  );
};
