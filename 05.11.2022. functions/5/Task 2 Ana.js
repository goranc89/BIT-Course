function changeArray(a) {
  var newArray = [];
  var newValue = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      newValue = a[i] / 2 + 5;

      newArray[newArray.length] = newValue;
    }
    if (a[i] == 0) {
      newArray[newArray.length] = 20;
    }
  }
  return newArray;
}
console.log(changeArray([3, 500, -10, 149, 53, 414, 1, 19, 0]));
