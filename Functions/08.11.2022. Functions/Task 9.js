//Write a function to find all the numbers greater than the average.

function greaterThanAverage(array) {
  let greater = [];
  let result;
  let sum = 0;
  for (i = 0; i <= array.length; i++) {
    sum += i;
    result = sum / array.length;
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] > result) {
      greater[greater.length] = array[i];
    }
  }
  return greater;
}
console.log(greaterThanAverage([1, 2, 3, 4, 5, 6, 7, 8]));
