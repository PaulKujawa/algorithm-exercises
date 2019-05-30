// O(A+B)
// non-mutating version 87f56dddded8882dacccdc38c58cd2e882b3b6be
function mergeSortedArrays(a, b) {
  const merged = [];

  while (a.length && b.length) {
    const elem = a[0] < b[0] ? a.shift() : b.shift();
    merged.push(elem);
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
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return mergeSortedArrays(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
