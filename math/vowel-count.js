// O(N)
function getVowelCount(str) {
  const isVowel = char => ["a", "e", "o", "u"].includes(char);

  return [...str.toLowerCase()].filter(isVowel).length;
}

function getVowelCountRegex(str) {
  return (str.toLowerCase().match(/[aeiou]/g) || []).length;
}

module.exports = {
  getVowelCount,
  getVowelCountRegex
};
