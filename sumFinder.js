// O(N)
function containsFittingSummandsForSumV2(arr, sum) {
  const fittingDifferences = [];

  for (elem of arr) {
    if (fittingDifferences.includes(elem)) {
      return true;
    }
    fittingDifferences.push(sum - elem);
  }

  return false;
}

// O(N)
function sumOfBiggestNumbers(arr) {
  const summands = [0, 0];

  for (elem of arr) {
    summands.push(elem);
    summands.sort();
    summands.shift();
  }

  return summands[0] + summands[1];
}

console.log(sumOfBiggestNumbers([6, 4, 3, 5, 2, 1, 7]));
