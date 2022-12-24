// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function check(arr) {
  var oddNumber = false;
  if (arr.length % 2 !== 0) {
    oddNumber = true;
  }
  return oddNumber;
}

// var givenArr = check([1, 2, 9, 2, 1]);
// console.log(givenArr);
console.log("3a");
console.log(check([1, 2, 9, 2, 1]));

var lessMiddleElement = function (array) {
  if (array.length % 2 === 0) {
    return "Invalid.";
  }
  var middle = Math.floor(array.length / 2);
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[middle]) {
      count++;
    }
  }
  return count;
};
console.log("3b");
console.log(lessMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
