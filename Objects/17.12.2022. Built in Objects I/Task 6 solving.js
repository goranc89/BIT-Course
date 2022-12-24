function isAllCaps(str) {
  return str === str.toUpperCase();
}
function allCaps(str) {
  if (str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(allCaps("Jovana"));
console.log(allCaps("LAKI"));
