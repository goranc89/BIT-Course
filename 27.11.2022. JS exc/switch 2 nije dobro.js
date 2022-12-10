a = 33;
b = 11;
result = "";

switch (a < b) {
    result = a + " je manje od " + b;
    break;
}
switch (a > b) {
    result = a + " je veće od " + b;
    break;
}
default {
    result = a + " je jednako " + b;
}
console.log(result);