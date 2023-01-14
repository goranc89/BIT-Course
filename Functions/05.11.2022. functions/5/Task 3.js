// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel";, "Anne";, "Frank";, "Joe";, "John";, "David";, "Mark";, "Bill"; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.

function studentsGrade(name, points) {
  var result = " ";
  for (var i = 0; i < name.length; i++) {
    if (points[i] > 50 && points[i] < 61) {
      result +=
        name[i] + " acquired " + points[i] + " points and earned 6. \n ";
    } else if (points[i] > 60 && points[i] < 71) {
      result +=
        name[i] + " acquired " + points[i] + " points and earned 7. \n ";
    } else if (points[i] > 70 && points[i] < 81) {
      result += name[i] + " acquired " + points[i] + " points and earned 8. \n";
    } else if (points[i] > 80 && points[i] < 91) {
      result +=
        name[i] + " acquired " + points[i] + " points and earned 9. \n ";
    } else if (points[i] > 90 && points[i] <= 100) {
      result +=
        name[i] + " acquired " + points[i] + " points and earned 10. \n";
    } else {
      result +=
        name[i] +
        " acquired " +
        points[i] +
        " points and failed to complete the exam.";
    }
  }
  return result;
}
console.log(
  studentsGrade(
    ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
  )
);
