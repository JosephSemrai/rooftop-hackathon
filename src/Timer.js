import useCountdown from "./useCountdown";
import { useEffect, useState } from "react";
import "./timerStyles.css";
import { RefreshIcon } from "@heroicons/react/solid";

export default function Timer() {
  const [timerType, setTimerType] = useState("pomodoro");
  // const [originalTimerValue, setOriginalTimerValue] = useState(1500);
  const [
    counter,
    start,
    pause,
    reset,
    isCountingDown,
    setCounter
  ] = useCountdown(1500, 1000);

  const convertSecondsToMMSSString = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  };

  const convertMMSSStringToSeconds = (MMSSString) => {
    const splitTokens = MMSSString.split(":");

    return parseInt(splitTokens[0], 10) * 60 + parseInt(splitTokens[1], 10);
  };

  // useEffect(() => {
  //   if (timerType === "pomodoro") return setOriginalTimerValue(1500);
  //   if (timerType === "short-break") return setOriginalTimerValue(300);
  //   if (timerType === "long-break") return setOriginalTimerValue(900);
  // }, [timerType]);

  return (
    <div className="container" style={{ margin: "15px" }}>
      <div className="calculator">
        <div className="value" name="txt" id="display">
          <div style={{ display: "flex" }} id="counter">
            <p
              style={{
                flex: 2,
                fontSize: 52,
                padding: "10px",
                textAlign: "left"
              }}
            >
              {convertSecondsToMMSSString(counter)}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <button
                className="start"
                onClick={isCountingDown ? pause : start}
              >
                {isCountingDown ? "pause" : "start"}
              </button>
              <button
                className="start"
                style={{ width: "45px", marginLeft: "5px" }}
                onClick={reset}
              >
                <RefreshIcon style={{ width: "20px" }} />
              </button>
            </div>
          </div>
          {/* 
          <div id="timer-select" style={{ display: "flex" }}>
            <button className="type-select-button">Pomodoro</button>

            <button className="type-select-button active">Pomodoro</button>
          </div> */}
        </div>

        <button
          className={`timer-type-button ${
            timerType === "pomodoro" && "active"
          }`}
          onClick={() => {
            setTimerType("pomodoro");

            setCounter(1500);
          }}
        >
          Pomodoro
        </button>
        <button
          className={`timer-type-button ${
            timerType === "short-break" && "active"
          }`}
          onClick={() => {
            setTimerType("short-break");
            setCounter(300);
          }}
        >
          Short Break
        </button>
        <button
          className={`timer-type-button ${
            timerType === "long-break" && "active"
          }`}
          onClick={() => {
            setTimerType("long-break");
            setCounter(900);
          }}
        >
          Long Break
        </button>
        {/* <span className="num" onclick="document.calc.txt.value +='-'">
          -
        </span> */}
      </div>
    </div>
  );
}
