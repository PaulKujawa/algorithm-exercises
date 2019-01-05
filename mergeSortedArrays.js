// O( Max(a.length, b.length) )
function mergedSortedArraysV1(a, b) {
  if (!a.length) {
    return b;
  }

  if (!b.length) {
    return a;
  }

  const merged = [];

  while (a[0] !== undefined || b[0] !== undefined) {
    if (a[0] !== undefined && a[0] < b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  return merged;
}

function mergedSortedArraysV2(a, b) {
  return a.concat(b).sort();
}
