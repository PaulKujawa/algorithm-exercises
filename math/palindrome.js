// O(N/2)
function isPalindrome(str) {
  if (str.length % 2 === 0) {
    return false;
  }

  str = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
