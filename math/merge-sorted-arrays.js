// idea from http://www.thatjsdude.com/interview/js1.html#mergeSotedArray

// O(A+B)
function mergedSortedArraysV1(a, b) {
  if (!a.length || !b.length) {
    return [...a, ...b];
  }

  const merged = [];
  // O(A+B)
  a = a.slice();
  b = b.slice();

  // O(A+B)
  while (a[0] !== undefined || b[0] !== undefined) {
    if (a[0] !== undefined && a[0] < b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  return merged;
}

// O((A+B) log (A+B))
function mergedSortedArraysV2(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}

module.exports = {
  mergedSortedArraysV1,
  mergedSortedArraysV2
};
