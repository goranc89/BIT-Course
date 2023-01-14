// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var second = function secondSmall(a) {
  var temp = [];
  var small = [];
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log(a);
  for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
      small = a[i + 1];
      break;
    }
  }
  return small;
};
console.log(second([4, 2, 2, -1, 6]));
