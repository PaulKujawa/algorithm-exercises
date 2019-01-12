// idea from http://www.thatjsdude.com/interview/js1.html#greatestCommonDivisor

// O(N)
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

module.exports = gcd;