// O(N^2)
function bubbleSort(sourceList) {
  const list = [...sourceList];
  let swapped;

  do {
    swapped = false;

    list.forEach((elem, idx) => {
      if (elem > list[idx + 1]) {
        list[idx] = list[idx + 1];
        list[idx + 1] = elem;
        swapped = true;
      }
    });
  } while (swapped);

  return list;
}

module.exports = bubbleSort;
