/* 9. Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. Display the number of possible combinations, 
as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/
function combinations(a, b) {
  var result = "";
  var count = 0;

  for (var i = a; i <= b; i++) {
    for (var j = a; j <= b; j++) {
      if (i !== j) {
        result += " (" + i + ",";
        result += j + ")";
        count++;
      }
    }
  }
  return result + " The number of possible combinations is " + count + ".";
}

console.log(combinations(1, 7));
