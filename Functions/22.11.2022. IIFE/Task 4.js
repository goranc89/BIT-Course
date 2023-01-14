// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

// function a(name, surname) {
//   function b(name1, surname1) {
//     return name1 + "." + surname1 + "@gmail.com";
//   }
//   return b(name, surname);
// }
// var c = a("jovana", "ivanovic");
// console.log(c);

//my real e-mail

function a(name, surname) {
  function b(name1, surname1) {
    return name1 + surname1 + "5@gmail.com";
  }
  return b(name, surname);
}
var c = a("jovana", "ivanovic");
console.log(c);
