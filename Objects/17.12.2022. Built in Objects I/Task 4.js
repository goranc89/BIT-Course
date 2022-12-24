// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function minElement(array) {
  var obj = {};
  var min = Math.min(...array);
  var minLastIndex = array.lastIndexOf(min);
  obj = { min, minLastIndex };
  return obj;
}
console.log("4.");
console.log(minElement([1, 4, -2, 11, 8, 1, -2, 3]));
let arr = [1, 4, -2, 11, 8, 1, -2, 3];
