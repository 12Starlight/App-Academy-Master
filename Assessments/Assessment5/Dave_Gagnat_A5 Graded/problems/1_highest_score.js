// Hey Dave,
// Find my comments marked with AZ.
// Be sure to check out the video solutions for these, especially the callback ones.

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

// Build helper function capFirst(str)
// Capitalizes the fist letter of each word
// Good decomposition into this helper function
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

function highestScore(students) {
  // these two variables are not utilized in your code, remove them -AZ
  var highScore = '';
  var total = 0;

  for (var i = 0; i < students.length; i += 1) {
    var obj = students[i];

    // This logic happens to pass the specs, but it will not work in all situations
    // This conditional will return the first student that has a greater score than the previous student,
    // which is not necessarily the student with the highest score overall. -AZ
    if (obj['score'] > students[i + 1]['score']) {
      var name = capFirst(obj['name']) + obj['id'];

      return name;
    }
  }

}

// For example, your code will fail this custom example -AZ
var students_1 = [
  { name: 'Alvin Zablan', id: 128, score: 8 },
  { name: 'Eliot Bradshaw', id: 32, score: 9 },
  { name: 'Tommy Duek', id: 2, score: 10 },
];
// console.log(highestScore(students_1));

// and this example -AZ
var students_2 = [
  { name: 'Alvin Zablan', id: 128, score: 8 },
];
// console.log(highestScore(students_2));

// var students = [
//  {name: 'Alvin Zablan', id: 128, score: -42},
//  {name: 'Eliot Bradshaw', id: 32, score: 57},
//  {name: 'Tommy Duek', id: 2, score: 99},
//  {name: 'Fred Sladkey', id: 256, score: 94}
// ];


// console.log(highestScore(students)); //=> 'TD2'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
