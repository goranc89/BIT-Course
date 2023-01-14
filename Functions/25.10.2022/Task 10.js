// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.


var y ="a";
x="Jovana"
res=0

function countA(x, y) {
    for (let i=0; I<x.length; i++) {
        if(x.charAt(i) == y ) {
            res++;
        }
        
    }
    return res;
}
console.log(count(x, y));