// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

function alphabeticalOrder(str) {
  return str.toLowerCase().split("").sort().join("");
}

console.log(alphabeticalOrder("Webmaster"));

function sortString(str) {
  let sortedStr = str.split("").sort().join("");
  return sortedStr;
}

console.log(sortString("Webmaster"));
