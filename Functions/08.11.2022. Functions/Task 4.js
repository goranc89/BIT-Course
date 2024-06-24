//Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

function findMaxMin(array) {
  let newArr = [];
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max && typeof array[i] === "number") {
      newArr[0] = array[i];
    }
    if (array[i] < min && typeof array[i] === "number") {
      newArr[1] = array[i];
    }
  }
  return newArr;
}
var arr = [20, 3, "65", "7", 8, 12, -34, 65, 145];
console.log(findMaxMin(arr));
