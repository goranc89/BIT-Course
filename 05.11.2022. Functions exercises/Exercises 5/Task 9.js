// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
function displaysCombinations() {
  m = [];
  k = 0;
  for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 8; j++) {
      if (i != j) {
        m[k] = ["(" + i, j + ")"];
        k++;
      }
    }
  }
  return m;
}
console.log("9. Zadatak: " + displaysCombinations());
