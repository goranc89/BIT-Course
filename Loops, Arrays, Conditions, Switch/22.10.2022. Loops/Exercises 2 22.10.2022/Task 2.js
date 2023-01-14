// Write a program that multiplies every positive element of a given array ay 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]


var a = [-3, 11, 5, 3.4, -8];
var b;
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        b = a[i] * 2;
        a[i] = b;
    }
} console.log(a);
