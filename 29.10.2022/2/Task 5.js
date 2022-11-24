// Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

var result = function (string, p) {
  for (var i = string.length - 1; i >= 0; i--) {
    var element = string[i];
    if (element === p) {
      return i + 1;
    }
  }
  return -1;
};
console.log(result("My random string", "n"));

// indexOf
