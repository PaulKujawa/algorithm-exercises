// idea from http://www.thatjsdude.com/interview/js1.html#mergeSotedArray

// O(A+B)
function mergedSortedArrays(a, b, compare = (a, b) => a < b) {
  if (!a.length || !b.length) {
    return [...a, ...b];
  }

  const merged = [];
  // O(A+B)
  a = a.slice();
  b = b.slice();

  // O(A+B)
  while (a[0] !== undefined || b[0] !== undefined) {
    if (a[0] !== undefined && compare(a[0], b[0])) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  return merged;
}

// O((A+B) log (A+B))
function mergedSortedArraysSort(a, b, sorter = (x, y) => x - y) {
  return [...a, ...b].sort(sorter);
}

module.exports = {
  mergedSortedArrays,
  mergedSortedArraysSort
};
