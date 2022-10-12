function ceaserCipher(string) {
  if (typeof string !== "string") {
    return "not a string";
  }
  let wordArray = string.split("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < wordArray.length; i++) {
    if (alphabet.includes(wordArray[i])) {
      if (alphabet.indexOf(wordArray[i]) === 25) {
        wordArray[i] = alphabet[0];
      } else {
        wordArray[i] = alphabet[alphabet.indexOf(wordArray[i]) + 1];
      }
    }
  }
  return wordArray.join("");
}

export default ceaserCipher;
