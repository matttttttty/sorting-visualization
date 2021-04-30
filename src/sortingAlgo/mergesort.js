export default function mergeSort(arr) {
  const len = arr.length;
  let result = [];
  let arr1 = [];
  let block;
  let start;

  for (block = 1; block < len * 2; block *= 2) {
    for (start = 0; start < len; start += 2 * block) {
      let low = start;
      let mid = start + block < len ? start + block : len;
      let high = start + 2 * block < len ? start + 2 * block : len;

      let start1 = low,
        end1 = mid;
      let start2 = mid,
        end2 = high;
      //开始对两个block进行归并排序
      while (start1 < end1 && start2 < end2) {
        result[low++] =
          arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
      }
      while (start1 < end1) {
        result[low++] = arr[start1++];
      }
      while (start2 < end2) {
        result[low++] = arr[start2++];
      }
      let relen = result.length;
      if (relen < len) result = result.concat(arr.slice(relen));
      arr1.push([...result]);
    }
    let temp = arr;
    arr = result;
    result = temp;
  }
  return arr1;
}
