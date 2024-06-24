// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

var ifElement = function array(array, e) {
  var element = "no";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === e) {
      element = "yes";
    }
  }
  return element;
};
console.log(ifElement([5, -4.2, 38, 3, 7], 3));
console.log(ifElement([5, -4.2, 38, 18, 7], 3));

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no
