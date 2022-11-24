function median(array) {
  let max = array[0];
  let min = array[0];
  let position = 0;
  let newArr = [];
  let ind = 0;
  let med = 0;

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] !== null) {
        if (min > array[k]) {
          min = array[k];
          position = k;
        }
      }
    }
    newArr[j] = min;
    array[position] = null;
    min = max;
  }

  if (newArr.length % 2 === 0) {
    ind = newArr.length / 2;
    med = (newArr[ind] + newArr[ind - 1]) / 2;
  } else {
    med = newArr[newArr.length / 2 - 0.5];
  }
  return med + " is median";
}

console.log(median([2, 1, 5, 3, 4, 6, 7, 9]));
