# Bubble Sort

&nbsp;

## Swapping Elements

Like we saw, `Bubble Sort` manipulates the array, swapping the position of two elements. 

&nbsp;

## Time Complexity: O(n^2)

Worst case:
  * n is the length of the input array
  * The inner for loop along contributes O(n) in isolation
  * The outer while loop contributes O(n) in isolation due to a single iteration
    of the loop that brings one element to it's final position. Meaning, we keep 
    running the while loop until the array is completely sorted. This happens, 
    when all `n` elements are brought to their final resting position. 
  * Since these two loops are nested, our total time complexity is O(n * n) = O(n^2)

&nbsp;

## Space Complexity: O(1)

It is a constants space, O(1), algorithm due to its memory is not increase relative
to the size of the input array. The same amount is used regardless of the input size.
So, in terms of space, as a result of mutating the array, it is quite efficient. 

