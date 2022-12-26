// 6. Write a function that adds string to the left or right of string, by replacing it"s characters.
// "0000", "123", "l" -> "0123"
// "00000000", "123", "r" -> "12300000"

function addString(string, addition, position) {
  if (position === "l") {
    return addition + string.slice(addition.length);
  } else if (position === "r") {
    return string.slice(0, string.length - addition.length) + addition;
  }
}

console.log(addString("0000", "123", "l"));
console.log(addString("00000000", "123", "r"));
