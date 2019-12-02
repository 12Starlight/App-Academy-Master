// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]
String.prototype.symmetricSubstrings = function () {
  let symmetric = [];

  for (let i = 0; i < this.length; i += 1) {
    for (let j = 2; j <= this.length - i; j += 1) {
      const substr = this.slice(i, i + j);
      const reversed = substr.split('').reverse().join('');

      if (substr === reversed) symmetric.push(substr);
    }
  }

  return symmetric;
};
console.log('racecar'.symmetricSubstrings());