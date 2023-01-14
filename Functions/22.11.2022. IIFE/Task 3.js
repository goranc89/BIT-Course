// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

var replaceM = function (str) {
  var word = str;
  var replaceMm = (function (a) {
    var newWord = "",
      count = 0;

    for (var i = 0; i < word.length; i++) {
      if (word[i] === "m") {
        newWord += "*";
        count++;
      } else if (word[i] === "M") {
        newWord += "*";
        count++;
      } else {
        newWord += word[i];
      }
    }
    return newWord + ", " + count;
  })(word);
  return replaceMm;
};

console.log(replaceM("prograMming"));
