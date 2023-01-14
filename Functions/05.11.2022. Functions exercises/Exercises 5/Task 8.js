// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
function reversedOrder(array) {
  m = array.split("").reverse().join("");
  return m;
}
console.log("8. Zadatak: " + reversedOrder("Belgrade Institute of Technology"));
