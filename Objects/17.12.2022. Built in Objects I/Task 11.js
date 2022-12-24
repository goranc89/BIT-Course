// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
//c. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.

function randomIntegerValue5_20() {
  return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
}

console.log(randomIntegerValue50_100(70));

function randomIntegerValue50_100() {
  return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}
console.log(randomIntegerValue50_100(70));

function generateArray(num, callbackGenerator) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(callbackGenerator());
  }
  return arr;
}

function generateNumbers(number, cb) {
  let nums = [];
  for (let i = 0; i < number; i++) {
    nums.push(cb(i));
  }
  return nums;
}

const myGenerator = (num) => {
  return num + 10;
};

console.log(generateNumbers(5, myGenerator));
