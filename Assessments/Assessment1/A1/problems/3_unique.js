/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var uniqueArr = [];

  for(var i = 0; i < array.length; i += 1) {
    var num = array[i];
    if(uniqueArr.indexOf(num) === - 1)  // if the num is NOT already inside the uniqueArr array
      uniqueArr.push(num);
    }
  }

  return uniqueArr;
}
console.log(unique([1, 1, 2, 3, 3])); // => [1, 2, 3]

/*
Notes

> var arr = ['a', 'b', 'c']
undefined
> arr
[ 'a', 'b', 'c' ]
> arr.indexOf('a')
0
> arr.indexOf('b')
1
> arr.indexOf('c')
2
> arr.indexOf('f')
-1
> arr.indexOf('z')
-1

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
