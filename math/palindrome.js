// O(N)
function isPalindrome(str) {
  // O(N)
  str = str.replace(/\W/g, "").toLowerCase();

  if (str.length % 2 === 0) {
    return false;
  }

  /*
   * return str === [...str].reverse().join('');
   * would be shorter but slower
   *
   * O(N)
   */
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
