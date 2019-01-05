// O(N.length)
function missingNumberInUnsortedList(n) {
  // Gaußsche Summenformel
  const totalN = n.length + 1;
  const expectedSum = (totalN * (totalN + 1)) / 2;

  return expectedSum - n.reduce((acc, v) => acc + v);
}
