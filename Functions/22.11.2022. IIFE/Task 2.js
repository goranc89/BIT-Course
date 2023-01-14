// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

// a = 4;
// b = 5;

// output = a * b;
// console.log(output);

var calc = (function (a, b) {
  return a * b;
})(4, 5);

console.log(calc);
