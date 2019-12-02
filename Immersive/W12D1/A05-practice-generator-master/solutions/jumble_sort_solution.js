// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The indexOf() method returns the first index at which a given element can be 
// found in the array, or -1 if it is not present.
// 
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

/*
We want to take an ordinary string and change the index positions of that 
string according to the index positions of each element character in the 
alphabet array.

This is done by first creating an alpha variable and setting it to the alpha
parameter or a string from a to z which is then split and made into an array.
Then the str parameter needs to be split as well in order to find the index 
positions of each character in the str which is now a string array. We want to 
set that to the original str parameter. 

After we have created alpha with a default value and split the string and 
turned it into an array, we want to create a logic sorted variable and set it 
to false.

Then create a while loop with a conditional set to not sorted (!sorted). So, we
now want to iterate through the string array we created to start sorting the 
string array according to the positions in the alpha array. 

This is done by creating a conditional that tests whether i is at the end of 
the array (i === str.length - 1). If i is at the end of the array, we break the
loop.

We then create a variables to hold str[i] and str[i + 1] in order to later 
switch the variables. Once we have created these variables we use them to check
for the index of the elements in the alphabet array. 

We want to compare str[i] current variable to str[i + 1] next variable. If 
str[i] element in the alphabet element's index is greater than str[i + 1]. Then
we want to set current = next, and then str[i + 1] = current. 

After we have sorted through the entire string's elements according to the 
order of the element's index in the alphabet, we want to join the array, making
it a string. 

*/


function jumbleSort(str, alphabet = null) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split('');

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) break;
      let current = str[i];
      let next = str[i + 1];
      if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
        str[i] = next;
        str[i + 1] = current;
        sorted = false;
      }
    }
  }

  return str.join('');
};
console.log(jumbleSort("hello")); // => "ehllo"
console.log(jumbleSort("hello", ['o', 'l', 'h', 'e'])); // => 'ollhe'