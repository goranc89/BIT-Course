var a = 10, 
b = 2, 
operation = "-";

switch (operation) {
    case "+":
        c = a + b;
        console.log(c);
        break;
    case "-":
        c = a - b;
        console.log(c);
        break;
    case "*":
        c = a * b;
        console.log(c);
        break;
    case "/":
        if (b === 0) {
            console.log("Please enter number different from 0.")
        } else {
            c = a / b;
            console.log(c);
        }
        break;
    default:
        console.log("Operation is not deffined")
        break;
}