#==============================================================================#
# Write a function anagrams(str1, str2) that takes in two words and returns a boolean
# indicating whether or not the words are anagrams. Anagrams are words that
# contain the same characters but not necessarily in the same order. Solve this
# without using Array#sort
def anagrams(str1, str2)
end

#==============================================================================#
# Write a recursive method that takes in a base 10 number n and
# converts it to a base b number. Return the new number as a string
#
# E.g. base_converter(5, 2) == "101"
# base_converter(31, 16) == "1f"
def base_converter(num, b)
end 

#==============================================================================#
# Write a monkey patch of binary search:
# E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4
def bsearch(array, target)
end

class Array
  def my_bsearch(target)
  end
end

#==============================================================================#
# Write an Array method that returns a bubble-sorted copy of an array. 
# Do NOT call the built-in Array#sort method in your implementation. 
class array
  def bubble_sort!
  end

  def bubble_sort!(&prc)
  end
end

#==============================================================================#
# Back in the good old days, you used to be able to write a darn near
# uncrackable code by simply taking each letter of a message and incrementing it
# by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
# to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
# will take a message and an increment amount and outputs the encoded message.
# Assume lowercase and no punctuation. Preserve spaces.
#
# To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
# the position of a letter in the array, you may use `Array#find_index`.
def caesar_cipher(str, shift)
end

#==============================================================================#
# Using recursion and the is_a? method, write an Array#deep_dup method that will
# perform a "deep" duplication of the interior arrays.
def deep_dup(arr)
end

#==============================================================================#
# Write a method, `digital_root(num)`. It should Sum the digits of a positive
# integer. If it is greater than 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result, called the
# "digital root". **Do not use string conversion within your method.**
#
# You may wish to use a helper function, `digital_root_step(num)` which performs
# one step of the process.
def digital_root(num)
end

#==============================================================================#
# Write a method that doubles each element in an array
def doubler(array)
end

#==============================================================================#
# Write an Array#dups method that will return a hash containing the indices of all
# duplicate elements. The keys are the duplicate elements; the values are
# arrays of their indices in ascending order, e.g.
# [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }
class Array 
  def dups
  end
end

#==============================================================================#
# Write a method that returns b^n recursively. 
# Your solution should accept negative values for n.
def exponent(b, n)
end

#==============================================================================#
# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.
def factorials_rec(num)
end

#==============================================================================#
# Write a method that returns the factors of a number in ascending order.
def factors(num)
end

#==============================================================================#
# Write a method that finds the sum of the first n fibonacci numbers recursively. 
# Assume n > 0. # 3 times 
def fibs_sum(n)
end

#==============================================================================#
# Write a method that finds the sum of the first n fibonacci numbers recursively. 
# Assume n > 0. # 3 times. Use memoization and print in an array
def fibMemo(num, memo={})
end

#==============================================================================#
# Write a recursive method that returns the sum of the first n even numbers
# recursively. Assume n > 0.
def first_even_numbers_sum(n)
end

#==============================================================================#
# Write a method that takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).

# Example:
# jumble_sort("hello") => "ehllo"
# jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'
def jumble_sort(str, alpha=nil)
end

#==============================================================================#
# A palindrome is a word or sequence of words that reads the same backwards as
# forwards. Write a method that returns the length of the longest palindrome in
# a given string. If there is no palindrome longer than two letters, return false.
def longest_palindorme(sequence)
end

def is_palindrome?(let)
end

#==============================================================================#
# Write a method that returns the median of elements in an array
# If the length is even, return the average of the middle two elements
class Array 
  def median
  end
end

#==============================================================================#
# Write a method merge_sort(array), without a proc 
def merge_sort(array)
end

def merge(left, right)
end

# Write a method merge_sort(array, &prc), with proc
def merge_sort(array, &prc)
end

def merge(left, right, &prc)
end

# Write an Array#merge_sort method; it should not modify 
# the original array, with proc inside a class
class Array
  def merge_sort(&prc)
  end

  def self.merge(left, right, &prc)
  end
end

#==============================================================================#
class Array
  def my_all?(&prc)
  end
end

#==============================================================================#
class Array 
  def my_any?(&prc)
  end
end

#==============================================================================#
class Hash
  def my_each(&prc)
  end
end

#==============================================================================#
# Write a method Array#my_each and Array#my_each with an index, passing in a proc
class Array
  def my_each(&prc)
  end

  def my_each_with_index(&prc)
  end
end

#==============================================================================#
# Takes a multi-dimentional array and returns a single array of all the elements
# using recursion. 
# [1,[2,3], [4,[5]]].my_flatten(1) => [1,2,3,4,5]
class Array
  def my_flatten
  end

  # Write a version of flatten that only flattens n levels of an array using 
  # recursion.
  # E.g. If you have an array with 3 levels of nested arrays, and run
  # my_flatten(1), you should return an array with 2 levels of nested
  # arrays
  #
  # [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,[5]]
  def my_controlled_flatten(level=nil)
end
end

#==============================================================================#
# Monkey patch the Array class and add a my_inject method. If my_inject receives
# no argument, then use the first element of the array as the default accumulator.
class Array
  def my_inject(accumulator=nil, &block)
  end
end

#==============================================================================#
# Monkey patch the Array class and add a my_join method. If my_join receives
# no argument, then use an empty string to join the array together.
# ex.
# [1,2,3].my_join => '123'
# [1,2,3].my_join('$') => '1$2$3'
class Array
  def my_join(separator="")
  end
end

#==============================================================================#
# Write a version of merge. This should NOT modify the original hash and 
# return a combined version of both hashes.
class Hash
  def my_merge(other_hash)
  end
end

#==============================================================================#
# Write a method Array#my_reject that returns an array without the rejected elm
class Array
  def my_reject(&prc)
  end
end

#==============================================================================#
# Write an Array#my_reverse method that reveses the array, without modifying the 
# original array
class Array
  def my_reverse
  end
end

#==============================================================================#
# Write a method Array#my_rotate that rotates the elmements, without modifying
# the original array
class Array
  def my_rotate(positions=1)
  end
end

#==============================================================================#
# Write an Array#my_select(&prc) that returns an array with the elements chosen
# taking in a proc, without modifying the original array 
class Array 
  def my_select(&prc)
  end
end

#==============================================================================#
# Write an Array#my_zip(*array) method that zips up all the arrays or elements
# inside another array putting the elements of array.my_zip as the first elements
# in order, of each new array 
# ex.
# [1,2,3].my_zip([4,5,6], [7,8,9]) 
# should return => [[1,4,7], [2,5,8], [3,6,9]]
class Array 
  def my_zip(*arrays)
  end
end

#==============================================================================#
# Write a recursive function that returns the prime factorization of
# a given number. Assume num > 1
#
# prime_factorization(12) => [2,2,3]
def prime_factorization(num)
end

# long verson
def prime_factorization(num)
end

def is_prime?(num)
end

#==============================================================================#
# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.
def primes(num)
end

def is_prime?(num)
end

#==============================================================================#
# Monkey patch the array class quick sort method. The method should be able to 
# accept a block.
class Array
  def my_quick_sort(&prc)
  end
end

#==============================================================================#
# Write a method that returns an array of all the subwords 
# of the string that appear in the dictionary argument. 
# The method does NOT return any duplicates.
class String
  def real_words_in_string(dictionary)
  end
end

#==============================================================================#
# Write a method that returns the sum of all elements in an array recursively
def rec_sum(nums)
end

#==============================================================================#
# Write a recursive method that takes in a string to search and a key string.
# Return true if the string contains all of the characters in the key
# in the same order that they appear in the key.
#
# string_include_key?("cadbpc", "abc") => true
# string_include_key("cba", "abc") => false
def string_include_key?(string, key)
end

#==============================================================================#
# Write a String#symmetric_substrings method that returns an array of substrings
# that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
# Only include substrings of length > 1.
  def symmetric_substrings # 3 times 
class String
  def symmetric_substrings
  end
end

LOWER_CASE = [
  "a",
  "and",
  "of",
  "over",
  "the"
].freeze 

#==============================================================================#
# Write a method that capitalizes each word in a string like a book title
# Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'
def titleize(title)
end

#==============================================================================#
# Write a method, `Array#two_sum`, that finds all pairs of positions where the
# elements at those positions sum to zero. The method should return a nested 
# array of positions.

# NB: ordering matters. We want each of the pairs to be sorted smaller index
# before bigger index. We want the array of pairs to be sorted
# "dictionary-wise":
#   [0, 2] before [1, 2] (smaller first elements come first)
#   [0, 1] before [0, 2] (then smaller second elements come first)
class Array
  def two_sum
  end
end