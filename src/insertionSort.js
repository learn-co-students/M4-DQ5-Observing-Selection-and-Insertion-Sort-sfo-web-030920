function insertionSort(arr) {
  for (let startIdx = 0; startIdx < arr.length; startIdx++) {
    for (
      let currentIdx = startIdx;
      currentIdx > 0 && arr[currentIdx - 1] > arr[currentIdx];
      currentIdx--
    ) {
      let temp = arr[currentIdx];
      arr[currentIdx] = arr[currentIdx - 1];
      arr[currentIdx - 1] = temp;
    }
  }
  return arr;
}
