import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { intervals } from "../pagesHelpers/intervals";
import { uniqueKey } from "../helpers/uniqueKey";

export const IntervalsPage = ({ currentInterval, currentIntervalAnswer, showNextIntervalAnswer }) => {
  const [pressedAnswerButton, setPressedAnswerButton] = useState(false);
  const [pressedShowTableButton, setPressedShowTableButton] = useState(false);

  const showAnswer = () => {
    setPressedAnswerButton((prevState) => !prevState);
  };

  const showIntervalTable = () => {
    setPressedShowTableButton((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <div>
        <div>
          <p>Intervals Practice</p>
        </div>

        <div className="result-interval"></div>
        <div>
          <div className="interval-view-container">
            <div className="interval-view-ask-box">
              <p className="interval-view-ask-text" onClick={showAnswer}>
                {currentInterval}
              </p>
            </div>
            <div className="interval-view-answer-box">
              <p className="interval-view-answer-text" onClick={showAnswer}>
                {pressedAnswerButton ? currentIntervalAnswer : "?"}
              </p>
            </div>
          </div>

          <div className="interval-buttons-container">
            <div className="interval-next-button-box">
              <button className="interval-next-button" onClick={showNextIntervalAnswer}>
                NEXT
              </button>
            </div>
            <div className="interval-show-table-box">
              <button className="interval-show-table-button" onClick={showIntervalTable}>
                SHOW TABLE
              </button>
            </div>
          </div>

          <div className={pressedShowTableButton ? "interval-table-container" : "hidden-interval-table-container"}>
            <div className="interval-table-column">
              {Object.entries(intervals).map(
                (interval, index) =>
                  index < 22 && (
                    <span key={uniqueKey}>
                      `${interval[0]} - ${interval[0]}`
                    </span>
                  )
              )}
            </div>
            <div className="interval-table-column">
              {Object.entries(intervals).map(
                (interval, index) =>
                  index >= 22 && (
                    <span key={uniqueKey}>
                      `${interval[0]} - ${interval[0]}`
                    </span>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
