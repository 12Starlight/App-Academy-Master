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

function sillyCipher(sentence, cipher){
  // splitting the sentence is incorrect because it will effectively remove the space character
  // from the string, whereas it needs to be replaced for a `.` like a normal character. -AZ
  var words = sentence.split(' ');
  var newSen = '';

  // no need for nested loops here, we should use the same strategy as magicCipher from A3

  // This outer for loop is fishy to me because it iterates through words of the sentence,
  // but the question asks us to replace characters of the sentence -AZ
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

// The inner conditional is good.
// However, reconsider the nested loops.
// This code fails because it will not correction substitute a space. -AZ

console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})); //=> 'cxxro'
console.log(sillyCipher("apple", { a : "c", p : "x"})); //=> 'cxx..'
console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})); //=> '.ee....q.q..q!'
console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"})); //=> 'dan..''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
