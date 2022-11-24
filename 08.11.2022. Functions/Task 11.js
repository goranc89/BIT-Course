//Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

function print(array) {
  let result = "";
  let star = "*";
  let newLine = "\n";
  let space = " ";
  let maxWord = array[0].length;

  for (let x = 0; x < array.length; x++) {
    if (maxWord < array[x].length) {
      maxWord = array[x].length;
    }
  }

  for (var i = -1; i <= array.length; i++) {
    for (var j = -2; j <= maxWord + 1; j++) {
      if (i === -1 || i === array.length || j === -2 || j === maxWord + 1) {
        result += star;
      } else if (j >= 0 && j < array[i].length) {
        result += array[i][j];
      } else {
        result += space;
      }
    }
    result += newLine;
  }
  return result;
}

console.log(print(["Sergej", "is", "a", "basketball", "player :)"]));
