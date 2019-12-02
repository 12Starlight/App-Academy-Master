// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function (dictionary) {
  let realWords = [];

  dictionary.forEach(e => {
    if (this.includes(e)) realWords.push(e);
  });

  return realWords;
};
console.log('We all love to code! ;)'.realWordsInString(['we', 'all', 'vole']));