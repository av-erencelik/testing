function capitalize(word) {
  let array = word.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}
function reverseString(word) {
  let array = word.split("");
  let newArray = array.reverse();
  return newArray.join("");
}

module.exports = {
  reverseString,
  capitalize,
};
