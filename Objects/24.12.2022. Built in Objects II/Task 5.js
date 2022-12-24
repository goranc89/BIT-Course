// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."
function abbreviateName(name) {
  let arrName = name.split(" ");
  return arrName[0] + " " + arrName[1].charAt(0) + ".";
}

console.log(abbreviateName("John Snow"));
