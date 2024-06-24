// Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(broj) {
  let result = "";

  for (let i = 1; i <= broj; i++) {
    for (let j = 1; j <= broj; j++) {
      result += i + "*" + j + "=" + i * j + " ";
    }
  }
  return result;
}

console.log(multiplicationTable(12));
