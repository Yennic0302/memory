import Dexie from "dexie";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CardHI from "./CardHI";
import { FiArrowLeft } from "react-icons/fi";
import "./HistoryGame.css";

export default function HistoryGame({
  win,
  informationHistoryGame,
  timeEnd,
  seeHistory,
  seeInicio,
  isLouse,
  isEnd,
}) {
  const db = new Dexie("MemoryHistory");

  db.version(1).stores({
    history: "id",
  });

  db.open().catch((err) => {
    console.log(err.stack || err);
  });

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (
      (win === true && timeEnd !== 0 && isEnd === true) ||
      (isLouse === true && isEnd === true)
    ) {
      let information = informationHistoryGame(uuidv4());

      db.history.add(information).then(async () => {
        let allHistory = await db.history.toArray();
        setHistory(allHistory);
      });
    }
  }, [win, timeEnd, isLouse]);

  useEffect(() => {
    const getHistory = async () => {
      let allHistory = await db.history.toArray();
      setHistory(allHistory);
    };
    getHistory();
  }, []);

  let readHistory;

  if (history.length > 0) {
    readHistory = (
      <div className="card-history-container">
        {history.map((e) => (
          <CardHI key={e.id} data={e} />
        ))}
      </div>
    );
  } else {
    readHistory = <h1>No se encuentra partidas registradas</h1>;
  }

  return (
    <>
      {seeHistory ? (
        <section className="history-container">
          <div className="histori-nav">
            <button className="btn-back" onClick={seeInicio}>
              <FiArrowLeft />
            </button>
          </div>
          {readHistory}
        </section>
      ) : (
        ""
      )}
    </>
  );
}
