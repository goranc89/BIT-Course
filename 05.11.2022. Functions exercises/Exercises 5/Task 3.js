// 3. Initialize two arrays. The first one should contain C, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.
function studentsGrade(studentName, grades) {
  m = [];
  for (let i = 0; i < grades.length; i++) {
    if (50 < grades[i] && grades[i] < 61) {
      m[i] = 6;
    }
    if (60 < grades[i] && grades[i] < 71) {
      m[i] = 7;
    }
    if (70 < grades[i] && grades[i] < 81) {
      m[i] = 8;
    }
    if (80 < grades[i] && grades[i] < 91) {
      m[i] = 9;
    }
    if (90 < grades[i] && grades[i] < 100) {
      m[i] = 10;
    }
    if (grades[i] < 51) {
      m[i] = 5;
    }
  }
  k = [];
  for (let j = 0; j < studentName.length; j++) {
    k[j] =
      studentName[j] +
      " acquired " +
      grades[j] +
      " points and earned " +
      m[j] +
      ".";
  }
  return k;
}
console.log(
  "3. Zadatak: " +
    studentsGrade(
      ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
      [50, 39, 63, 72, 99, 51, 83, 59]
    )
);
