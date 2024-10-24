import { useEffect, useRef, useState } from "react";
import { uniqueKey } from "../helpers/uniqueKey";
import { distancia } from "../staffHandlers/distances";
import "../lit-elements/my-buttons"
import { MyThreeButtons } from "../lit-react-components/MyThreeButtons";

export const StaffControls = ({ buttonHandlers }) => {
  const [togglePlay, setTogglePlay] = useState(false);
  const { showNextNote, isOneOctavePressed, setIsOneOctavePressed, setSpeed, timeHandler, showAnswer, isAnswerVisible, currentSpeed, resetInterval } = buttonHandlers;
  const fromSelection = useRef(0);
  const toSelection = useRef(0);

  const optionsRange = ["5 + 8 líneas", "5 + 4 líneas", "5 líneas", "Voice", "Selection" ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);
  const timeRange = ["0.5 s.", "1 s.", "1.5 s.", "2 s." ];
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(2);

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

  const updateItemIndex = (num)=>{
    setSelectedItemIndex(num);
  }

  const updateTimeIndex = (num)=>{
    setSelectedTimeIndex(num);
  }


  const showNoteAction = {
    0: ()=>showNextNote(0, 27),
    1: ()=>showNextNote(4, 23),
    2: ()=>showNextNote(8, 19),
    3: ()=>showNextNote(4, 23),
    4: ()=>showNextNote(fromSelection.current, toSelection.current),
  };

  const setSpeedAction = {
    0: ()=>setSpeed(500),
    1: ()=>setSpeed(1000),
    2: ()=>setSpeed(1500),
    3: ()=>setSpeed(2000),
  }

  const setTimeHandlerAction = {
    0: ()=>timeHandler(0, 27),
    1: ()=>timeHandler(4, 23),
    2: ()=>timeHandler(8, 19),
    3: ()=>timeHandler(4, 23),
    4: ()=>timeHandler(fromSelection.current, toSelection.current),
  }

  const showTimedNoteAction = (speed, timeHandler) =>{
    if (togglePlay) {
      resetInterval();
      setTogglePlay(false);
    } else {
      setSpeedAction[speed]();
      setTimeHandlerAction[timeHandler]();
      setTogglePlay(true);
    }
    
  }

  const stopAction = ()=>{
    resetInterval();
    setTogglePlay(false);
  }

  return (
    <>
      <div className="controls">
        <div>
          <MyThreeButtons
              activateAction={showNoteAction[selectedItemIndex]} 
              updateItemIndex={updateItemIndex} 
              textItems={optionsRange} 
              selectedItemIndex={selectedItemIndex}
              height="180px"
              width="100px"
          />
        </div>

        <div>
        <MyThreeButtons
              activateAction={()=>showTimedNoteAction(selectedTimeIndex,selectedItemIndex)}
              stopAction={stopAction}
              updateItemIndex={updateTimeIndex} 
              textItems={timeRange} 
              selectedItemIndex={selectedTimeIndex}
              height="180px"
              width="100px"
              autoUpdate
          />
        </div>

        <div></div>
        <button className={isOneOctavePressed ? "pressed-one-octave-toggle" : "one-octave-toggle"} onClick={handleOneOctaveToggle}>
          less than 8
        </button>
        {/* <span className="fromTo">
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
        </span> */}

       {/*  <div className="speedBox">
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
        </div> */}

    {/*     <div>
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
        </div> */}

        <div>
          <button className={isAnswerVisible ? "selectedButtonAnswer" : "buttonAnswer"} onClick={showAnswer}>
            ?
          </button>
        </div>


{/* <img src="/assets/play.ico" alt="logo de play"></img> */}
      {/*   <p>Lo que hay es: {optionsRange[selectedItemIndex]}</p> */}
      </div>
    </>
  );
};
