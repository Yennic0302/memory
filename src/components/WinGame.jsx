import "./WinGame.css";
import { BsArrowClockwise, BsFillHouseFill } from "react-icons/bs";

export default function WinGame({ win, score, timeEnd, seeInicio, resetGame }) {
  return (
    <>
      {win ? (
        <div className="bg-cont-win">
          <div className="cont-win">
            <h1>Win</h1>
            <h3>00:{timeEnd}</h3>
            <h3>{score}</h3>
            <div className="win-nav">
              <button onClick={seeInicio} className="btn-home-game">
                <BsFillHouseFill />
              </button>
              <button onClick={resetGame} className="btn-reset-game">
                <BsArrowClockwise />
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
