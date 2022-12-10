// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9] 

var arr8 = [4, 5, 6, 2];
var arr8A = [3, 8, 11, 9];
var arr8B = []

for (var i = 0; i < arr8.length; i++){
  arr8B[i] = arr8[i]
}

for (var j = 0; j < arr8A.length; j++) {
  arr8B[arr8.length + j] = arr8A[j];
}
console.log(arr8B);

// or

// var arrA = [4, 5, 6, 2];
// var arrB = [3, 8, 11, 9];
// var arrC = [];

// for (var i = 0; i < arrA.length; i++) {
//     arrC[arrC.length] = arrA[i]
// }
// for (var j = 0; j < arrB.length; j++) {
//     arrC[arrC.length] = arrB[j]
// }
// console.log(arrC);

// or

// var a = [4, 5, 6, 2, 5, 9];                 // if arrays doesn't the same length, this solution is the best.
// var b = [3, 8, 11, 9];
// var c = [];
// var y = 0;

// for (x = 0; x < a.length + b.length; x++) {
//     if (x < a.length) {
//         c[x] = a[x]; 
//     } else {
//         c[x] = b[y]; 
//         y++;
//     }
// }
// console.log(c);