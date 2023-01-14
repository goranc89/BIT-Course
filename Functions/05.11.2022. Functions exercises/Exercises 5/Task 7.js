// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
// Input: [ &quot;M&quot;, &quot;Anne&quot;, 12, &quot;Steve&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, true, &quot;A&quot; ]
// Output: AnStJoJoDaMa
function stringArray(array) {
  m = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string" && array[i].length > 2) {
      m = m + array[i][0] + array[i][1];
    }
  }
  return m;
}
console.log(
  "7. Zadatak: " +
    stringArray([
      "M",
      "Anne",
      12,
      "Steve&quot",
      "Joe",
      "John",
      "David",
      "Mark",
      true,
      "A",
    ])
);
