// 5. Write a program which prints the elements of the following array as a single string.

let x = ["1", "A", "B", "c", "r", true, NaN, undefined];
let result = [];
for (let i = 0; i < x.length; i++) {
  result += x[i];
}
console.log(result);