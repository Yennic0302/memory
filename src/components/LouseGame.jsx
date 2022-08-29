import "./LouseGame.css";
import { BsArrowClockwise, BsFillHouseFill } from "react-icons/bs";

export default function LouseGame({
  isLouse,
  score,
  timeEnd,
  seeInicio,
  resetGame,
}) {
  return (
    <>
      {isLouse ? (
        <div className="bg-cont-louse">
          <div className="cont-louse">
            <h1>Louse</h1>
            <h3>00:{timeEnd}</h3>
            <h3>{score}</h3>
            <div className="louse-nav">
              <button onClick={seeInicio} className="btn-home-game">
                <BsFillHouseFill />
              </button>
              <button onClick={resetGame} className="btn-reset-game">
                <BsArrowClockwise />{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
