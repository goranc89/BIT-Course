//Write a function that takes a number and returns array of its digits.

function stringNumber(num) {
  let string = num + "";
  let array = [];
  for (i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  return array;
}
console.log(stringNumber(123456));
