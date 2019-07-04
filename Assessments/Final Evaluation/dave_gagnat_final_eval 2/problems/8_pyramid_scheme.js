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
    var level = []; // This is initializing `level` as a new empty array on each step of
    // the iteration, but we need it to remain constant and not reset every time. -BL
    level.push(add);

    return pyramid.unshift(level) + pyramid.concat(pyramidScheme(base - 1));
    // `base - 1` returns NaN, or Not a Number, because base is an array, and you can't
    // subtract a number from an array. Also this for loop will not reach outside of the
    // first element because it will return immediately after the first element. -BL
  }
}

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

// Nice try to recursively solve this problem. As you may have noticed it is pretty complex
// to solve this using recursion. To solve it iteratively, we can use a helper function to
// build the next row in our pyramid and then `unshift` it on in the main function until
// we reach the peak, which is an array of length 1.
//
// Using recursion, our base case would have to check whether the `base` we're given has
// a length of 1, and return the `base` itself if that's the case. In all other cases,
// we would have to build the next row, then use `pyramidScheme` and concat it onto our
// existing pyramid. There would be no `unshift` needed in a recursive solution (although,
// it could utilized if you can find a way to make it work). You're almost there! -BL

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = pyramidScheme;
