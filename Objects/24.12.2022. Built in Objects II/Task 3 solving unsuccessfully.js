//3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
//"Republic Of Serbia" -> ""Rbceilpu Of Sabeir"

function alphabetizeString(str) {
  let charArray = str.split("");
  charArray.sort();
  return charArray.join("");
}

console.log(alphabetizeString("Republic Of Serbia")); // Returns "ORSabbceefiilpru"

function alphabetize(str) {
  return str.split("").sort().join("");
}

console.log(alphabetize("Republic Of Serbia")); // Returns "ORSabbceefiilpru"

function alphabetizeString2(str) {
  let charArray2 = str.split("");
  charArray2.sort();
  charArray2.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return charArray2.join("");
}

console.log(alphabetizeString2("Republic Of Serbia")); // Returns "abbceefiilOpRrSu"

function alphabetizeString3(str) {
  return str
    .split("")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}

console.log(alphabetizeString3("Republic Of Serbia")); // Returns "abbceefiilOpRrSu"

function alphabetizeString4(str) {
  let array4 = str.split("");
  array4.sort();
  let result = array4.join("");
  return result;
}

console.log(alphabetizeString4("Republic Of Serbia")); // Returns ORSabbceefiilpru
