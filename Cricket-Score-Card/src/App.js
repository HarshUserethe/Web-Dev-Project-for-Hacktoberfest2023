import "./App.css";
import React, { useState } from "react";

function App() {
  const [run, setRun] = useState(0);
  const [ball, setBall] = useState(0);
  const [wick, setWic] = useState(0);

  function one() {
    setRun(run + 1);
    setBall(ball + 1);
  }
  function two() {
    setRun(run + 2);
    setBall(ball + 1);
  }
  function three() {
    setRun(run + 3);
    setBall(ball + 1);
  }
  function four() {
    setRun(run + 4);
    setBall(ball + 1);
  }
  function six() {
    setRun(run + 6);
    setBall(ball + 1);
  }
  function wide() {
    setRun(run + 1);
  }
  function nb() {
    setRun(run + 1);
  }
  function wic() {
    setBall(ball + 1);
    setWic(wick + 1);
  }

  return (
    <div className="card">
      <h1 className="title">Score Card</h1>
      <div
        className="display"
        style={{
          fontSize: "7vw",
          fontFamily: "'Kanit', sans-serif",
          fontWeight: "600",
        }}
      >
        {run} / {wick} <span className="balls">Balls : {ball}</span>
      </div>
      <div className="buttons">
        <button className="one" onClick={one}>
          1
        </button>
        <button className="two" onClick={two}>
          2
        </button>
        <button className="three" onClick={three}>
          3
        </button>
        <button className="four" onClick={four}>
          Four
        </button>
        <button className="six" onClick={six}>
          Six
        </button>
        <button className="wide" onClick={wide}>
          Wide
        </button>
        <button className="nb" onClick={nb}>
          No Ball
        </button>
        <button className="wick" onClick={wic}>
          Wicket
        </button>
      </div>
    </div>
  );
}

export default App;
