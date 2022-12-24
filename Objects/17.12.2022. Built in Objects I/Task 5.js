// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function Array(arr, a) {
  var newArray = arr.filter(function (el) {
    return el < a;
  });
  return newArray;
}

console.log("5a");
console.log(Array([2, 3, 8, -2, 11, 4], 6));

function findElement(arr) {
  var a = "pro";
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (a === arr[i].toLowerCase().slice(0, 3)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log("5b");
console.log(findElement(["JavaScript", "Programming", "fun", "product"]));
