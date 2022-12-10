// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var arr6 = [2, 4, -2, 7, -2, 4, 2];
var arr6Second = [];
var count = 0;

for (var i = 0; i<arr6.length; i++) {
    arr6Second[i] = arr6[arr6.length-1-i]
}
console.log(arr6);
console.log(arr6Second);

for (var j = 0; j<arr6.length; j++) {
  if (arr6[j] === arr6Second[j]) {
    count = count +1;
  }
}if (count === arr6.length) {
  console.log('the array is symmetric');
}else {
  console.log('The array isn\'t symmetric.');
}

//  or

// var arr = [2, 4, -2, 7, -2, 4, 2];
// var arr2 = [];
// var equal = 0;

// for (var i = arr.length -1; i >= 0; i--){
//     arr2[arr2.length] = arr[i]
// }
// console.log(arr2);
// console.log(arr);

// for (var j = 0; j < arr2.length; j++) {
//     if (arr2[j] === arr[j]) {
//         equal += 1
//     }
// }
// if (equal === arr.length && equal === arr2.length){
//     console.log('The array is symmetric.');
// }else {
//     console.log('The array isn\'t symmetric.');
// }

// or

// var arr = [3, 4, 12, 8];
// var arr2 = [];
// var equal = 0;

// for (var i = arr.length -1; i >= 0; i--){
//     arr2[arr2.length] = arr[i]
// }
// console.log(arr2);
// console.log(arr);

// for (var j = 0; j < arr2.length; j++) {
//     if (arr2[j] === arr[j]) {
//         equal += 1
//     }
// }
// if (equal === arr.length && equal === arr2.length){
//     console.log('The array is symmetric.');
// }else {
//     console.log('The array isn\'t symmetric.');
// }

// or

// var arr = [2, 4, -2, 7, -2, 4, 2];
// var isSym = true;

// for (var start = 0, end = arr.length - 1; start < end; start++, end--) {
//   if (arr[start] !== arr[end]) {
//     isSym = false;
//   }
// }

// if (isSym === true) {
//   console.log('The array is symmetric.');
// }else {
//   console.log('The array isn\'t symmetric.');
// } 