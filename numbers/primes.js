// Sieve of Eratosthenes
function getPrimes(n) {
  const candidates = new Array(n + 1);
  candidates.fill(true);
  candidates[0] = candidates[1] = false;

  for (let d = 2; d <= Math.floor(Math.sqrt(n)); d++) {
    for (let m = 2; d * m <= n; m++) {
      candidates[d * m] = false;
    }
  }

  const reducer = (primes, candidate, i) => (candidate ? [...primes, i] : primes);
  return candidates.reduce(reducer, []);
}

module.exports = getPrimes;

