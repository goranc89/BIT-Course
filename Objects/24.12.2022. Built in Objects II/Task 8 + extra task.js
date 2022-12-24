// 8. Write a function to hide email addresses to protect them from unauthorized users.
//"somerandomaddress@example.com" to "somerand...@example.com"

function hideEmail(email) {
  let hideEmail =
    email.split("@")[0].substr(0, 8) + "...@" + email.split("@")[1];
  return hideEmail;
}

console.log(hideEmail("somerandomaddress@example.com"));

function hideMyEmail(myemail) {
  let hideMyEmail =
    myemail.split("5")[0].substr(0, 6) + "...@" + myemail.split("@")[1];
  return hideMyEmail;
}
console.log(hideMyEmail("jovanaivanovic5@gmail.com"));
