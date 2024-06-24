//Write a function to find and return the first, middle and last element of an array if the array
//has odd number of elements. If number of elements is even, return just the first and the
//last. In other cases (empty array), input array should be returned.

function firstMiddleLast(arrayNumbers) {
  let medianIndex = 0;
  if (arrayNumbers.length % 2 == 1) {
    medianIndex = (arrayNumbers.length - 1) / 2;
    return (
      "First number in array is:" +
      arrayNumbers[0] +
      "\nLast number of array is:" +
      arrayNumbers[arrayNumbers.length - 1] +
      "\nThe number in the middle of array is:" +
      arrayNumbers[medianIndex]
    );
  } else {
    return (
      "First number in array is: " +
      arrayNumbers[0] +
      "\nLast number of array is:  " +
      arrayNumbers[arrayNumbers.length - 1]
    );
  }
}
console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));
