import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { someIntervals } from "../pagesHelpers/some-intervals";
import { uniqueKey } from "../helpers/uniqueKey";
import { randomElementFromObject } from "../pagesHelpers/randomElementFromObject";
import "./pages.css";
import "../lit-elements/my-intervals"
import { MyButton } from "../lit-react-components/MyButton";

export const IntervalsPage = () => {
  const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
  const [pressedShowTableButton, setPressedShowTableButton] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(randomElementFromObject(someIntervals));

  const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  };

  const showIntervalTable = () => {
    setPressedShowTableButton((prevState) => !prevState);
  };

  const showNextIntervalAnswer = () => {
    setCurrentInterval(randomElementFromObject(someIntervals));
  };

  return (
    <>
      <Navbar />
      <div className="intervals-main-container">
        <div>
          <p className="title">INTERVALS PRACTICE</p>
        </div>

        <div className="bloque-vertical">
          <div className="interval-view-container">
            {/*<div className="interval-view-ask-box">
              <p className="interval-view-ask-text" onClick={showAnswer}>
                {currentInterval[0]}
              </p>
            </div>*/}
            <div onClick={showAnswer}>
              <my-intervals nota1={currentInterval[0].split(" ")[0]} nota2={currentInterval[0].split(" ")[1]}></my-intervals>
              
            </div>
            <div className="interval-view-answer-box">
              <p className="interval-view-answer-text" onClick={showAnswer}>
                {pressedAnswerButton ? currentInterval[1] : "?"}
              </p>
            </div>
          </div>

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
              <MyButton width="120px" height="40px" toggle actionOnClick={showIntervalTable} text="SHOW TABLE"></MyButton>
            </div>
          </div>

          <div className={pressedShowTableButton ? "interval-table-container" : "hidden-interval-table-container"}>
            <div className="interval-table-box">
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index < (intervals.length/2) && <span key={uniqueKey()}> {`${interval[0]}`}</span>)}</div>
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index < (intervals.length/2) && <span key={uniqueKey()}> {`${interval[1]}`}</span>)}</div>
            </div>
            <div className="interval-table-box">
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index >= (intervals.length/2) && <span key={uniqueKey()}> {`${interval[0]}`}</span>)}</div>
              <div className="interval-table-column">{Object.entries(someIntervals).map((interval, index, intervals) => index >= (intervals.length/2) && <span key={uniqueKey()}> {`${interval[1]}`}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
