// O(N)
function mode(arr) {
  const frequency = {};

  // O(N)
  for (const numb of arr) {
    frequency[numb] = ++frequency[numb] || 0;
  }

  const winner = { frequency: 0, numbs: [] };

  // O(N)
  for (const numb of Object.keys(frequency)) {
    if (winner.frequency > frequency[numb]) {
      continue;
    }

    if (winner.frequency === frequency[numb]) {
      winner.numbs.push(+numb);
      continue;
    }

    winner.frequency = frequency[numb];
    winner.numbs = [+numb];
  }

  return winner.numbs;
}

module.exports = mode;
