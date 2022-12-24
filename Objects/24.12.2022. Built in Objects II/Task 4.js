// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" -> [ "John", "Snow" ]

function stringToArray(str) {
  return str.split(" ");
}

console.log(stringToArray("John Snow"));
