/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48 */

var num1 = 12;
var num2 = 5;

var num3 = 8;
var num4 = 8;

var result = '';

if (num1 === num2) {
    result = num1 * 3 + num2 * 3;
} else {
    result = num1 + num2;
}

console.log(result);

if (num3 === num4) {
    result = num3 * 3 + num4 * 3;
} else {
    result = num3 + num4;
}

console.log(result);