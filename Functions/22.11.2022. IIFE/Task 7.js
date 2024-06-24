// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var array = [2, 8, 11, 4, 9, 3];

var callback = function (x) {
  return x % 2 !== 0;
};

var filterOddNumbers = function (a, b) {
  return a.filter(b);
};

console.log(filterOddNumbers(array, callback));
