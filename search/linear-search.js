// O(N)
function linearSearch(arr, needle) {
  for (const e of arr) {
    if (e === needle) {
      return true;
    }
  }
}

module.exports = linearSearch;
