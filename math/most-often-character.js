// O(N)
function mostOftenCharacter(str) {
  const cnt = {};

  // O(N)
  for (char of str) {
    cnt[char] !== undefined ? cnt[char]++ : (cnt[char] = 0);
  }

  // O(N)
  return Object.keys(cnt).reduce(
    (response, key) => {
      return cnt[key] > response.count
        ? {
            char: key,
            count: cnt[key]
          }
        : response;
    },
    { char: "", count: 0 }
  ).char;
}

module.exports = mostOftenCharacter;
