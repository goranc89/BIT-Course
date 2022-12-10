// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var e = 3;
var a = [5, -4.2, 3, 7];
var answ = 0

for (i = 0; i < a.length; i++){
 if (e === a[i]){
  answ += 1;
  } 
}
if (answ > 0) {
  console.log('Yes');
}else {
  console.log('No');
}