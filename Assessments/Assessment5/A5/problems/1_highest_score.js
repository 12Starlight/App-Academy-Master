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

/*
My Working Solution

// Build helper function capFirst(str)
// Capitalizes the fist letter of each word
function capFirst(str) {
  var words = str.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var newWord = word[0].toUpperCase();
    newWords.push(newWord);
  }

  var newStr = newWords.join('');
  return newStr;
}
console.log(capFirst('coders rule!'));

function highestScore(students) {
  // var highScore = '';
  // var total = 0;

  for (var i = 0; i < students.length; i += 1) {
    var obj = students[i];

    if (obj['score'] > students[i + 1]['score']) {
      var name = capFirst(obj['name']) + obj['id'];

      return name;
    }
  }

}

*/

function highestScore(students) {
  var maxStudent = students[0];

  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];

    if (student['score'] > maxStudent['score']) {
      maxStudent = student;
    }
  }

  var name = maxStudent['name'].split(' ');
  var fName = name[0];
  var lName = name[1];
  var fInitial = fName[0];
  var lInitial = lName[0];
  return fInitial + lInitial + maxStudent['id'];
}

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

console.log(highestScore(students)); //=> 'TD2'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
