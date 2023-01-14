// Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var minArray = function arrayMin(a) {
  var mini = 0;
  var ind = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
      mini = a[i];
      ind = i;
    }
  }
  return [mini, ind];
};
console.log(minArray([4, 2, 2, -1, 6]));
