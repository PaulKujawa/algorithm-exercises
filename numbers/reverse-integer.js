// O(N)
function reverseInteger(int) {
  return parseInt([...String(int)].reverse().join("")) * Math.sign(int);
}

module.exports = reverseInteger;
