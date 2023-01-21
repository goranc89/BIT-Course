var a = 1e309;
console.log(a);

var b = 2e-3;
console.log(b);

var c = 2e3;
console.log(c);

var d = 0 * 0;
console.log(d);

var e = 0 / 0;
console.log(e);

var f = 6 / 0;
console.log(f);

console.log(a + f);
console.log(a - f);
// = NAN - any other operation with Infinity gives Infinity

var g = 10 * "f";
console.log(g);

var h = 10 * b;
console.log(h);
