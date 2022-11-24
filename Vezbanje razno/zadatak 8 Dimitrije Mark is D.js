var niz1 =[80, 77, 88, 95, 68];
var niz2=["David ","Mark ","Dany ", "John ","Thomas "];
for(p=0; p< niz2.length; p++)
{
if (niz1[p] < 60)
{
    console.log("8. ZADATAK:" +niz2[p] +"marks is: F");
}
else if(60 <= niz1[p] < 70)
{
    console.log(niz2[p] +"marks is: D");
}
else if(70 <= niz1[p] < 80)
{
    console.log(niz2[p] +"marks is: C");
}
else if(80 <= niz1[p] < 90){
    console.log(niz2[p] +"marks is: B");
}
else if( 90 <= niz1[p]){
    console.log(niz2[p] +"marks is: A");
}
else
{
    console.log("Error!");
}
console.log(niz1[p]);
}