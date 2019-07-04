/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  var maxStudent = students[0];

  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    if (student.score > maxStudent.score) {
      maxStudent = student;
    }
  }

  var name = maxStudent.name.split(" ");
  var fname = name[0];
  var lname = name[1];
  return fname[0] + lname[0] + maxStudent.id;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
