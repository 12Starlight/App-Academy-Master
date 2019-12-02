// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// The every() method tests whether all elements in the array pass the test implemented 
// by the provided function. It returns a Boolean value.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false
function anagrams(str1, str2) {
  let count = {};

  str1.split('').forEach(e => {
    if (!count[e]) count[e] = 0;
    count[e] += 1;
  });

  str2.split('').forEach(e => {
    if (!count[e]) count[e] = 0;
    count[e] -= 1;
  });

  return Object.values(count).every(e => e === 0);
};
console.log(anagrams('listen', 'silent'));