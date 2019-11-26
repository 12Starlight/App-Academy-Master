# Memoization Notes

## Memoizing Factorial (kind of)

Each time we are calling `factorial(6)` we should get the same result  720 each time. This means we are running inefficient code. The solution is to store the result in an object, then simply fetch the stored value in constant time.  

After the code is refactored using memoization with an object, the `memo` object maps an argument of `factorial` to it's return value. Meaning, the keys are the arguments and the values are the corresponding results returned. Using the memo allows us to avoid duplicate calls. Also, by the the time `factorial(6)` gets stored, *args* 2 through 6 are stored as well.

&nbsp;

## Memoizing Fib (actually)

First, think about what complexity class this function falls into. Make a tree, to visualize it. 

![alt text](./Screen&#32;Shot&#32;2019-11-25&#32;at&#32;9.44.38&#32;PM.jpg "Recursion Tree")

&nbsp;

Generally the height would be represented by `n`. Ths can be found by simply following the path on the left side and going straight to the leaf node. We can also, see that each node splits into two other nodes, thus our tree will have `2^n` time complexity. 

So, how can we speed it up? Do we see any repetitive patterns? 

![alt text](./Screen&#32;Shot&#32;2019-11-25&#32;at&#32;9.49.41&#32;PM.jpg "Recursion Tree Patterns")

&nbsp;

The refactored code, can no calculate the 50th fib number instantly! The memo is the powerhouse that allows us to only have to explore the entire subtree once. This is what our `fastFib` recursion tree looks like now. 

&nbsp;

![alt text](./Screen&#32;Shot&#32;2019-11-25&#32;at&#32;9.55.48&#32;PM.jpg "Refactored Recursion Tree")

As we can see, now the function is just linear O(n) due to branches on the left hand side being the only ones that grow. Whereas as `n` grows larger, computations are significantly less. 

&nbsp;

## **The Memoization Formula**

Using memoization is especially useful when we have may overlapping subproblems in recursion. The best way to attack a problem is to draw out the tree, then look for duplicate subtrees. Here are the rules:
  * Write the unoptimized, brute force recursion and make sure it works.
  * Add the memo object as an additional arg to the function. The keys will represent unique arguments to the function, and their values will represent the ressults for those arguments
  * Add a base case condition to the function that returns the stored value, if the function's arg is in the memo.
  * Before you return the result of the recursive case, store it in the memo as a value and make the function's arg its key.

