// O(n)
function getFibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib = [fib[1], fib[0] + fib[1]];
  }

  return fib[1];
}

// O(2^N)
function getFibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return getFibonacciRecursive(n - 2) + getFibonacciRecursive(n - 1);
}
