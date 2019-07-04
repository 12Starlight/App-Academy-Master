/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

/*
My Working Solution

// Build helper function userName(str)
// Creates an username given a first and last name
function userName(str) {
  var name = str.split(' ');
  var first = name[0].toLowerCase();
  var last = name[1].toLowerCase();
  return user = first[0] + last;
}
console.log(userName('Oscar Alvarez'));

// Build Main Function
function usernames(names) {
  var uNames = [];

  for (var i = 0; i < names.length; i += 1) {
    var name = names[i];
    var user = userName(name);
    uNames.push(user);
  }

  return uNames;
}

*/

function usernames(names) {
  var users = [];

  for (var i = 0; i < names.length; i += 1) {
    var parts = names.split(' ');
    var user = parts[0][0] + parts[1];
    users.push(user.toLowerCase());
  }

  return users;
}

/*
Notes

> var name = 'alvin zablan'
undefined
> name
'alvin zablan'
> name.split(' ')
[ 'alvin', 'zablan' ]
> parts[0]
'alvin'
> parts[0][0]
'a'

*/

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
