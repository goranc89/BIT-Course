/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true*/

var num1 = 5;
var num2 = 54;

var num3 = 6;
var num4 = 50;

var num5 = 40;
var num6 = 10;

var result = '';
var result2 = '';
var result3 = '';

if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    result = 'true';
} else {
    result = '-';
}

console.log(result);

if (num3 === 50 || num4 === 50 || num3 + num4 === 50) {
    result2 = 'true';
} else {
    result2 = '-';
}

console.log(result2);

if (num5 === 50 || num6 === 50 || num5 + num6 === 50) {
    result3 = 'true';
} else {
    result3 = '-';
}

console.log(result3);