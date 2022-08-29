import { useEffect, useState } from "react";
import Card from "./Card";
import "./Memory.css";
import Score from "./Score";
import Timer from "./newTimer";
import FormMemory from "./FormMemory";
import WinGame from "./WinGame";
import HistoryGame from "./HistoryGame";
import LouseGame from "./LouseGame";
import { BsFillHouseFill } from "react-icons/bs";

export default function Memory({
  seeHistory,
  setSeeHistory,
  setSeeBtnHistory,
}) {
  const [seeForm, setSeeForm] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [form, setForm] = useState({
    dificult: "8",
    time: "60",
    category: "anime",
  });
  const [card, setCard] = useState([]);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [dificult, setDificult] = useState("");
  const [cardsId, setCardsId] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [win, setWin] = useState(false);
  const [isLouse, setIsLouse] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [timeEnd, setTimeEnd] = useState(0);

  const imgCard = require.context(`../imgs/`, true);
  const bgImgCard = require.context(`../imgs/assets/`, true);

  let id = 0;
  let valid = 0;
  let card1 = undefined;
  let card2 = undefined;

  const resetGame = () => {
    setIsReset(true);
    setIsEnd(false);
    setIsStart(false);
    setCardsId([]);
    setErrors(0);
  };

  const seeInicio = () => {
    if (isStart && isEnd === false) {
      if (window.confirm("you shure to out of this window?")) {
        setIsStart(false);
        setSeeHistory(false);
        setSeeForm(true);
      }
    } else {
      setIsStart(false);
      setSeeHistory(false);
      setSeeForm(true);
    }
  };

  const validateCard = (e, valid) => {
    if (!cardsId.includes(e.id)) {
      if (card1 === undefined) {
        card1 = e;
        e.style.background = `url(${imgCard(
          "./" + form.category + "/card" + valid + ".jpg"
        )}) no-repeat center center/cover`;
      } else if (
        card1 !== undefined &&
        card2 === undefined &&
        e.id !== card1.id
      ) {
        card2 = e;
        e.style.background = `url(${imgCard(
          "./" + form.category + "/card" + valid + ".jpg"
        )}) no-repeat center center/cover`;
        setTimeout(() => {
          if (card1.className === card2.className) {
            correct(card1, card2);
          } else {
            incorrect(card1, card2);
          }
        }, 300);
      }
    }
  };

  const correct = (cardEval1, cardEval2) => {
    cardEval1.style.opacity = ".5";
    cardEval2.style.opacity = ".5";
    cardEval1.style.animation = "correctC 0.8s";
    cardEval2.style.animation = "correctC 0.8s";
    cardEval1.style.boxShadow = "1px 1px 10px #258d19";
    cardEval2.style.boxShadow = "1px 1px 10px #258d19";
    setCardsId((cardsId) => [...cardsId, cardEval1.id, cardEval2.id]);
    winGame();
    setScore((score) => score + 100);
    card1 = undefined;
    card2 = undefined;
  };

  const incorrect = (cardEval1, cardEval2) => {
    cardEval1.style.animation = "error 0.5s";
    cardEval2.style.animation = "error 0.5s";
    setTimeout(() => {
      cardEval2.style.animation = "";
      cardEval1.style.animation = "";
    }, 1000);
    setTimeout(() => {
      cardEval1.style.background = `url(${bgImgCard(
        "./img-interrogatory.png"
      )}) no-repeat center center/cover`;
      cardEval2.style.background = `url(${bgImgCard(
        "./img-interrogatory.png"
      )}) no-repeat center center/cover`;
      cardEval1.style.backgroundSize = "30%";
      cardEval2.style.backgroundSize = "30%";
    }, 500);
    setErrors((errors) => errors + 1);
    setScore((score) => score - 50);
    card1 = undefined;
    card2 = undefined;
  };

  const winGame = () => {
    if (form.dificult === "8") {
      if (cardsId.length === 14) {
        setIsEnd(true);
        setWin(true);
      }
    }
    if (form.dificult === "12") {
      console.log(cardsId.length);
      if (cardsId.length === 22) {
        setIsEnd(true);
        setWin(true);
      }
    }
    if (form.dificult === "16") {
      if (cardsId.length === 30) {
        setIsEnd(true);
        setWin(true);
      }
    }
  };

  const isWin = (time) => {
    if (win) {
      setTimeEnd(time);
    }
  };

  const informationHistoryGame = (id) => {
    let date = new Date();
    let gameCondition;
    let dificult;
    let time;

    if (form.dificult === "8") {
      dificult = "Easy";
    } else if (form.dificult === "12") {
      dificult = "Medium";
    } else if (form.dificult === "16") {
      dificult = "Hard";
    }

    if (form.time === "60") {
      time = "01:00";
    } else if (form.time === "40") {
      time = "00:40";
    } else if (form.time === "30") {
      time = "00:30";
    }

    if (win === true) {
      gameCondition = "Win";
    } else if (isLouse) {
      gameCondition = "Louse";
    }

    let information = {
      gameCondition,
      id: id,
      dificult,
      time,
      timeEnd: timeEnd,
      score: score,
      category: form.category,
      errors,
      date: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    };
    return information;
  };

  useEffect(() => {
    const dificultGame = () => {
      if (form.dificult === "8") {
        setDificult("cards-memory-container-ease");
      }
      if (form.dificult === "12") {
        setDificult("cards-memory-container-medium");
      }
      if (form.dificult === "16") {
        setDificult("cards-memory-container-hart");
      }
    };

    const loadGame = () => {
      setIsReset(false);
      setIsStart(true);
      if (card.length === 0) {
        for (let i = 0; i < form.dificult; i++) {
          valid++;
          for (let a = 0; a <= 1; a++) {
            id++;
            let dataCard = {
              id: id,
              valid: valid,
            };
            setTimeout(() => {
              setCard((card) => [...card, dataCard]);
            }, Math.random() * 10);
          }
        }
      }
    };

    if (isStart === true) {
      loadGame();
      dificultGame();
    }

    if (isReset && isStart === false) {
      setScore(0);
      setCard([]);
      setCardsId([]);
      setWin(false);
      setIsLouse(false);
      setErrors(0);
      setIsEnd(false);
      setTimeEnd(0);
      loadGame();
    }

    if (seeHistory === true) {
      setIsStart(false);
      setIsEnd(false);
      setSeeForm(false);
    }

    if (seeForm === false) {
      setSeeBtnHistory(false);
    } else {
      setErrors(0);
      setScore(0);
      setCardsId([]);
      setWin(false);
      setTimeEnd(0);
      setIsEnd(false);
      setIsLouse(false);
      setSeeBtnHistory(true);
      setDificult("");
      setCard([]);
      setForm({ dificult: "8", time: "60", category: "anime" });
    }
  }, [isStart, isEnd, isReset, id, valid, seeForm, seeHistory, card.length]);

  return (
    <>
      {isStart ? (
        <div className={"game-conatiner"}>
          <div className={dificult}>
            {card.map((e) => (
              <Card key={e.id} data={e} validateCard={validateCard} />
            ))}
          </div>
          <div className="options-game">
            <div className=" stast-game">
              <Timer
                dataTime={form.time}
                isStart={isStart}
                isReset={isReset}
                setIsStart={setIsStart}
                setIsEnd={setIsEnd}
                isEnd={isEnd}
                isWin={isWin}
                win={win}
                setIsLouse={setIsLouse}
              />
              <Score score={score} />
            </div>
            <button onClick={seeInicio} className="btn-home-game">
              <BsFillHouseFill />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <HistoryGame
        win={win}
        isLouse={isLouse}
        timeEnd={timeEnd}
        informationHistoryGame={informationHistoryGame}
        seeHistory={seeHistory}
        seeInicio={seeInicio}
        isEnd={isEnd}
      />

      <FormMemory
        setForm={setForm}
        form={form}
        seeForm={seeForm}
        setSeeForm={setSeeForm}
        setIsStart={setIsStart}
      />

      <WinGame
        seeInicio={seeInicio}
        resetGame={resetGame}
        win={win}
        timeEnd={timeEnd}
        score={score}
      />

      <LouseGame
        seeInicio={seeInicio}
        resetGame={resetGame}
        isLouse={isLouse}
        timeEnd={timeEnd}
        score={score}
      />
    </>
  );
}
