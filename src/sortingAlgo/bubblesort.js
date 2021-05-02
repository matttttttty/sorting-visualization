export default function bubblesortAlgo(arr) {
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
  return arr1;
}
