//7. Write a function to capitalize the first letter of a string and returns modified string.
//"js string exercises" -> "Js string exercises"

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("js string exercises"));
