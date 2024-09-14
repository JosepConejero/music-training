import { useRef } from "react";
import { uniqueKey } from "../helpers/uniqueKey";
import { distancia } from "../staffHandlers/distances";

export const StaffControls = ({ buttonHandlers }) => {
  const { showNextNote, isOneOctavePressed, setIsOneOctavePressed, setSpeed, timeHandler, showAnswer, isAnswerVisible, currentSpeed } = buttonHandlers;
  const fromSelection = useRef(0);
  const toSelection = useRef(0);

  const handleOneOctaveToggle = () => {
    setIsOneOctavePressed((prevState) => !prevState);
  };

  const onFromSelectChange = ({ target }) => {
    // fromSelection.current = Object.keys(distancia)[target.value];
    fromSelection.current = target.value;
    target.value = toSelection.current;
    console.log("from: ", fromSelection.current, " to ", toSelection.current);
  };

  const onToSelectChange = ({ target }) => {
    //    toSelection.current = Object.keys(distancia)[target.value];
    toSelection.current = target.value;
    target.value = toSelection.current;
    console.log("from: ", fromSelection.current, " to ", toSelection.current);
    // console.log("to: ", toSelection.current);
    // console.log(target.value);
    // target.value = 19; //
  };

  return (
    <>
      <div className="controls">
        <button className={isOneOctavePressed ? "pressed-one-octave-toggle" : "one-octave-toggle"} onClick={handleOneOctaveToggle}>
          less than 8
        </button>
        <span className="fromTo">
          <span> from</span>
          <select name="fromSelect" onChange={onFromSelectChange}>
            {Object.keys(distancia).map((note, index) => (
              <option name={`from${note}`} key={uniqueKey()} value={`${index}`}>
                {note}
              </option>
            ))}
          </select>

          <span>to</span>
          <select name="toSelect" onChange={onToSelectChange}>
            {Object.keys(distancia).map((note, index) => (
              <option name={`to${note}`} key={uniqueKey()} value={`${index}`}>
                {note}
              </option>
            ))}
          </select>
        </span>

        <div className="speedBox">
          <button className={currentSpeed === 500 ? "pressed-speed-button" : "speed-button"} onClick={() => setSpeed(500)}>
            0.5 s.
          </button>
          <button className={currentSpeed === 1000 ? "pressed-speed-button" : "speed-button"} onClick={() => setSpeed(1000)}>
            1 s.
          </button>
          <button className={currentSpeed === 1500 ? "pressed-speed-button" : "speed-button"} onClick={() => setSpeed(1500)}>
            1.5 s.
          </button>
          <button className={currentSpeed === 2000 ? "pressed-speed-button" : "speed-button"} onClick={() => setSpeed(2000)}>
            2 s.
          </button>
        </div>

        <div>
          <button className="buttonNext" onClick={() => showNextNote(0, 27)}>
            5 + 8 lines
          </button>
          <button className="buttonNextTime" onClick={() => timeHandler(0, 27)}>
            Timed 5 + 8
          </button>
        </div>

        <div>
          <button className="buttonNextMiddle" onClick={() => showNextNote(4, 23)}>
            5 + 4 lines
          </button>
          <button className="buttonNextMiddleTime" onClick={() => timeHandler(4, 23)}>
            Timed 5 + 4
          </button>
        </div>

        <div>
          <button className="buttonNextShort" onClick={() => showNextNote(8, 19)}>
            5 lines
          </button>
          <button className="buttonNextShortTime" onClick={() => timeHandler(8, 19)}>
            Timed 5
          </button>
        </div>

        <div>
          <button className="buttonNextVoice" onClick={() => showNextNote(4, 23)}>
            Voice
          </button>
          <button className="buttonNextVoiceTime" onClick={() => timeHandler(4, 23)}>
            Timed voice
            {/* <img src="/assets/play.ico" alt="logo de play"></img> */}
          </button>
        </div>

        <div>
          <button className="buttonNextSelection" onClick={() => showNextNote(fromSelection.current, toSelection.current)}>
            selection
          </button>
          <button className="buttonNextSelectionTime" onClick={() => timeHandler(fromSelection.current, toSelection.current)}>
            Timed sel
          </button>
        </div>

        <div>
          <button className={isAnswerVisible ? "selectedButtonAnswer" : "buttonAnswer"} onClick={showAnswer}>
            ?
          </button>
        </div>
      </div>
    </>
  );
};
