function findLargestNumber(list) {
  let largest = list[0];
  let indexOfLargest = 0;

  for (let i = 1; i < list.length; i++) {
    if (largest < list[i]) {
      largest = list[i];
      indexOfLargest = i;
    }
  }

  return indexOfLargest;
}

// O(N^2)
function selectionSort(arr) {
  let newList = [];

  while (arr.length) {
    const indexOfLargest = findLargestNumber(arr);
    newList.push(arr[indexOfLargest]);
    arr.splice(indexOfLargest, 1);
  }

  return newList;
}

module.exports = selectionSort;
