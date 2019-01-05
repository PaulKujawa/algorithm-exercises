// O(N/2)
function isPrimeV1(n) {
  for (let d = 2; d <= n / 2; d++) {
    if (n % d === 0) {
      return false;
    }
  }
  return true;
}

// O(sqrt(n))
function isPrimeV2(n) {
  if (n % 2 === 0) {
    return false;
  }

  // Factors repeat above sqrt; for 36: 2(x18), 3(x12), 6(x6), 12(x3), 18(x2)
  const divisorLimit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= divisorLimit; d += 2) {
    if (n % d === 0) {
      return false;
    }
  }
  return true;
}
