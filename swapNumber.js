// O(1)
function swapNumbers({ a, b }) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return { a, b };
}
