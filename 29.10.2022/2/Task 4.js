// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

// function positionOfOccurr(s) {
//     var position;
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === 'a') {
//             position = i;
//             break;
//         } else {
//             position = -1;
//         }
//     }
//     return position;
// }
// var firstOccurrence = positionOfOccurr("My random string");
// console.log(firstOccurrence);
var x = "n";

function countLetter() {
  let b = "My random string";
  let result = "";
  for (let i = 0; i < b.length; i++) {
    if (b[i] == x) {
      result += b[i];
    }
  }
  return result.length;
}
console.log(countLetter(x));
