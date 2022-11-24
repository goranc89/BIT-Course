var myNum = 10;
var myNum2 = 7;
var result = '';
var result2 = '';

if (typeof myNum === 'number' && myNum % 2 === 0) {
    result = myNum + ' / ' + 2 + ' = ' + myNum / 2;
} else {
    result = 'X';
}

if (typeof myNum2 === 'number' && myNum2 % 2 === 0) {
    result2 = myNum2 + ' / ' + 2 + ' = ' + myNum2 / 2;
} else {
    result2 = 'X';
}

console.log(result);

console.log(result2);