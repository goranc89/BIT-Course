//Write a function to find the average of N elements. Make the function flexible to receive dynamic number of parameters.

function averageResult(arrayNumb) {
  let result;
  let sum = 0;
  for (i = 0; i <= arrayNumb.length; i++) {
    sum += i;
    result = sum / arrayNumb.length;
  }
  return result;
}
console.log(averageResult([1, 2, 3, 4, 5, 6, 7, 8]));
