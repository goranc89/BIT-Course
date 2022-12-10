function fun() {
  // deklaracija funkcije bez parametara
  return x + y; // vraća rezultat x i y moraju biti globalne promenljive jer ih nema u funkciji
}

// deklaracija funkcije stepen
function stepen(osnova, step) {
  // funkcija ima dva parametra
  var rez = 1; // rez dobija početnu vrednost 1
  for (var i = 0; i < step; i++) {
    // ciklus se "vrti" onoliko puta koliki je step
    rez *= osnova; // toliko puta množimo rez sa osnovom
  }
  // tako smo dobili vrednost osnova na stepen step
  return rez; // vraćamo rez kao rezultat funkcije
}

var x = 12;
var y = 8;

fun(); // poziv funkcije - iako funkcija vraća vrednost, mi ništa ne radimo sa njom
var s = stepen(x, 3); // pozivamo funkciju stepen za dva parametra, a rezultat smeštamo u promenljivu s
console.log(s); // ispisujemo vrednost iz promenljive s
