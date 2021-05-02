export default function insertionsortAlgo(arr) {
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
  return arr1;
}
