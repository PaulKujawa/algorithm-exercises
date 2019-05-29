// O(N^2)
function selectionSort(list) {
  const indexOfMaxNumber = () => arr.reduce(
    (acc, elem, idx) => elem > acc.max ? {max: elem, idx} : acc,
    {max: arr[0], idx: 0},
  );

  const arr = [...list];
  const sorted = [];

  while (arr.length) {
    const {idx} = indexOfMaxNumber();
    sorted.unshift( ...arr.splice(idx, 1) );
  }
	
  return sorted;
}

module.exports = selectionSort;
