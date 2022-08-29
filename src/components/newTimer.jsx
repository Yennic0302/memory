import { useEffect, useState } from "react";
import "./newTimer.css";

export default function Timer({
  setIsEnd,
  isEnd,
  isStart,
  isReset,
  dataTime,
  isWin,
  win,
  setIsLouse,
}) {
  const [time, setTime] = useState(dataTime);

  useEffect(() => {
    let gameTimer;
    let delayTimer;
    if (isEnd === false && isStart) {
      delayTimer = setTimeout(() => {
        gameTimer = setInterval(() => {
          setTime((time) => parseInt(time) - 1);
        }, 1000);
      }, 1000);
    }
    if (isEnd) {
      isWin(time);
      clearInterval(gameTimer);
    }

    return () => {
      clearInterval(gameTimer);
      clearTimeout(delayTimer);
    };
  }, [isEnd, isStart, win]);

  useEffect(() => {
    if (time === 0) {
      setIsEnd(true);
      setIsLouse(true);
    }
    if (isReset) {
      setTime(dataTime);
    }
  }, [time, isReset]);

  return (
    <div className="timer">
      <h1>Time:</h1>
      <h2 className={time <= 10 && time !== 0 ? "time" : ""}>00:{time}</h2>
    </div>
  );
}
