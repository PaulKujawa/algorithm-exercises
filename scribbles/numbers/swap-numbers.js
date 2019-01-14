// idea from http://www.thatjsdude.com/interview/js1.html#swapTemp

// O(1)
function swapNumbers({ a, b }) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return { a, b };
}

module.exports = swapNumbers;
