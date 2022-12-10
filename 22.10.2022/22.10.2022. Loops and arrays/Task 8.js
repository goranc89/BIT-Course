// 8.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

// David	80
// Marko	77
// Dany	88
// John	95
// Thomas	68
// < 60%	F
// < 70%	D
// < 80%	C
// < 90%	B
// < 100%	A

var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var avgPoints;
var sumOfPoints = 0;
var numOfStudents = students.length;

for (var i = 0; i < numOfStudents; i++) {
    var currentStudentName = students[i][0];
    var currentStudentPoints = students[i][1];
    sumOfPoints += currentStudentPoints;
    if (currentStudentPoints < 60) {
        console.log(currentStudentName + "'s grade is: F");
    } else if (currentStudentPoints < 70) {
        console.log(currentStudentName + "'s grade is: D");
    } else if (currentStudentPoints < 80) {
        console.log(currentStudentName + "'s grade is: C");
    } else if (currentStudentPoints < 90) {
        console.log(currentStudentName + "'s grade is: B");
    } else if (currentStudentPoints < 100) {
        console.log(currentStudentName + "'s grade is: A");
    }
}

avgPoints = sumOfPoints / numOfStudents;

//avg grade of class
if (avgPoints < 60) {
    console.log("Avg grade is: F");
} else if (avgPoints < 70) {
    console.log("Avg grade is: D");
} else if (avgPoints < 80) {
    console.log("Avg grade is: C");
} else if (avgPoints < 90) {
    console.log("Avg grade is: B");
} else if (avgPoints < 100) {
    console.log("Avg grade is: A");
}