// zadatak 5.

function squareStar(num) {
  var string = "";
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      if (i === 0 || i === num - 1) {
        string += "*";
      } else {
        if (j === 0 || j === num - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  return string;
}
let num = squareStar(5);
console.log(num);
