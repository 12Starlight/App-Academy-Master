# Tabulation Notes

&nbsp;

Memoization and Tabulaiton are two distinct Programming strategies. The goal of
`Tabulation` is to break large problems into smaller sub problems. Problems that
could be solved using Memoization often can be solved with Tabulation. 

The goal of Tabulation is to solve big problems by breaking them down into mini
versions of themselves. Two features describe the strategy for Tabulation:
  * the function is iterative and *not* recursive
  * the additional data structure used is typically an array (we refer to this as 
    the table!)

&nbsp;

First we want to create a table using an array, then fill it with elements. This
is normally done from left to right, thus the first element will be the smallest
subproblem. The last then, will be the biggest problem and our final answer. 

![alt text](Screen&#32;Shot&#32;2019-11-27&#32;at&#32;5.55.01&#32;PM.jpg "Initialized Table") 

&nbsp;

#### Complexity Analysis

In a very straight forward way, `tabulatedFib's` code is iterative. The loop being
the most dominant operation will fill out the table. Length is determined by `n`, 
giving our algorithm a runtime of O(n). As a result of the size of the table, space
taken by our algorithm is also O(n). We are being efficient which is good.  

&nbsp;

#### Aside: Refactorig for O(1) Space

Space was cut down in the function. During the loop, at any point, we only needed 
the previous subproblems. So, storing the entire array is unecessary. 

After refactoring the function, our runtime is O(n) and O(1) space! This is the 
option of our algorithm that is the most efficient. However, this strategy is not 
entirely `Tabulation`, due to no table being used. This being said, It still falls
under the Dynamic Programming category, since we saved previous subpproblems to 
get the final answer. 

&nbsp;

#### The tabulation Formula

Make sure the general problem can be divided into subproblems. Then do the following:
  * Create the table array based off of the size of the input
    * this is not always straightfoward, if you have multiple args

  * Inialize some values in the table that 'answer' the trivally small subprobelme  
    * usually this means initalizing the first entry of the table

  * Iterate through the array and fill in remaining entries
    * calculating the next entry should require using other entries of the table

  * You final answer is the last entry in the table (usually)