function switchPlaces(arrayMinMax)
  let min = 0;
  let max = 0;
  let indexmin = 0;
  let indexmax = 0;

  for (let i = 0; i < arrayMinMax.length; i++) {
    if (arrayMinMax[i] < min) {
      min = arrayMinMax[i];
      indexmin = i;
      //return console.log(min, indexmin);
    }
    //return (min, indexmin);
  }
  for (let j = 0; j < arrayMinMax.length; j++) {
    if (arrayMinMax[j] > max) {
      max = arrayMinMax[j];
      indexmax = j;
    }
  }
  return Math.max.apply(null, arrayMinMax);

console.log(switchPlaces([3, 500, 12, 149, 53, 414, 1, 19]));
