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

/* 
I am checking keys in the object built against keys in the object destroyed 
and looking to see, if any keys are left over  

You have to first check, if the object is empty using ! or undefined 


function anagrams(str1, str2) {
  const words = {};

  str1.split('').forEach((char) => {
    if (words[char] === undefined) words[char] = 0;
    words[char] += 1;
  });

  str2.split('').forEach((char) => {
    if (!words[char]) words[char] = 0;
    words[char] -= 1;
  });

  return Object.values(words).every((e) => e === 0);
};
console.log(anagrams('listen', 'silent'));

*/


function anagrams(str1, str2) {
  const letters = {};

  str1.split("").forEach(char => {
    if (!letters[char]) letters[char] = 0;
    letters[char] += 1;
  });

  str2.split("").forEach(char => {
    if (!letters[char]) letters[char] = 0;
    letters[char] -= 1;
  });

  return Object.values(letters).every(letterCount => letterCount === 0);
}
// console.log(anagrams('listen', 'silent'));