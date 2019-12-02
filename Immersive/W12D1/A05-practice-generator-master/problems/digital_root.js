// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root". 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

// Build Main Function
function digitalRoot(num) {
  while (num >= 10) {
    num = digitalRootStep(num);
  }

  return num;
};

// Build helper function digitalRootStep(num)
function digitalRootStep(num) {
  let root = 0; 

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num / 10);
  };

  return root;
};
console.log(digitalRoot(1945));




