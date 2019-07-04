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
  // var words = sentence.split('I');
  // var meSen = words.join('we');
  // words = meSen.split('mine');
  // var oursSen = words.join('ours');
  // words = oursSen.split('my');
  // var ourSen = words.join('our');
  // words = ourSen.split('me');
  // var usSen = words.join('us');
  //
  // return usSen;

  // var words = sentence.split(' ');
  // var newWords = [];
  //
  // for (var i = 0; i < words.length; i += 1) {
  //   var word = words[i];
  //
  //   if (word === 'I') {
  //     newWords.push('We');
  //   } else if (word === 'mine') {
  //     newWords.push('ours');
  //   } else if (word === 'my') {
  //     newWords.push('our');
  //   } else if (word === 'me') {
  //     newWords.push('us');
  //   } else { // else the word does not need to be replaced
  //     newWords.push(word);
  //   }
  // }
  //
  // var newSen = newWords.join(' ');
  // return newSen;

  var words = sentence.split('I').join('we');
  words = words.split('mine').join('ours');
  words = words.split('my').join('our');
  words = words.split('me').join('us');

  return words;
}
console.log(royalWe("I want to go to the store")); // => "we want to go to the store"
console.log(royalWe("This is my house and you will respect me")); // => "This is our house and you will respect us"
console.log(royalWe("This is mine")); // => "This is ours"
console.log(royalWe("Jump for my love")); // => "Jump for our love"

/*
Notes

> var sen = 'I am hungry'
undefined
> sen.split('I').join('we');
'we am hungry'
> var sen = 'I am I hungry'
undefined
> sen.split('I').join('we');
'we am we hungry'

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
