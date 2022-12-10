// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8] 

var array = [-3, 11, 5, 3.4, -8];
var outArray = [];

for (var i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    outArray[i] = array[i] * 2;
  } else {
    outArray[i] = array[i];
  }
}
console.log(outArray);