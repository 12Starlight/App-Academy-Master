/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

/*
My Working Solution

// Build helper function avgScore(array)
// Determines the average score
function avgScore(array) {
  var avg = 0;
  var sum = 0;

  for (var i = 0; i < array.length; i += 1) {
    var obj = array[i];
    sum += obj['score'];
  }

  avg = sum / array.length;
  return avg;
}
console.log(avgScore([{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]));

// Build Main Function
function passingStudents(students) {
  var goodGrades = [];

  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    var grades = student['grades'];
    var name = student['name'];
    var avg = avgScore(grades);

    if (avg >= 70) {
      goodGrades.push(name);
    }
  }

  return goodGrades;
}

*/

// Build helper function getAverage
// Adds up a student's grades and returns the average
function getAverage(student) {
  var sum = 0;
  var grades = student['grades'];

  for (var i = 0; i < grades.length; i += 1) {
    var grade = grades[i];
    sum += grade['score'];
  }

  var avg = sum / grades.length;
  return avg;
}

// Build Main function
function passingStudents(students) {
  var goodGrades = [];

  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    var avg = getAverage(student);
    var name = student['name'];

    if (avg >= 70) {
      goodGrades.push(name);
    }
  }

  return goodGrades;
}


var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

console.log(passingStudents(students)); // => [ 'Kush', 'Ned' ]

/*
Key Takeaways
  * Noice how to decompose this problem
    // Notice how it asks to do something with just one student first.
       This is a perfect example of when to create a helper function to
       do just that 

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
