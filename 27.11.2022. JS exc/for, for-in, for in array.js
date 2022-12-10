var punishment = "";
for (var i = 0; i < 100; i++) {
  punishment += "I will never do this again \n";
}
console.log(punishment);

var res = "\n";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    res += "*\t";
  }
  res += "\n";
}
console.log(res);

//for - in loops are used for objects
//regular for is better for arrays

var a = ["a", "b", "c", "x", "y", "z"];
var result = "\n";
for (var i in a) {
  result += "index: " + i + ", value: " + a[i] + "\n";
}
console.log(result);
