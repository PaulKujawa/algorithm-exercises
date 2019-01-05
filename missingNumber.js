// O(N.length)
function missingNumberInUnsortedList(arr) {
  // Gaußsche Summenformel
  const totalN = arr.length + 1;
  const expectedSum = (totalN * (totalN + 1)) / 2;

  return expectedSum - arr.reduce((acc, v) => acc + v);
}
