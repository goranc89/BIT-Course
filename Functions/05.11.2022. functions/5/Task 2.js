// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function changeArray(a) {
  var newArray = [];
  var newValue = 0;
  for (var i = 0; i < a.length; i++) {
    newValue = a[i] / 2 + 5;
    if (newValue !== 0) {
      newArray[newArray.length] = newValue;
    }
    if (newValue == 0) {
      newArray[newArray.length] = 20;
    }
  }
  return newArray;
}
console.log(changeArray([3, 500, -10, 149, 53, 414, 1, 19]));
