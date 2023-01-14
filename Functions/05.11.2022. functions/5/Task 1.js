// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function switchPlaces(array) {
  var newArray = array;
  var min = array[0];
  var minIndex = 0;
  var max = array[0];
  var maxIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (min < array[i]) {
      min = array[i];
      minIndex = i;
    } else {
      continue;
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (max > array[j]) {
      max = array[j];
      maxIndex = j;
    } else {
      continue;
    }
  }
  newArray[minIndex] = max;
  newArray[maxIndex] = min;

  return newArray;
}
console.log(switchPlaces([3, 500, 12, 149, 53, 414, 1, 19]));
