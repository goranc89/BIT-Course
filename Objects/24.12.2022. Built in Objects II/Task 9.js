// 9. Write a program that accepts a string as input and swaps the case of each character. For example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".
// var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var LOWER = "abcdefghijklmnopqrstuvwxyz";
// "The Quick Brown Fox" to "tHE qUICK bROWN fOX"

//using var UPPER and LOWER
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var input = "The Quick Brown Fox";
var output = "";

for (var i = 0; i < input.length; i++) {
  if (UPPER.indexOf(input[i]) !== -1) {
    output += LOWER[UPPER.indexOf(input[i])];
  } else if (LOWER.indexOf(input[i]) !== -1) {
    output += UPPER[LOWER.indexOf(input[i])];
  } else {
    output += input[i];
  }
}

console.log(output);

//solution with using [a - z]

function swapCase(str) {
  let swappedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/)) {
      swappedStr += char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      swappedStr += char.toLowerCase();
    } else {
      swappedStr += char;
    }
  }
  return swappedStr;
}

console.log(swapCase("The Quick Brown Fox"));
