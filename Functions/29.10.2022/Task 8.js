/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

function accept(m) {
  var number = 0;
  for (var i = 2; i < m; i++) {
    if (m % i === 0 && m !== 0) {
      number++;
    }
  }
  if (number > 0) {
    return "It is not a prime number.";
  } else {
    return "It is a prime number.";
  }
}

console.log(accept(3));
