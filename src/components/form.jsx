import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../components/form.css";
import {
  arrayAdded,
  bubblesort,
  initArray,
  selectionsort,
  quiksort,
  mergesort,
} from "../store/bubbleSort";
import getrandomArrayOfLength from "../utils/random";

const SettingBar = () => {
  const [count, setState] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(count);
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="numbers of bar" className="label">
          numbers of bar
        </label>
        <input
          id="numbers of bar"
          type="number"
          className="input"
          placeholder="100"
          onChange={(e) => handleChange(e)}
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
        <label htmlFor="speed" className="label">
          Speed(ms)
        </label>
        <input id="speed" type="number" className="input" />
        <button className="btn">set</button>
      </div>
      <button onClick={() => dispatch(selectionsort())}>start</button>
    </div>
  );
};

export default SettingBar;
