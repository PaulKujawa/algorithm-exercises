// O(A+B)
// non-mutating version 87f56dddded8882dacccdc38c58cd2e882b3b6be
function mergeSortedArrays(a, b, lt = (a, b) => a < b) {
  const merged = [];

  while (a.length && b.length) {
    if (lt(a[0], b[0])) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  return [...merged, ...a, ...b];
}

// O(N log N)
function mergeSort(arr) {
  const array = [...arr];

  if (array.length < 2) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middleIndex);
  const rightSide = array.slice(middleIndex);

  return mergeSortedArrays(mergeSort(leftSide), mergeSort(rightSide));
}

module.exports = mergeSort;
