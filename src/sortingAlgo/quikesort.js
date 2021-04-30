let arr1 = [];

export default function quickSort(arr) {
  qsort(arr, 0, arr.length - 1);
  return arr1;
}

function qsort(arr, low, high) {
  if (low >= high) return;
  let pivot = partition(arr, low, high); //将数组分为两部分
  qsort(arr, low, pivot - 1); //递归排序左子数组
  qsort(arr, pivot + 1, high); //递归排序右子数组
}

function partition(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] >= pivot) --high;
    arr[low] = arr[high];
    arr1.push([...arr]);
    while (low < high && arr[low] <= pivot) ++low;
    arr[high] = arr[low];
    arr1.push([...arr]);
  }

  arr[low] = pivot;
  return low;
}
