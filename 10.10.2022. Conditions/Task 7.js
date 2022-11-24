/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38 */

var a = 11;
var b = 32;
var x = 13;

var result = '';

if (a > x) {
    result = (a - x) * 2;
} else if (a === x) {
    result = 'The numbers are equal!';
} else {
    result = x - a;
}

console.log(result);

if (b > x) {
    result = (b - x) * 2;
} else if (b === x) {
    result = 'The numbers are equal!';
} else {
    result = b - x;
}

console.log(result);