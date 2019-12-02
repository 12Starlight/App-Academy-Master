// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]

/*
Create a function that takes in a title string parameter. Then create a 
littleWords array variable and set it to the words we do not want capitalized.

Once you have created a littleWords array variable, we want to create a words
array variable. Then set it to the title string parameter split into an array 
on spaces.

Next we want to create a titleizedWords array variable and set it to the words
array variable we created earlier using '.map()'. Then pass in an annonomous
callback function using the fat arrow syntax.

Inside the annonomous function, we want to pass in a word and index parameter.
Then we want to check, if the idx parameter variable is not 0 AND we also want
to check if the current word we are mapping is one of the littleWords we are
not supposed to capitalize. This is done by using '.indexOf()' and >= 0, this
is for the reason that only values greater than 0, exists. 

If it is one of the lowercase words, we want to return the word (inside the map
function) using '.toLowerCase()'. If it is not one of the lowercase words, then
we want to return the word (inside the map function), sliced from the beginning
of that word to only the first character and uppercase it using '.toUpperCase()'
Then add that sliced character to the rest of the word using '.slice(1)'.

After you have mapped through all of the characters and built each word, we 
want to return the titleizedWords array and join the array, making it a string
once again. 


Note: We do not want to use capitalize(). 

*/


function titleize(title) {
  const littleWords = ['a', 'and', 'of', 'over', 'the'];

  const words = title.split(' ');
  const titleizedWords = words.map( (word, idx) => {
    if (idx !== 0 && littleWords.indexOf(word) >= 0) {
      return word.toLowerCase();
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }
  });

  return titleizedWords.join(' ');
};
console.log(titleize('Coders rullllllle the world!'));