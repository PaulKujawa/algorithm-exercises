// O(N)
function caesarCipher(str, offset) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  return [...str.toLowerCase()]
    .map(char => {
      if (!alphabet.includes(char)) {
        char;
      }

      let i = (alphabet.indexOf(char) + offset) % alphabet.length;
      if (i < 0) {
        i += alphabet.length;
      }

      return alphabet[i];
    })
    .join("");
}

module.exports = caesarCipher;
