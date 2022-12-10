a = 1;
b = 2;
var result = "";

if (a === 1) {
  if (b === 2) {
    result = " a is 1 and b is 2";
  } else {
    result = "a is 1 but b is not 2";
  }
} else {
  result = "a is not 1, no idea about b";
}
console.log(result);
