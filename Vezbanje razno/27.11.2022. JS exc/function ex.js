function fun(x, y) {
  return x + y;
}
console.log(fun(1, 5));

function operation(a, b, c) {
  return a * b * c;
}
console.log(operation(7, 9, 13));

function stepen(osnova, step) {
  var rez = 1;
  for (var i = 0; i < step; i++) {
    rez *= osnova;
  }
  return rez;
}
console.log(stepen(2, 3));
