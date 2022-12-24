//7.
//a. Write a function that checks if a given string is written in all capitals.
//b. Write a function that checks if a given string contains any digits.
//c. Write a function that checks if a given string is a valid hexadecimal color.
//d. Write a function that checks if a given number belongs to the interval from 1900to 2018.
//e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function isAllCaps(str) {
  return str === str.toUpperCase();
}
function allCaps(str) {
  if (str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log("7a");
console.log(allCaps("Jovana"));
console.log(allCaps("LAKI"));

function checkString(str) {
  const regex = /\d/;
  return regex.test(str);
}
console.log("7b");
console.log(checkString("Magarac13"));
console.log(checkString("ovde nema brojeva"));

function isValidHexadecimal(string) {
  const regex = /^#[0-9a-fA-F]{6}$/;

  return regex.test(string);
}
console.log("7c");
console.log(isValidHexadecimal("#FF5733"));
console.log(isValidHexadecimal("#FFF00"));

function checkInterval(num) {
  return num >= 1900 && num <= 2018;
}
console.log("7d");
console.log(checkInterval(2005));
console.log(checkInterval(2022));
