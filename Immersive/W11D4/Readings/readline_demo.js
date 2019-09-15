// require needed to run 'readline'
const readline = require('readline');


// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)

//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("What is your name? ", function (answer) {
//   console.log(`Hello ${answer}!`);
  
//   // Close the reader, which will allow the program to end becaue it
//   // is no longer waiting for any events
//   reader.close(); 
// });

// console.log("Last program line");


// Example I
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function addTwoNumbers(callback) {
//   // Notice how nowhere do I return anything here! You never return in
//   // async code. Since the caller will not wait for the result, you
//   // can't return anything to them.

//   reader.question("Enter #1: ", function (numString1) {
//     reader.question("Enter #2: ", function (numString2) {
//       const num1 = parseInt(numString1);
//       const num2 = parseInt(numString2);

//       callback(num1 + num2);
//     });
//   });
// }

// addTwoNumbers(function (result) {
//   console.log(`The result is: ${result}`);
//   reader.close();
// });


// Example II
// function absurdTimes(numTimes, fn) {
//   let i = 0;

//   function loopStep() {
//     if (i == numTimes) {
//       // we're done, stop looping
//       return;
//     }

//     fn();

//     i++;
//     // recursively call loopStep
//     loopStep();
//   }

//   loopStep();
// }