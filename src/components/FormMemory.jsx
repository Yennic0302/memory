import "./FormMemory.css";
import TitleMemory from "./TitleMemory";

export default function FormMemory({
  seeForm,
  setForm,
  form,
  setSeeForm,
  setIsStart,
}) {
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeeForm(false);
    setIsStart(true);
  };

  return (
    <>
      {seeForm ? (
        <>
          <div className="game-form-conatiner">
            <div>
              <TitleMemory />
            </div>
            <div className="main-container">
              <div className="game-description">
                <p>
                  Memory is a game that consists of finding the pairs with the
                  same printed figure using memory.
                </p>
              </div>

              <div className="form-container-rigth">
                <form className="form-conatiner" onSubmit={handleSubmit}>
                  <h3>Options Game</h3>
                  <div className="select-container">
                    <select
                      className="form-selectG"
                      name="dificult"
                      onChange={handleChange}
                      defaultValue="8"
                    >
                      <option value="8">ease</option>
                      <option value="12">medium</option>
                      <option value="16">hart</option>
                    </select>

                    <select
                      className="form-selectG"
                      name="time"
                      onChange={handleChange}
                      defaultValue="60"
                    >
                      <option value="60">01:00</option>
                      <option value="40">00:40</option>
                      <option value="30">00:30</option>
                    </select>

                    <select
                      className="form-selectG"
                      name="category"
                      onChange={handleChange}
                      defaultValue="anime"
                    >
                      <option value="anime">Anime</option>
                      <option value="cities">Cities</option>
                    </select>
                  </div>
                  <input className="btn-start" type="submit" value="Start" />
                </form>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>copyright© Yennic0302 2022</p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
