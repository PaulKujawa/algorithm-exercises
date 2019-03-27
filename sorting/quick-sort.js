// worst case is one pivot per item
// O(N^2)
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // middle index is faster than last one
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let elem of arr) {
    if (elem !== pivot) {
      elem < pivot ? less.push(elem) : greater.push(elem);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

function quickSortFn(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const [pivot, ...rest] = arr;
  const smaller = rest.filter(e => e <= pivot);
  const bigger = rest.filter(e => e > pivot);

  return [...quickSortFn(smaller), pivot, ...quickSortFn(bigger)];
}

module.exports = { quickSort, quickSortFn };
