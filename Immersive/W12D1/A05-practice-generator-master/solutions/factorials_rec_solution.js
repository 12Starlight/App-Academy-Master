// Write a recursive function, `factorialsRec(num)`, that returns the first
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.
// 
// Factorial: The product of an integer and all the integers below it; e.g. 
// factorial four ( 4! ) is equal to 24. The product of a series of factors 
// in an arithmetic progression.

/*
First I want to determine when num is equal to 1. Then I want to return 1 in
an array [1]. It is 1, from 0 + 1 because 0 zero + nothing is 0 zero.

Next I want to optimize my recursive function by calling factorialsRec(num - 1)
and saving it to a variable called facts which we will then concat the previous
recursive calls using that variable:
  .push(facts[facts.length - 1] * (num - 1))

This is done by starting at the element before the last element in the array we
created above. Then multiplying 

*/


function factorialsRec(num) {
  if (num === 1) return [1];

  const facts = factorialsRec(num - 1);
  facts.push(facts[facts.length - 1] * (num - 1));
  return facts;
}
// console.log(factorialsRec(4));
