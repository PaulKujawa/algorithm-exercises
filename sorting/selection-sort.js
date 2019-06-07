const maxNumber = arr =>
  arr.reduce((max, elem, idx) => (elem > max.elem ? { elem, idx } : max), {
    elem: arr[0],
    idx: 0
  });

// O(N^2)
function selectionSort(list) {
  const arr = [...list];
  const sorted = [];

  while (arr.length) {
    const { idx } = maxNumber(arr);
    sorted.unshift(...arr.splice(idx, 1));
  }

  return sorted;
}

module.exports = selectionSort;
