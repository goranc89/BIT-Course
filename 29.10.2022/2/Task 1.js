// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function ifString(a) {
    var isString = false;
    if (typeof (a) === 'string') {
        isString = true;
    }
    return isString;
}
var thisIsString = ifString(6);
console.log(thisIsString);