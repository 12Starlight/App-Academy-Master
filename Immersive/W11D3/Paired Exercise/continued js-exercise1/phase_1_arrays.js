// Build Method Array#myUnique
Array.prototype.myUniq = function() {
  let newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    if (!newArray.includes(this[i])) {
      newArray.push(this[i]) 
    }
  }

  return newArray;
}
console.log([1,2,3,4,5,1,3,5].myUniq());


// Using 'forEach'
Array.prototype.myUniq2 = function() {
  let uniqArr = [];

  // Here we are using Array#forEach with a callback that is 
  // closing oover 'uniqArr'
  this.forEach(function (el) {
    if (!uniqArr.includes(el)) {
      uniqArr.push(el);
    }
  });

  return uniqArr;
}


// Build Method Array#twoSum
Array.prototype.twoSum = function() {
  let newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if ((this[i] + this[j] == 0) && (j > i)) {
        newArray.push([i, j])
      }
    }
  }

  return newArray
};
console.log([1, 2, 3, -4, -3, 8].twoSum());

// This time we have reduced the time complexity from N^2 to N
// by using a hash
Array.prototype.twoSum2 = function() {
  let matched = [];
  const hash = {};

  this.forEach((elm, idx) => {
    if (hash[elm] * -1) {
      const paired = hash[el * -1].map((preIdx) => [preIdx, idx]);
      
      // remember, concat does not mutate the original object 
      matched = matched.concat(paired);
    }

    // Since we can not set a default attribute value in JS
    // We will need to check for existance first 
    hash[elm] ? hash[el].push(idx) : hash[elm] = [idx];
  });

  return matched; 
};
console.log([-1, 0, 2, -2, 1].twoSum2());


// Build Method Array#transpose
Array.prototype.transpose = function () {
    let newArray = [];

    for (let i = 0; i <= (this[i].length - 1); i += 1) {
        const row = [];
        for (let j = 0; j <= this.length - 1; j += 1) {
            row.push(this[j][i]);
        }
        newArray.push(row);
    }
    
    return newArray
}