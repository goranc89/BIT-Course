var a = 100;
var b = 100;

var result = '';

if (a > b) {
    result = a + ' is ' + 'greater than' + b;
} else if (a === b) {
    result = a + ' is ' + 'equal to ' + b;
} else {
    result = b + ' is ' + 'greater than ' + a;
}

console.log(result);