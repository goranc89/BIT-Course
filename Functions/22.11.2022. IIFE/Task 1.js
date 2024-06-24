// IIFE = Immediately Invoked Function Expressions
// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.

// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

function swap(arra) {
  [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
  return arra;
}
console.log(swap([4, 5, 11, 9]));
