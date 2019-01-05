// Greatest Common Divisor

// O(N)
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
