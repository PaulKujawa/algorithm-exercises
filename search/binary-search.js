// O(log N)
function binarySearch(sortedArr, needle) {
  let low = 0;
  let high = sortedArr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = sortedArr[mid];

    if (guess === needle) {
      return true;
    }

    if (guess > needle) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

module.exports = binarySearch;
