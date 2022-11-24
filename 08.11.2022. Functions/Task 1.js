//Write a function that rotates a list by k elements.

function rotate(array, k) {
  const newarray = [];
  for (
    let i = k % array.length, len = array.length;
    newarray.length < len;
    i = ++i % len
  ) {
    newarray.push(array[i]);
  }
  return newarray;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));
//----------------------------------------------------------------------------------------

function rotateArray(arr, k, pos) {
  arr = arr.concat(arr.splice(0, arr.indexOf(k) + pos));
  return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2, 1));
