// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false
function stringIncludeKey(str, key) {
  if (!key.length) return true;

  let nextCharKey = key[0];
  let keyIndex = str.indexOf(nextCharKey);

  if (keyIndex < 0) return false;
  return stringIncludeKey(str.slice(keyIndex + 1), key.slice(1));
};
console.log(stringIncludeKey('We all are amazing coders', 'coders'));