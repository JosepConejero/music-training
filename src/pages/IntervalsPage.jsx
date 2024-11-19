import { useState } from "react";
import { Navbar } from "../components/Navbar";
//import { someIntervals } from "../pagesHelpers/some-intervals";
//import { uniqueKey } from "../helpers/uniqueKey";
import { randomElementFromArray } from "../pagesHelpers/randomElementFromArray";
import "./pages.css";
import "../lit-elements/my-intervals"
import { MyButton } from "../lit-react-components/MyButton";
import { completeIntervals } from "../pagesHelpers/complete-intervals";

export const IntervalsPage = () => {
  const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
 // const [pressedShowTableButton, setPressedShowTableButton] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(randomElementFromArray(completeIntervals));

  const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  };

/*   const showIntervalTable = () => {
    setPressedShowTableButton((prevState) => !prevState);
  }; */

  const showNextIntervalAnswer = () => {
    setCurrentInterval(randomElementFromArray(completeIntervals));
  };

  return (
    <>
      <Navbar />
      <div className="intervals-main-container">
        <div>
          <p className="title">INTERVALS PRACTICE</p>
        </div>

        <div className="bloque-vertical">
          {/* <div className="interval-view-container"> */}
            <div onClick={showAnswer}>
              <my-intervals nota1={currentInterval.note1} nota2={currentInterval.note2}></my-intervals>
              
            </div>
            <div className="interval-view-ask-box">
              <p className="interval-view-ask-text" onClick={showAnswer}>
                {pressedAnswerButton ? currentInterval.name : ""}
              </p>
            </div>
            {/* <div className="interval-view-answer-box">
              <p className="interval-view-answer-text" onClick={showAnswer}>
                {pressedAnswerButton ? currentInterval.name : "?"}
              </p>
            </div> */}
          {/* </div> */}

          <div className="interval-buttons-container">
            {/* <div className="interval-next-button-box"> */}
            <div className="interval-buttons">
              {/* <button className="interval-next-button" onClick={showNextIntervalAnswer}>
                NEXT
              </button> */}
              <MyButton width="120px" height="40px" actionOnClick={showNextIntervalAnswer} text="NEXT"></MyButton>
            </div>
            {/* <div className="interval-show-table-box"> */}
            <div className="interval-buttons">
              {/* <button className="interval-show-table-button" onClick={showIntervalTable}>
                SHOW TABLE
              </button> */}
             {/*  <MyButton width="120px" height="40px" toggle actionOnClick={showIntervalTable} text="SHOW TABLE"></MyButton> */}
            </div>
          </div>

          {/* <div className={pressedShowTableButton ? "interval-table-container" : "hidden-interval-table-container"}>
            <div className="interval-table-box">
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index < (intervals.length/2) && <span key={uniqueKey()}> {`${interval[0]}`}</span>)}</div>
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index < (intervals.length/2) && <span key={uniqueKey()}> {`${interval[1]}`}</span>)}</div>
            </div>
            <div className="interval-table-box">
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index >= (intervals.length/2) && <span key={uniqueKey()}> {`${interval[0]}`}</span>)}</div>
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index >= (intervals.length/2) && <span key={uniqueKey()}> {`${interval[1]}`}</span>)}</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
