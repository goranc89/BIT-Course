// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9
function greatestDivisor(a, b) {
  k = 1;
  for (let i = 1; i < Math.min(a, b) + 1; i++) {
    if (a % i == 0 && b % i == 0) {
      k = i;
    }
  }
  return k;
}
console.log("12. Zadatak: " + greatestDivisor(81, 9));
