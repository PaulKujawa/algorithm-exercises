// O(N)
function sumTwoHighestNumbers(arr) {
  const summands = [0, 0];

  for (const elem of arr) {
    summands.push(elem);
    summands.sort();
    summands.shift();
  }

  return summands[0] + summands[1];
}

module.exports = sumTwoHighestNumbers;
