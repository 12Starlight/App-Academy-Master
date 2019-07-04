/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

/*
My Solution

function sillyCipher(sentence, cipher){
  var words = sentence.split(' ');
  var newSen = '';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    for (var j = 0; j < word.length; j += 1) {
      var char = word[j];

        if (cipher[char] !== undefined) {
          newSen += cipher[char];
        } else {
          newSen += '.';
        }
    }
  }

  return newSen;
}

*/

function sillyCipher(sentence, cipher) {
  var newStr = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];

    if (cipher[char] === undefined) {
      newStr += '.';
    } else {
      newStr += cipher[char];
    }
  }

  return newStr;
}

console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})); //=> 'cxxro'
console.log(sillyCipher("apple", { a : "c", p : "x"})); //=> 'cxx..'
console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})); //=> '.ee....q.q..q!'
console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"})); //=> 'dan..''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
