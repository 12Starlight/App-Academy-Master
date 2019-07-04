/**************************************************************************************
Write a function `pyramidScheme(base)` that takes in an array of numbers representing
the base of a pyramid. The function should return a two-dimensional array representing
the completed pyramid. To generate an element of the next level of the pyramid,
we sum the elements below and to the left and below and to the right.

For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:

          85
        37  48
      15  22  26
   5   10   12   14
 2   3    7    5    9

Example:

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
p1 // =>
 [
   [ 85 ],
   [ 37, 48 ],
   [ 15, 22, 26 ],
   [ 5, 10, 12, 14 ],
   [ 2, 3, 7, 5, 9 ]
 ]

var p2 = pyramidScheme([2, 2, 2, 2]);
p2 // =>
 [
   [ 16 ],
   [ 8, 8 ],
   [ 4, 4, 4 ],
   [ 2, 2, 2, 2 ]
 ]


Hint:
  array.unshift is a method we can use to add an element to the front of an array:
    var arr = ['b', 'c'];
    arr.unshift('a');
    arr; // => [ 'a', 'b', 'c' ]

Difficulty: Hard
*************************************************************************************/

/*
My Solution

function pyramidScheme(base) {
  var pyramid = [];

  // for (var i = 0; i < base.length; i += 1) {
  //   var num = base[i];
  //   var add = num + base[i + 1];
  //   var level = [];
  //   level.push(add);
  //   pyramid.unshift(level);
  //
  //   for (var j = i + 1; j < level.length; j += 1) {
  //     var num2 = level[j];
  //     var add2 = num2 + level[j + 1];
  //     var level2 = [];
  //     level2.push(add2);
  //     pyramid.unshift(level2);
  //
  //     for (var h = j + 1; h < level2.length; h += 1) {
  //       var num3 = level2[h];
  //       var add3 = num3 + level2[h + 1];
  //       var level3 = [];
  //       level3.push(add3);
  //       pyramid.unshift(level3);
  //     }
  //   }
  // }

  if (base === []) {
    return pyramid;
  }

  for (var i = 0; i < base.length -1; i += 1) {
    var num = base[i];
    var add = num + base[i + 1];
    var level = [];
    level.push(add);

    return pyramid.unshift(level) + pyramid.concat(pyramidScheme(base - 1));
  }
}

*/

function pyramidScheme(base) {
  var pyramid = [base];

  while (pyramid.length < base.length) {
    var prevLevel = pyramid[0]; // get the previous level
    var nextLevel = [];

    for (var i = 0; i < prevLevel.length - 1; i += 1) { // generates the elements of the next level
      var newEle = prevLevel[i] + prevLevel[i + 1]; // by adding the left and right elements of the previous level
      nextLevel.push(newEle);
    }

    pyramid.unshift(nextLevel);
  }

  return pyramid;
}

/*
Notes

> var arr = [1,2,3]
undefined
> arr
[ 1, 2, 3 ]
> arr.unshift(0)
4
> arr
[ 0, 1, 2, 3 ]

*/

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
console.log(p1);

// =>
 // [
 //   [ 85 ],
 //   [ 37, 48 ],
 //   [ 15, 22, 26 ],
 //   [ 5, 10, 12, 14 ],
 //   [ 2, 3, 7, 5, 9 ]
 // ]

var p2 = pyramidScheme([2, 2, 2, 2]);
// console.log(p2);
// =>
 // [
 //   [ 16 ],
 //   [ 8, 8 ],
 //   [ 4, 4, 4 ],
 //   [ 2, 2, 2, 2 ]
 // ]

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = pyramidScheme;
