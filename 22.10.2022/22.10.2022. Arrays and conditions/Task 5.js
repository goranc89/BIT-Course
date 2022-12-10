// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16 

var arr5 = [3, 11, -5, -3, 2];
var sumPositivNum = 0;

for (var i = 0; i < arr5.length; i++) {
  if (arr5[i] > 0) {
    sumPositivNum += arr5[i];
  }
}
console.log(sumPositivNum);