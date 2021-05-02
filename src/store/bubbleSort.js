import { createSlice } from "@reduxjs/toolkit";
import mergeSort from "../sortingAlgo/mergesort";
import quickSort from "../sortingAlgo/quikesort";
import insertionsortAlgo from "../sortingAlgo/insertionsort";
import getrandomArrayOfLength from "../utils/random";
import selectionsortAlgo from "../sortingAlgo/selectionsort";
import bubblesortAlgo from "../sortingAlgo/bubblesort";

const slice = createSlice({
  name: "sortingAlgo",
  initialState: { list: [], speed: 1, algo: "bubblesort" },
  reducers: {
    arrayAdded: (state, action) => {
      state.list = action.payload;
    },
    speedAdded: (state, action) => {
      state.speed = action.payload.speed;
    },

    algoAdded: (state, action) => {
      state.algo = action.payload.algo;
    },
  },
});

export const { arrayAdded, speedAdded, algoAdded } = slice.actions;

export const initArray = () => (dispatch, getState) => {
  dispatch(arrayAdded(getrandomArrayOfLength(100, 400)));
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const sortAlgo = () => async (dispatch, getState) => {
  const arr = [...getState().list];
  const speed = getState().speed;
  const algo = getState().algo;
  let arr1 = [];

  switch (algo) {
    case "bubblesort":
      arr1 = bubblesortAlgo(arr);
      break;
    case "selectionsort":
      arr1 = selectionsortAlgo(arr);
      break;
    case "insertionsort":
      arr1 = insertionsortAlgo(arr);
      break;
    case "quiksort":
      arr1 = quickSort(arr);
      break;
    case "mergesort":
      arr1 = mergeSort(arr);
      break;
    default:
      break;
  }
  for (const item of arr1) {
    await sleep(speed);
    dispatch(arrayAdded(item));
  }

  console.log(arr1);
};

export default slice.reducer;
