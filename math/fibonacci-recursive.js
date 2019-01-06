// O(2^N)
function getFibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return getFibonacciRecursive(n - 2) + getFibonacciRecursive(n - 1);
}

module.exports = getFibonacciRecursive;