import { Draw } from "./Draw";
import { Winner } from "./Winner";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Home() {
  const X = (
    <FontAwesomeIcon icon={faX} size="5x" style={{ color: "tomato" }} />
  );
  const O = <FontAwesomeIcon icon={faO} size="5x" style={{ color: "blue" }} />;
  const [turn, setTurn] = useState(false); //false = X // true = O
  const [one, setOne] = useState("");
  const [onel, setOnel] = useState("");
  const [count, setCount] = useState(0);

  var winner = "";
  var draw = false;
  function changeOne() {
    if (one === "") {
      if (turn === false) {
        setOne(X);
        setOnel("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setOne(O);
        setOnel("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [two, setTwo] = useState("");
  const [twol, setTwol] = useState("");
  function changeTwo() {
    if (two === "") {
      if (turn === false) {
        setTwo(X);
        setTwol("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setTwo(O);
        setTwol("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [thr, setThr] = useState("");
  const [thrl, setThrl] = useState("");
  function changeThr() {
    if (thr === "") {
      if (turn === false) {
        setThr(X);
        setThrl("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setThr(O);
        setThrl("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [fou, setFou] = useState("");
  const [foul, setFoul] = useState("");
  function changeFou() {
    if (fou === "") {
      if (turn === false) {
        setFou(X);
        setFoul("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setFou(O);
        setFoul("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [fiv, setFiv] = useState("");
  const [fivl, setFivl] = useState("");
  function changeFiv() {
    if (fiv === "") {
      if (turn === false) {
        setFiv(X);
        setFivl("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setFiv(O);
        setFivl("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [six, setSix] = useState("");
  const [sixl, setSixl] = useState("");
  function changeSix() {
    if (six === "") {
      if (turn === false) {
        setSix(X);
        setSixl("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setSix(O);
        setSixl("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [sev, setSev] = useState("");
  const [sevl, setSevl] = useState("");
  function changeSev() {
    if (sev === "") {
      if (turn === false) {
        setSev(X);
        setSevl("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setSev(O);
        setSevl("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [eig, setEig] = useState("");
  const [eigl, setEigl] = useState("");
  function changeEig() {
    if (eig === "") {
      if (turn === false) {
        setEig(X);
        setEigl("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setEig(O);
        setEigl("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }
  const [nin, setNin] = useState("");
  const [ninl, setNinl] = useState("");
  function changeNin() {
    if (nin === "") {
      if (turn === false) {
        setNin(X);
        setNinl("x");
        setTurn(!turn);
        setCount(count + 1);
      } else {
        setNin(O);
        setNinl("o");
        setTurn(!turn);
        setCount(count + 1);
      }
    }
  }

  function gameReset() {
    setTurn(false);
    setOne("");
    setOnel("");
    setTwo("");
    setTwol("");
    setThr("");
    setThrl("");
    setFou("");
    setFoul("");
    setFiv("");
    setFivl("");
    setSix("");
    setSixl("");
    setSev("");
    setSevl("");
    setEig("");
    setEigl("");
    setNin("");
    setNinl("");
    setCount(0);
    winner = "";
  }

  if (onel === "x") {
    if (twol === "x" && thrl === "x") {
      winner = "x";
    } else if (foul === "x" && sevl === "x") {
      winner = "x";
    } else if (fivl === "x" && ninl === "x") {
      winner = "x";
    }
  }
  if (onel === "o") {
    if (twol === "o" && thrl === "o") {
      winner = "o";
    } else if (foul === "o" && sevl === "o") {
      winner = "o";
    } else if (fivl === "o" && ninl === "o") {
      winner = "o";
    }
  }

  if (twol === "x") {
    if (fivl === "x" && eigl === "x") {
      winner = "x";
    }
  }

  if (twol === "o") {
    if (fivl === "o" && eigl === "o") {
      winner = "o";
    }
  }

  if (thrl === "x") {
    if (fivl === "x" && sevl === "x") {
      winner = "x";
    } else if (sixl === "x" && ninl === "x") {
      winner = "x";
    }
  }
  if (thrl === "o") {
    if (fivl === "o" && sevl === "o") {
      winner = "o";
    } else if (sixl === "o" && ninl === "o") {
      winner = "o";
    }
  }

  if (foul === "x") {
    if (fivl === "x" && sixl === "x") {
      winner = "x";
    }
  }
  if (foul === "o") {
    if (fivl === "o" && sixl === "o") {
      winner = "o";
    }
  }

  if (sevl === "x") {
    if (eigl === "x" && ninl === "x") {
      winner = "x";
    }
  }
  if (sevl === "o") {
    if (eigl === "o" && ninl === "o") {
      winner = "o";
    }
  }

  if (count === 9 && winner === "") {
    draw = true;
  }
  return (
    <>
      {draw ? <Draw gameReset={gameReset} /> : null}
      {winner ? <Winner winner={winner} gameReset={gameReset} /> : null}
      <div className="App">
        <div className="tic">
          <img
            alt="tictactoe-logo"
            src={require("./logo.png")}
            width="300px"
            style={{ marginBottom: "30px" }}
          />
          <div className="tic-table__row">
            <div className="tic-table" onClick={changeOne}>
              {one}
            </div>
            <div className="tic-table" onClick={changeTwo}>
              {two}
            </div>
            <div className="tic-table" onClick={changeThr}>
              {thr}
            </div>
          </div>
          <div className="tic-table__row">
            <div className="tic-table" onClick={changeFou}>
              {fou}
            </div>
            <div className="tic-table" onClick={changeFiv}>
              {fiv}
            </div>
            <div className="tic-table" onClick={changeSix}>
              {six}
            </div>
          </div>
          <div className="tic-table__row">
            <div className="tic-table" onClick={changeSev}>
              {sev}
            </div>
            <div className="tic-table" onClick={changeEig}>
              {eig}
            </div>
            <div className="tic-table" onClick={changeNin}>
              {nin}
            </div>
          </div>
          <button className="tic-reset__btn" onClick={gameReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
