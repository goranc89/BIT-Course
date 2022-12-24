//3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
//"Republic Of Serbia" -> ""Rbceilpu Of Sabeir"

function alphabetizeWords(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i].split("");
    let upperCase = [];
    let lowerCase = [];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === word[j].toUpperCase()) {
        upperCase.push(word[j]);
      } else {
        lowerCase.push(word[j]);
      }
    }
    lowerCase.sort();
    word = upperCase.concat(lowerCase);
    strArr[i] = word.join("");
  }
  return strArr.join(" ");
}

console.log(alphabetizeWords("Republic Of Serbia"));
