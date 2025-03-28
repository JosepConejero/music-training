import { /* useRef,  */ useState } from "react";
//import { uniqueKey } from "../helpers/uniqueKey";
//import { distancia } from "../staffHandlers/distances";
import "../lit-elements/my-buttons";
import "../lit-elements/my-button";
import { MyThreeButtons } from "../lit-react-components/MyThreeButtons";
import { MyButton } from "../lit-react-components/MyButton";

export const StaffControls = ({ buttonHandlers }) => {
  const [togglePlay, setTogglePlay] = useState(false);
  const { showNextNote, isOneOctavePressed, updateIsOneOctavePressed, setSpeed, timeHandler, showSolution, /* isSolutionShowed,  */ /* currentSpeed,  */ resetInterval } = buttonHandlers;
  //const fromSelection = useRef(0);
  //const toSelection = useRef(80);

  //const optionsRange = ["5 + 8 lines", "5 + 4 lines", "trumpet", "5 lines", "Voice", "Selection" ];
  const optionsRange = ["5 + 8 lines", "5 + 4 lines", "trumpet", "5 lines"];
  const [selectedItemIndex, setSelectedItemIndex] = useState(2);
  const timeRange = ["0.5 s.", "1 s.", "1.5 s.", "2 s."];
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(2);

  /* const handleOneOctaveToggle = () => {
    setIsOneOctavePressed((prevState) => !prevState);
  }; */

  /*  const onFromSelectChange = ({ target }) => {
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
  }; */

  const updateItemIndex = (num) => {
    setSelectedItemIndex(num);
  };

  const updateTimeIndex = (num) => {
    setSelectedTimeIndex(num);
  };

  const showNoteAction = {
    0: () => showNextNote(0, 80),
    1: () => showNextNote(12, 68),
    2: () => showNextNote(16, 69), //trumpet
    3: () => showNextNote(24, 56), // 5 líneas
    /* 4: ()=>showNextNote(12, 68), //voice
    5: ()=>showNextNote(fromSelection.current, toSelection.current), */
  };

  const setSpeedAction = {
    0: () => setSpeed(500),
    1: () => setSpeed(1000),
    2: () => setSpeed(1500),
    3: () => setSpeed(2000),
  };

  const setTimeHandlerAction = {
    0: () => timeHandler(0, 80),
    1: () => timeHandler(12, 68),
    2: () => timeHandler(16, 69), //trumpet
    3: () => timeHandler(24, 56), // 5 líneas
    /* 4: ()=>timeHandler(12, 68), //voice
    5: ()=>timeHandler(fromSelection.current, toSelection.current), */
  };

  const showTimedNoteAction = (speed, timeHandler) => {
    if (togglePlay) {
      resetInterval();
      setTogglePlay(false);
    } else {
      setSpeedAction[speed]();
      setTimeHandlerAction[timeHandler]();
      setTogglePlay(true);
    }
  };

  const stopAction = () => {
    resetInterval();
    setTogglePlay(false);
  };

  return (
    <>
      <div className="controls">
        <div>
          <MyThreeButtons activateAction={showNoteAction[selectedItemIndex]} updateItemIndex={updateItemIndex} textItems={optionsRange} selectedItemIndex={selectedItemIndex} height="180px" width="100px" />
        </div>

        <div>
          <MyThreeButtons
            activateAction={() => showTimedNoteAction(selectedTimeIndex, selectedItemIndex)}
            stopAction={stopAction}
            updateItemIndex={updateTimeIndex}
            textItems={timeRange}
            selectedItemIndex={selectedTimeIndex}
            height="180px"
            width="100px"
            autoUpdate
          />
        </div>

        <div className="vertical-buttons">
          {/* <button className={isOneOctavePressed ? "pressed-one-octave-toggle" : "one-octave-toggle"} onClick={handleOneOctaveToggle}>
          less than 8
          </button> */}
          <div>
            <MyButton toggle pressedButton={isOneOctavePressed} actionOnClick={updateIsOneOctavePressed} text="less than 8"></MyButton>
          </div>

          {/*  <button className={isAnswerVisible ? "selectedButtonAnswer" : "buttonAnswer"} onClick={showAnswer}>
            answer
          </button> */}
          <div>
            <MyButton toggle actionOnClick={showSolution} text="answer"></MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

/* <span className="fromTo">
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
        
         <img src="/assets/play.ico" alt="logo de play"></img> 
         <p>Lo que hay es: {optionsRange[selectedItemIndex]}</p> 

        
        */
