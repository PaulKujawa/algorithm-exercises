// O(N^2)
function bubbleSort(arr) {
  const array = [...arr];
  let swapped;

  do {
    swapped = false;

    array.forEach((elem, i) => {
      if (elem > array[i + 1]) {
        const temp = elem;
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);

  return array;
}

module.exports = bubbleSort;
