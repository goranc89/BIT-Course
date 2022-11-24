// 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
function sortArry(array) {
  m = array.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < m.length; i++) {
    m[i] = m[i] * 2;
  }
  return m;
}
console.log("4. Zadatak: " + sortArry([13, 11, 15, 5, 6, 1, 8, 12]));
