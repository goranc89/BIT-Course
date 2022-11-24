// 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no

var a = [5, -4.2, 3, 7];
var e = 3;
var member = false;
for (var i = 0; i<a.length; i++) {
    if (e==a[i]) {
        member=true;
    }
}
if (member) {
    console.log('Yes');
} else {
    console.log('No');
}