import axios from "axios";
import { useDebugValue, useState } from "react";
import "./App.css";
import winebottle from "./assets/cheers-winter-joy.gif";
import Modal from "./Modal";

function App() {
  const [fA, setFa] = useState(0);
  const [vA, setVa] = useState(0);
  const [cA, setCa] = useState(0);
  const [rS, setRs] = useState(0);
  const [cL, setCl] = useState(0);
  const [sO, setSo] = useState(0);
  const [den, setDen] = useState(0);
  const [pH, setPh] = useState(0);
  const [sU, setSu] = useState(0);
  const [aL, setAl] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const closeModal = (e) => {
    e.preventDefault();
    setLoading(false);
    setData(null);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      fA,
      vA,
      cA,
      rS,
      cL,
      sO,
      den,
      pH,
      sU,
      aL,
    };
    axios
      .post("http://192.168.190.208:3000/api/v1/predict", data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="App">
        {loading && (
          <Modal
            closeModal={(e) => {
              closeModal(e);
            }}
            stat={loading}
          />
        )}
        {data != null && (
          <Modal
            closeModal={(e) => {
              closeModal(e);
            }}
            stat={false}
            data={data}
          />
        )}
        <div>
          <h1>Wine Checker</h1>
        </div>
        <div className="wine-bottle-container">
          <img className="wine-bottle-img" src={winebottle} alt="Wine" />
        </div>

        <div className="check">
          <button
            onClick={(e) => {
              clickHandler(e);
            }}
            className="check-button"
          >
            Check
          </button>
        </div>
        <div className="outer-box">
          <div className="input-container">
            <input
              value={fA === 0 ? null : fA}
              onChange={(e) => {
                setFa(e.target.value);
              }}
              placeholder="Fixed Acidity"
              className="input-box"
              type="number"
            />
          </div>
          <div className="input-container">
            <input
              value={vA === 0 ? null : vA}
              onChange={(e) => {
                setVa(e.target.value);
              }}
              placeholder="Volatile Acidity"
              className="input-box"
              type="number"
            />
          </div>
        </div>

        <div className="outer-box">
          <div className="input-container">
            <input
              value={cA === 0 ? null : cA}
              onChange={(e) => {
                setCa(e.target.value);
              }}
              placeholder="Citric Acid"
              className="input-box"
              type="number"
            />
          </div>
          <div className="input-container">
            <input
              value={rS === 0 ? null : rS}
              onChange={(e) => {
                setRs(e.target.value);
              }}
              placeholder="Residual Sugar"
              className="input-box"
              type="number"
            />
          </div>
        </div>

        <div className="outer-box">
          <div className="input-container">
            <input
              value={cL === 0 ? null : cL}
              onChange={(e) => {
                setCl(e.target.value);
              }}
              placeholder="Chlorides"
              className="input-box"
              type="number"
            />
          </div>
          <div className="input-container">
            <input
              value={sO === 0 ? null : sO}
              onChange={(e) => {
                setSo(e.target.value);
              }}
              placeholder="Free SO2"
              className="input-box"
              type="number"
            />
          </div>
        </div>

        <div className="outer-box">
          <div className="input-container">
            <input
              value={den === 0 ? null : den}
              onChange={(e) => {
                setDen(e.target.value);
              }}
              placeholder="Density"
              className="input-box"
              type="number"
            />
          </div>
          <div className="input-container">
            <input
              value={pH === 0 ? null : pH}
              onChange={(e) => {
                setPh(e.target.value);
              }}
              placeholder="pH"
              className="input-box"
              type="number"
            />
          </div>
        </div>

        <div className="outer-box">
          <div className="input-container">
            <input
              value={sU === 0 ? null : sU}
              onChange={(e) => {
                setSu(e.target.value);
              }}
              placeholder="Sulphates"
              className="input-box"
              type="number"
            />
          </div>
          <div className="input-container">
            <input
              value={aL === 0 ? null : aL}
              onChange={(e) => {
                setAl(e.target.value);
              }}
              placeholder="Alcohol"
              className="input-box"
              type="number"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
