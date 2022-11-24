function take2Letters(array) {
  var string = " ";
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      for (var j = 0; j < 2; j++) {
        string += array[i][j];
      }
    }
  }
  return string;
}
console.log(
  take2Letters([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);
