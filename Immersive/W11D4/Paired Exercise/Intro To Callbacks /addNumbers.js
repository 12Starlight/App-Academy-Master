const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdin
});


function addNumbers (sum, numsLeft, completeionCallback) {
  if (numsLeft > 0) {
    reader.question("What is your number? ", function(ans){
      let total = parseInt(ans);

      sum += total;
      console.log(sum);

      addNumbers(sum, numsLeft - 1, completeionCallback);
    });
  }
  if (numsLeft === 0) {
    completeionCallback(sum);
  }
}

addNumbers(0,3, sum => console.log(`Total Sum: ${sum}`));