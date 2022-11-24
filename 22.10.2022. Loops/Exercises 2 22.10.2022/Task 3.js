/*
3.	Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var a = [4, 2, 2, -1, 6];
var x = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] < a[x]) {
    x = i;
  }
}
console.log(a[x], x);
