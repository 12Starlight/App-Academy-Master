// Write a recursive function `stringIncludeKey(string, key)` that takes in
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// The indexOf() method returns the index within the calling String object of 
// the first occurrence of the specified value, starting the search at 
// fromIndex. Returns -1 if the value is not found.
// 
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

/*
Create a function that passes in a string parameter and a key string parameter.
Then create a conditional to check the length of the key string parameter. If 
does not exist (!key.length), return true.

Next create a nextKeyChar string variable and set it to the first character of
the string using bracket notation. Then create a keyIndex string variable and 
set it to the index of the string parameter using '.indexOf()' and the 
nextKeyChar string variable which is just the first character of the key 
string parameter. 

Once you have created a nextKeyChar string variable and a keyIndex string 
parameter variable, create another conditional. We want to test, if the 
keyIndex string variable is less than 0. If it is less than 0, then return 
false.

After you have determined, if the keyIndex exists in the string, we want to 
return the recursive function stringIncludeKey and pass in the string sliced
from the very next element after the keyIndex string variable. Then we want to
slice the key string parameter variable's first element and return the rest of 
the array, thus repeating the process until the key.length is 0.

Once the key.length hits 0, the function will hit the return and return the 
entire call stack giving us true or false. 


Note: If there is only one argument passed into .slice(1), then the function 
will slice the entire string up to the end from that index value argument 
passed in. 

*/


function stringIncludeKey(string, key) {
  if (!key.length) return true;

  let nextKeyChar = key[0];
  let keyIndex = string.indexOf(nextKeyChar);

  if (keyIndex < 0) return false;
  return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1));
};
console.log(stringIncludeKey('We all are amazing coders', 'coders'));
