// 1. Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in objects and their methods, solo or combined. You should use loops only for the 4 and 9 assignment, all others can be solved using built-in object methods.

// 1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 12345 -> 54321

function reverseNumber(num) {
  const reversedNumber = Number(num.toString().split("").reverse().join(""));
  return reversedNumber;
}

console.log(typeof reverseNumber(12345));
console.log(reverseNumber(12345));
