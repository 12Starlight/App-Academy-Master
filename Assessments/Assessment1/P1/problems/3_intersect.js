/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
    var combArr = [];

    for(var i = 0; i < arr1.length; i += 1) {
      var elm = arr1[i];
      if (arr2.indexOf(elm) > - 1) {
        combArr.push(elm);
      }
    }

    return combArr;
}
console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []

/*
Notes

> var arr2 = ['a', 'b', 'c']
undefined
> arr2
[ 'a', 'b', 'c' ]
> arr2.indexOf('a')
0
> arr2.indexOf('b')
1
> arr2.indexOf('c')
2
> arr2.indexOf('z')
-1
> arr2.indexOf('d')
-1
> arr2.indexOf('y')
-1
> arr2.indexOf('e')
-1

*/


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
