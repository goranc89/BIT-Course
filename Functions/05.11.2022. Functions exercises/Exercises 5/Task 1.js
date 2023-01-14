// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
function switchArray(array) {
  m = array[0];
  k = 0;
  n = array[0];
  u = 0;
  z = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < m) {
      m = array[i];
      k = i;
    }
    if (array[i] > n) {
      n = array[i];
      u = i;
    }
  }
  array.splice(k, 1, n);
  array.splice(u, 1, m);

  return array;
}
console.log("1. Zadatak: " + switchArray([3, 500, 12, 149, 53, 414, 1, 19]));
