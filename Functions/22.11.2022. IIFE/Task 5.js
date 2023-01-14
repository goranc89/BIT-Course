// 5.Write a function that returns a function that calculates a decimal value of the given octal number.
//     Input: 034
//     Output: 28

// function calcOctalToDecimal(num) {
//   num += "";
//   return (function () {
//     return parseInt(num);
//   })();
// }

(function calcOctalToDecimal(num) {
  num += "";
  return function () {
    return parseInt(num);
  };
})(034);

// console.log(calcOctalToDecimal(0134));
