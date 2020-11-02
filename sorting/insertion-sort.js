// O(N^2)
function insertionSort(sourceList) {
  if (sourceList.length < 2) {
    return sourceList;
  }

  const list = [...sourceList];

  for (let r = 1; r < list.length; r++) {
    for (let l = 0; l < r; l++) {
      if (list[r] < list[l]) {
        const [item] = list.splice(r, 1);
        list.splice(l, 0, item);
      }
    }
  }

  return list;
}

module.exports = insertionSort;
