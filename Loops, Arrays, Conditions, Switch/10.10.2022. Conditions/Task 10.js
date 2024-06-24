/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/

var num1 = 13;
var num2 = 34;
var num3 = 256;

var result1 = '';

if (num1 >= 20 && num1 <= 100) {
    result = '20 ⇔ 100';
} else if (num1 >= 100 && num1 <= 400) {
    result = '100 ⇔ 400';
} else {
    result = '-';
}

console.log(result);

if (num2 >= 20 && num2 <= 100) {
    result = '20 ⇔ 100';
} else if (num2 >= 100 && num2 <= 400) {
    result = '100 ⇔ 400';
} else {
    result = '-';
}

console.log(result);

if (num3 >= 20 && num3 <= 100) {
    result = '20 ⇔ 100';
} else if (num3 >= 100 && num3 <= 400) {
    result = '100 ⇔ 400';
} else {
    result = '-';
}

console.log(result);