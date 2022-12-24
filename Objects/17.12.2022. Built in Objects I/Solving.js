// Try to use built-in object methods to solve some of the problems here

// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
// var someArray = [2, 4, 7, 11, -2, 1];
// var newLength = someArray.push(2, 4, 7, 11, -2, 1);
// console.log(someArray);

// var duplicates = function (arr) {
//   var newArr = [];
//   arr.forEach(function (el) {
//     newArr.push(el, el);
//   });
//   return newArr;
// };

// console.log(duplicates([2, 4, 7, 11, -2, 1]));

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]
// let chars = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

// let uniqueChars = chars.filter((element, index) => {
//   return chars.indexOf(element) === index;

// });

// console.log(uniqueChars);
// console.log(uniqueChars.sort()); //not good result

// need newArr.sort(function (a, b) {
//     return a - b;
//   });

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function check(arr) {
//   var oddNumber = false;
//   if (arr.length % 2 !== 0) {
//     oddNumber = true;
//   }
//   return oddNumber;
// }

// // var givenArr = check([1, 2, 9, 2, 1]);
// // console.log(givenArr);
// console.log(check([1, 2, 9, 2, 1]));

// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// var lessMiddleElement = function (array) {
//   if (array.length % 2 === 0) {
//     return "Invalid.";
//   }
//   var middle = Math.floor(array.length / 2);
//   var count = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < array[middle]) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(lessMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// console.log(Math.floor(32.65));
// console.log(Math.floor(8.1));
// console.log(Math.floor(-4.2));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// var myArray = [1, 4, -2, 11, 8, 1, -2, 3];
// var m = Math.min(...myArray);
// console.log(m);

// function smallEl(arr) {
//   var obj = {};
//   var min = Math.min(...arr);
//   var minLastIndex = arr.lastIndexOf(min);
//   obj = { min, minLastIndex };
//   return obj;
// }

// console.log(smallEl([1, 4, -2, 11, 8, 1, -2, 3]));

// var myArray = [1, 4, -2, 11, 8, 1, -2, 3];
// var m = Math.min(...myArray);
// console.log(m);
// function minElement(array) {
//   var obj = {};
//   var min = Math.min(...array);
//   var minLastIndex = array.lastIndexOf(min);
//   obj = { min, minLastIndex };
//   return obj;
// }
// console.log(minElement([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: ["JavaScript", "Programming", "fun", "product"]
// Output: ["Programming", ‘product"]

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

// function Array(arr, a) {
//   var newArray = arr.filter(function (el) {
//     return el < a;
//   });
//   return newArray;
// }

// console.log(Array([2, 3, 8, -2, 11, 4], 6));

// Input: ["JavaScript", "Programming", "fun", "product"];
// Output: ["Programming", "product"];

// function Array2(arr) {
//   var newArray2 = arr.filter(function (el) {
//     return el == "Pro";
//   });
//   return newArray2;
// }
// console.log(Array2(["JavaScript", "Programming", "fun", "product"]));

// function findElement(arr) {
//   var a = "pro";
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (a === arr[i].toLowerCase().slice(0, 3)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(findElement(["JavaScript", "Programming", "fun", "product"]));

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

// function List(name, price) {
//   (this.name = name), (this.price = price);
// }

// var list = [];
// var list1 = new List("eggs", 180);
// var list2 = new List("tunna", 250);
// var list3 = new List("avocado", 130);
// var list4 = new List("lemon", 50);
// list.push(list1);
// list.push(list2);
// list.push(list3);
// list.push(list4);

// function totalPrice(total) {
//   var sum = 0;
//   for (var i = 0; i < total.length; i++) {
//     sum += total[i].price;
//   }
//   return "Total price of list is: " + sum;
// }

// console.log(totalPrice(list));

// var average = function (shopping) {
//   var sum = 0;
//   for (var i = 0; i < shopping.length; i++) {
//     sum += shopping[i].price;
//   }
//   return sum;
// };

// var avg = average(list) / list.length;
// console.log(avg.toFixed(3));
