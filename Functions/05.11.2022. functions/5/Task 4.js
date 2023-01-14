// (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

// for (var i = 0; i < a.length; i++) {
//     for (var j = i + 1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;

//             formula za sortiranje niza
function sortArr(a) {
  var temp = [];
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  for (var i = 0; i < a.length; i++) {
    newArr[i] = a[i] * 2;
  }

  return newArr;
}
console.log(sortArr([13, 11, 15, 5, 6, 1, 8, 12]));
