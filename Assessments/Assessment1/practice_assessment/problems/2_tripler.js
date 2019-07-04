/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/

function tripler(array) {
  var trippleArr = [];

  for(var i = 0; i < array.length; i += 1) {
    var elm = array[i];
    // var trippleNum = elm * 3;
    array[i] = elm * 3;
    elm = array[i];
    // trippleArr.push(trippleNum);
    trippleArr.push(elm);
  }

  return trippleArr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = tripler
