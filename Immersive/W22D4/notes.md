# Bubble Sort

&nbsp;

## Swapping Elements

Like we saw, `Bubble Sort` manipulates the array, swapping the position of two elements. 

&nbsp;

## Time Complexity: O(n^2)

Worst case:
  * `n` is the length of the input array
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

&nbsp;

# Selection Sort

Similar to Bubble Sort, except instead of bubbling the *largest* elements, it selects
the *smallest* elements of the array. Then directly places them at the beginning of the array in a sorted position. 

&nbsp;

## Time Complexity O(n^2)

Worst Case:
  * `n` is the length of the input array
  * The outer loop i contributes O(n) in isolation
  * The inner loop j is more complicated, it will make on less iteration for every
    iteration of i
    * example, we have an array of 10 elements, `n = 10`
    * the first full cycle of `j` will have 9 iterations
    * the second full cycle of `j` will have 8 iterations
    * the third full cycle of `j` will have 7 iterations
    * ...
    * the last full cycle of `j` will have 1 iteration
    * this means that the inner loop j will contribute roughly O(n / 2) on average
  * The two lops are nested, so our total time complexity is O(n * n / 2) = O(n^2)

&nbsp;

## Space Complexity: O(1)

The amount of memory consumed by the function does not increase relative to the size
of the input array. We use the same amount of memory and create the same amount of 
variables regardless of the size of our input.

&nbsp;

# Insertion Sort

Insertion Sort is similar to Selection Sort in that it gradually builds up a larger
and larger sorted region at the left-most end of the array. Where it differs though,
it focuses on sorting each element in the order that they appear. This is done from
left to right, regardless of thier value, then inserting them in the best position in
the sorted region. 

&nbsp;

## Things to notice:
  1. Our outer `for` loop starts at the 1st index, not the 0th index and moves to the right.
  2. Our inner `for` loop starts immediately to the left of the current element, and moves to the left.
  3. The condition for our inner `for` loop is complicated, and behaves similarly to a while loop!
    * We continue iterrating to the left toward `j = 0`, *only while* the `currentElement` is less than `arr[j]`
    * We do this over and over until we find the proper place to insert `currElement`, and then we exit the innner loop!
  
  4. When shifting elements in the sorted region to the right, we *do not* replace their value at their index!
    * If the input array is `[1, 2, 4, 3]`, and `currElement` is `3`, after comparing `4` and `3`, but before inserting `3` between `2` and `4`, the array will look like this: `[1, 2, 3, 4]`

&nbsp;

## Time Complexity O(n^2)

Worst Case:
  * `n` is the length of the input array
  * the outer loop i contributes O(n) in isolation
  * the inner loop j is more complicaated. We know j will iterate until it finds
    an appropriate place to insert the `currElement` into the sorted region. However, since we are discussing the case where the data is already in decreasing order, the element must travel the maximum distance to find it's insertion point! We know this insertion point to be index 0, since every `currElement` will be the next smallest of the array. So:
      * the 1st element travels 1 distance to be inserted
      * the 2nd element travels 2 distance to be inserted
      * the 3rd element travels 3 distance to be inserted
      * ...
      * the n-1th element travels n-1 distance to be inserted
      * this means thata our inner loop j will contribute roughly O(n / 2) on average
  * The two loops are nested so our total time complexity is O(n * n / 2) = O(n^2)

&nbsp;

## Space Complexity O(1)

The amount of memory used does not increase by the size of our input. 

&nbsp;

## Best Used:

It is best used when dealing with *streaming data* due to it sorting the stat live as it is *received*