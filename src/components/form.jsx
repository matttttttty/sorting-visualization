import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../components/form.css";
import {
  arrayAdded,
  sortAlgo,
  speedAdded,
  algoAdded,
} from "../store/bubbleSort";
import getrandomArrayOfLength from "../utils/random";

const SettingBar = () => {
  const [count, setCount] = useState(100);
  const [speed, setSpeed] = useState(1);
  const [algo, setAlgo] = useState("BubbleSort");
  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="numbers of bar">numbers of bar</label>
        <input
          id="numbers of bar"
          type="number"
          className="input"
          placeholder="100"
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="btn"
          onClick={() =>
            dispatch(arrayAdded(getrandomArrayOfLength(count, 400)))
          }
        >
          set
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="speed">Speed(ms)</label>
        <input
          id="speed"
          type="number"
          placeholder="1ms"
          onChange={(e) => setSpeed(e.target.value)}
          className="input"
        />
        <button className="btn" onClick={() => dispatch(speedAdded({ speed }))}>
          set
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="algo">Select Algo</label>
        <select
          name="cars"
          id="algo"
          type="text"
          className="input"
          onChange={(e) => setAlgo(e.target.value)}
        >
          <option value="bubblesort" defaultValue>
            bubblesort
          </option>
          <option value="selectionsort">selectionsort</option>
          <option value="insertionsort">insertionsort</option>
          <option value="quiksort">quiksort</option>
          <option value="mergesort">mergesort</option>
        </select>
        <button className="btn" onClick={() => dispatch(algoAdded({ algo }))}>
          set
        </button>
      </div>
      <button onClick={() => dispatch(sortAlgo())}>start</button>
    </div>
  );
};

export default SettingBar;
