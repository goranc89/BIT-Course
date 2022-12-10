// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var arr3 = [];

for (var i = 0; i < arr1.length; i++) {
    arr3[arr3.length] = arr1[i]
    arr3[arr3.length] = arr2[i]
}
console.log(arr3);