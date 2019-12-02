// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]
// 
// Palindrome: a word, phrase, or sequence that reads the same backward as 
// forward

/*
Create a function using String.protototype. Then start by making a symmetric 
array variable. Then begin a loop starting at i = 0. Inside this forloop, start
the next embedded forloop at j = 2. This is done for the reason that all
substrings must have a length of greater than 1. 

Once you have set both i and j's starting points for each loop. In the second 
loop set j's conditional to j is less than or equal to the original string's
length using 'this', and then subtract i for each iteration.

This is done to make sure that while we are iterating through our first loop,
on our second loop we are decreasing the iteration by the same amount relative
to the times i changes.
  for (let j = 2; j <= this.length - i; j += 1)

After we have made our two embedded for loops, we want to create a substring 
string variable and set it to the string sliced from that current outer 
iteration up to the i + j index. We use i + j to account for slice not going 
all the way to the end of the j index value. This ensures that it does. 
  const substring = this.slice(i, i + j); 

Next we want to test, if our substring variable is a pallidrome. We do this by
first creating a reversed string variable and set it to substring split on the
chars and reversed, then joined back together again using '.reverse()'
  const reversed = substring.split('').reverse().join('')

After we have created our substring string variable and our reversed string 
variable, we want to compare the two by creating a conditional. We want to test,
if the substring string variable pointer is equal to the reversed string 
variable pointer. If it is, then we want to push the substring into the
semmetric array variable we created earlier.

After we have checked whether the substring and the reversed are equal and have
pushed the substring into the symemetric array vairable, we want to return the 
symmetric array pointer outside of the loops and then sort it using '.sort()'

*/


String.prototype.symmetricSubstrings = function () {
  const symmetric = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = 2; j <= this.length - i; j++) {
      const substr = this.slice(i, i + j);
      const reversed = substr.split('').reverse().join('');

      if (substr === reversed) symmetric.push(substr);
    }
  }

  return symmetric.sort();
};
console.log('racecar'.symmetricSubstrings());




