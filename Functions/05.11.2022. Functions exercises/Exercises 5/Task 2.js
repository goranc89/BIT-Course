// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function changeArray(array) {
  m = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      m[i] = array[i] / 2 + 5;
    }
  }
  const index = m.indexOf(0);
  m.splice(index, 1, 20);
  return m;
}
console.log("2. Zadatak: " + changeArray([3, 500, -10, 149, 53, 414, 1, 19]));
