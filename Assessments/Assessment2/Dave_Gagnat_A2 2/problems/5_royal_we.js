/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  var words = sentence.split('I');
  var meSen = words.join('we');
  words = meSen.split('mine');
  var oursSen = words.join('ours');
  words = oursSen.split('my');
  var ourSen = words.join('our');
  words = ourSen.split('me');
  var usSen = words.join('us'); // excellent - MS

  return usSen;
}
console.log(royalWe("I want to go to the store")); // => "we want to go to the store"
console.log(royalWe("This is my house and you will respect me")); // => "This is our house and you will respect us"
console.log(royalWe("This is mine")); // => "This is ours"
console.log(royalWe("Jump for my love")); // => "Jump for our love"

// Very good solution, you could also have a bunch of if/else if statements
// and iterate over, but this is very good as well, well done - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
