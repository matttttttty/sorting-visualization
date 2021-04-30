import { createSlice } from "@reduxjs/toolkit";
import mergeSort from "../sortingAlgo/mergesort";
import quickSort from "../sortingAlgo/quikesort";
import getrandomArrayOfLength from "../utils/random";

const slice = createSlice({
  name: "sortingAlgo",
  initialState: { list: [] },
  reducers: {
    arrayAdded: (state, action) => {
      // console.log(action.payload);
      // console.log(typeof state);
      state.list = action.payload;
    },
  },
});

export const { arrayAdded } = slice.actions;

export const initArray = () => (dispatch, getState) => {
  // const a = getrandomArrayOfLength(100, 400);
  // console.log(a);
  dispatch(arrayAdded(getrandomArrayOfLength(100, 400)));
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const bubblesort = () => async (dispatch, getState) => {
  const arr = [...getState().list];
  console.log("bubblesort");
  console.log(arr === getState());
  const arr1 = [];

  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log(arr);
        arr1.push([...arr]);
      }
    }
  }
  // const length = arr1.length;
  for (const arr of arr1) {
    await sleep(100);
    dispatch(arrayAdded(arr));
  }

  console.log(arr1);
};
export const insertionsort = () => async (dispatch, getState) => {
  const arr = [...getState().list];
  console.log("bubblesort");
  console.log(arr === getState());
  const arr1 = [];

  for (let i = 1; i < arr.length; ++i) {
    let value = arr[i];
    let position = i;
    while (position > 0 && arr[position - 1] > value) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
    arr1.push([...arr]);
  }
  // const length = arr1.length;
  for (const arr of arr1) {
    await sleep(1);
    dispatch(arrayAdded(arr));
  }

  console.log(arr1);
};

export const selectionsort = () => async (dispatch, getState) => {
  const arr = [...getState().list];
  console.log("selectionsort");
  const arr1 = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    arr1.push([...arr]);
  }

  for (const arr of arr1) {
    await sleep(1);
    dispatch(arrayAdded(arr));
  }

  console.log(arr1);
};

export const quiksort = () => async (dispatch, getState) => {
  const arr = [...getState().list];
  console.log("quiksort");

  const arr1 = quickSort(arr);

  for (const arr of arr1) {
    await sleep(1);
    dispatch(arrayAdded(arr));
  }

  console.log(arr1);
};
export const mergesort = () => async (dispatch, getState) => {
  const arr = [...getState().list];
  console.log("mergesort");

  const arr1 = mergeSort(arr);

  for (const arr of arr1) {
    await sleep(1);
    dispatch(arrayAdded(arr));
  }
};

export default slice.reducer;
