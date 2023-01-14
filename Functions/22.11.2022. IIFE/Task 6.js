// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function successCallback() {
  return "Your password is cool!";
}

function invalidCallback() {
  return "Your password is invalid!!";
}

function checkPassword(pass, a, b) {
  var count = 0;
  for (var i = 0; i < pass.length; i++) {
    if (parseInt(pass[i]) >= 0) {
      count++;
    }
  }
  if (pass.length > 6 && count >= 1) {
    return a();
  } else {
    return b();
  }
}

console.log(checkPassword("JSGuru123", successCallback, invalidCallback));
console.log(checkPassword("JSGuru", successCallback, invalidCallback));
