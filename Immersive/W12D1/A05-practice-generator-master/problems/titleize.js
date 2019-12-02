// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]
function titleize(str) {
  let littleWords = ["a", "and", "of", "over", "the"];

  let words = str.split(' ');
  const titledWords = words.map((w, i) => {
    if (i !== 0 && littleWords.indexOf(w) >= 0) {
      return w.toLowerCase();
    } else {
      return w.slice(0, 1).toUpperCase() + w.slice(1);
    }
  });

  return titledWords.join(' ');
}
console.log(titleize('Coders rullllllle the world!'));