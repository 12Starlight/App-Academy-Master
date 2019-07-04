/******************************************************************************
Write a function totalNumProblems(assessments) that takes in an object of assessment
objects. The function should return the total number of problems in all assessments.

Example:

var assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
}

totalNumProblems(assessments) => 29
*******************************************************************************/

/*
My Working Solution

// Build helper function totalProblems(obj)
// Totals any array in an object
function totalProblems(obj) {
  var total = 0;

  total = obj['problems'].length;

  return total;
}

var w1d5 = {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  }
console.log(totalProblems(w1d5));


function totalNumProblems(assessments) {
  var total = 0;

  for (var key in assessments) {
    var obj = assessments[key];
    var totalObj = totalProblems(obj);

    total += totalObj;
  }

  return total;
}

*/

function totalNumProblems(assessments) {
  var numProblems = 0;

  for (var day in assessments) {
    var assessment = assessments[day];
    numProblems += assessment['problems'].length;
  }

  return numProblems;
}

var assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
}

console.log(totalNumProblems(assessments)); // => 29

/*
Key Takeaways
  * When it comes to these data model problems, start on the outside and work
    you way in and definately make sure you understand what type data you are
    working with

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = totalNumProblems;
