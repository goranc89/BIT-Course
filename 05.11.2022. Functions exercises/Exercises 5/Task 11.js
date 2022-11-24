// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true
function isPalindrome(a) {
  k = false;
  m = a.split("").reverse().join("");
  if (m == a) {
    k = true;
  }
  return k;
}
console.log("11. Zadatak: " + isPalindrome("abcba"));
