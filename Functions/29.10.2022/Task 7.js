function stringIntoArray(s) {
  var array = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      array[array.length] = null;
    } else {
      array[array.length] = s[i];
    }
  }
  return array;
}
var newArray = stringIntoArray("My random string");
console.log(newArray);
