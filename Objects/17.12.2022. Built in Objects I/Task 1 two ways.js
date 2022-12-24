// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var duplicates = function (arr) {
  var newArr = [];
  arr.forEach(function (el) {
    newArr.push(el, el);
  });
  return newArr;
};
console.log("1.");
console.log(duplicates([2, 4, 7, 11, -2, 1]));

// new solution

let dupArray = [2, 4, 7, 11, -2, 1].flatMap((x) => [x, x]);
console.log(dupArray);
