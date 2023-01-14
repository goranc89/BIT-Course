// Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2 

arr4 = [4, 2, 2, -1, 6];
var min1 = arr4[0];

for (var i = 0; i < arr4.length; i++) {
  if (arr4[i] < min1) {
    min1 = arr4[i];
  }
}

var min2 = arr4[0];
for (var j = 0; j < arr4.length; j++) {
  if (arr4[j] < min2 && arr4[j] !== min1) {
    min2 = arr4[j];
  }
}
console.log(min2);