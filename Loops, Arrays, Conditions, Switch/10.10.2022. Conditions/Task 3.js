var a = 0;
var b = -1;
var c = 4;

var list = '';

if (a >= b && a >= c && b >= c) {
    list = a + ', ' + b + ', ' + c;
} else if (b >= a && b >= c && c >= a) {
    list = b + ', ' + c + ', ' + a;
} else if (c >= a && c >= b && b >= a) {
    list = c + ', ' + b + ', ' + a;
} else {
    list = c + ', ' + a + ', ' + b;
}

console.log(list);