var niz1 = [10,20,30];
var niz2 = [ 'A', 'B', 'C'];
for(var i = 0; i < niz1.length; i++) {
    if(niz1[i] < 10) {
        console.log(niz1[i] + ' uspeo 1');
        console.log(niz2[i] + ' uspeo 1');
    } else if (niz1[i] >=10 && niz1[i] < 20) {
        console.log(niz1[i] + ' uspeo 2');
        console.log(niz2[i] + ' uspeo 1');
    } else if (niz1[i] >=20 && niz1[i] < 30) {
        console.log(niz1[i] + ' uspeo 3');
        console.log(niz2[i] + ' uspeo 1');
    } else {        
        console.log('Test');
}
}