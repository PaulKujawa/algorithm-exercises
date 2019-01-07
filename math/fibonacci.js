// O(N)
function getFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  
  if (n === 1 || n === 2) {
    return 1;
  }

  let fib = [0, 1];

  // O(N)
  for (let i = 2; i <= n; i++) {
    fib = [fib[1], fib[0] + fib[1]];
  }

  return fib[1];
}

module.exports = getFibonacci;