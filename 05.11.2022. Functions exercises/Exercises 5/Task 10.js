// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
// by 1 and by itself).
// Input: 17 | 15
// Output: true | false
function primeNumber(a) {
  k = 0;
  result = true;
  for (let i = 0; i < a + 1; i++) {
    if (a % i == 0) {
      k += 1;
    }
  }
  if (k > 2) {
    result = false;
  }
  return result;
}
console.log("10. Zadatak: " + primeNumber(4));
