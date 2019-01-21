function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const elem = arr[i];
    elem < pivot ? left.push(elem) : right.push(elem);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
