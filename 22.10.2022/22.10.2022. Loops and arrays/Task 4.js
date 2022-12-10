// 4.	Write a program to compute the sum and product of an array of integers.

var array = [1, 5, 6, 3], x = 0, y = 1;
for (var i = 0; i < array.length; i++) {
    x = x + array[i];
    y = y * array[i];

}
console.log("sum of numbers is: " + x);
console.log("product of numbers is: " + y);