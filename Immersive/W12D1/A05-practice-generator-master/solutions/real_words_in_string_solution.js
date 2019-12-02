// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

/*
Basically you are checking an array of strings used as a 'dictionary' againt
a string that we are calling the function on, to see if any of the words in the
dictionary array of words is in fact in the string. 

Create a function that takes in a dictionary array variable. Then create a 
realWords array variable and set it to an empty array. Then loop through the
dictionary array variable.

You want to use the myEach() helper method you created earlier and pass in only
the element. Then create a conditional to check, if the string includes that 
element. If it does, push that element into the realWords array variable.

After you have looped through the entire dictionary array parameter, return the
realWords array variable pointer and sort the array using '.sort()'

*/


// Solution 1
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];

  dictionary.forEach((el) => {
    if (this.includes(el)) realWords.push(el);
  });
  return realWords.sort();
};

// Solution 2
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      let word = this.slice(i, j+1);

      if (dictionary.indexOf(word) > -1) {
        if (realWords.indexOf(word) < 0) realWords.push(word);
      }
    }
  }

  return realWords.sort();
};
console.log('We all love to code! ;)'.realWordsInString2(['we', 'all', 'vole']));