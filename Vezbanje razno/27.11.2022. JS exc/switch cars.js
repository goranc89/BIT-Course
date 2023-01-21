var car = "bla";
result = "";

switch (car) {
  case "renault":
  case "audi":
  case "bmw":
    result = "Great German car";
    break;
  case "fiat":
    result = "Good Italian car";
    break;
  default:
    result: "bla bla bla";
    break;
}
console.log(result);
