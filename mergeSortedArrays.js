// O( Max(a.length, b.length) )
function getMergedSortedArrays(a, b) {
  const merged = [];

  if (!a.length) {
    return b;
  }

  if (!b.length) {
    return a;
  }

  while (a[0] !== undefined || b[0] !== undefined) {
    if (a[0] !== undefined && a[0] < b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  return merged;
}
