var a = 3;
var b = "3";
result = "";

if (a === b) {
  result = "a je jednako b po vrednosti i tipu";
} else if (a == b) {
  result = "a je jednako b";
} else {
  result = "a nije jednako b";
}
console.log(result);
