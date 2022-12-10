a = 1;
b = 1;
var result = "";

if (a > 2 || a < -2) {
  result = a + " is not between -2 and 2";
} else if ((a === 0) & (b === 0)) {
  result = "both numbers are zeroes";
} else if (a === b) {
  result = "numbers are equal";
} else {
  result = "I give up!";
}
console.log(result);
