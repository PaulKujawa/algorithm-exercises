// O(N^2)
function selectionSort(list) {
  if (list.length < 2) {
    return list;
  }

  const unsorted = [...list];
  const sorted = [];

  while (unsorted.length) {
    const smallest = unsorted.reduce(
      (min, value, idx) => (min.value > value ? { value, idx } : min),
      { value: unsorted[0], idx: 0 }
    );

    const [selected] = unsorted.splice(smallest.idx, 1);
    sorted.push(selected);
  }

  return sorted;
}

module.exports = selectionSort;
