// O(n)
function getPrimes(n) {
  const primes = [];
  let d = 2;

  while (n > 2) {
    if (n % d === 0) {
      primes.push(d);
      n /= d;
    } else {
      d = d === 2 ? 3 : d + 2;
    }
  }
  return primes;
}
