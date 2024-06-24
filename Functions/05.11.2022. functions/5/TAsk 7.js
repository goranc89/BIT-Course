/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa
*/

function newString(array) {
  var newString = "";
  var currentString = "";
  var n = 2;
  console.log(typeof array[0]);

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] == "string" && array[i].length >= n) {
      currentString = array[i];
      for (var j = 0; j < n; j++) {
        newString = newString + currentString[i];
      }
    }
  }

  return newString;
}
console.log(
  newString([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);
