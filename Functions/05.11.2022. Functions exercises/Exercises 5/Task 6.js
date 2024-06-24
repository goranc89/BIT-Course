// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000
function loopOpera() {
  x = 0;
  for (let i = 1; i < 1001; i++) {
    if (i % 2 == 0) {
      x += i;
    }
    if (i % 2 != 0 && i < 500) {
      x -= i;
    }
  }
  x *= 12.5;
  return x;
}
console.log("6. Zadatak: " + loopOpera());
