// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var arr3 = [4, 2, 2, -1, 6];
var min = arr3[0];
var x = 0;

for (var i = 0; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }else {
    min = min;
  }
}

for (var j = 0; j < arr3.length; j++) {
  if (min === arr3[j]) {
    x = j;
  }
}
console.log(min, x);