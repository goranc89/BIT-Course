var a = [];
var b = [a, 2, 3];
var max = [1.1, true, "a"];

// index 0 1 2 [i]
// value 1 2 3

console.log(a.length);
console.log(b.length);
console.log(b[1]);
console.log(max[2]);

//adding/update elements

var c = [1, 2, 3];
c[2] = "three";
console.log(c);
c[6] = "hiii";
console.log(c);
c[3] = 4;
console.log(c);

//deleting elements

delete c[0];
console.log(c);

var d = [1, undefined, 3];
console.log(typeof c);
console.log(typeof d[1]);

var s = [1, "two", false, null, undefined];
s[5] = [1, 2, 3];
console.log(s);
console.log(s[5]);

var p = "element";
console.log(p[4]);
console.log(p.length);

var q = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(q[1][1]);
