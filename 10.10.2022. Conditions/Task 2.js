var num1 = -5;
var num3 = -6;
var num4 = 0;
var num5 = -1;

var result = '';

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    result = num1;
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    result = num2;
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    result = num3;
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    result = num4;
} else if (num5 > num1 && num5 > num3 && num5 > num4 && num5 > num2) {
    result = num5;
} else {
    result = "it's not larger";
}

console.log(result);