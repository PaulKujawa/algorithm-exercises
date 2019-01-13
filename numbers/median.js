function ofEvenLength(arr) {
  return arr.length % 2 === 0;
}

function median(arr) {
  if (arr.length <= 2) {
    return arr;
  }

  if (ofEvenLength(arr)) {
    const i = arr.length / 2;
    return [arr[i - 1], arr[i]];
  }

  const i = Math.floor(arr.length / 2);
  return [arr[i]];
}

module.exports = median;
