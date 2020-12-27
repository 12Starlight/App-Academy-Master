#==============================================================================#
# Write a function anagrams(str1, str2) that takes in two words and returns a boolean
# indicating whether or not the words are anagrams. Anagrams are words that
# contain the same characters but not necessarily in the same order. Solve this
# without using Array#sort
def anagrams(str1, str2) # 3 times
  letters = Hash.new(0)

  str1.split("").each { |elm| letters[elm] += 1 }
  str2.split("").each { |elm| letters[elm] -= 1 }

  letters.all? { |_, v| v.zero? }
end

# anagrams(str1, str2) solution
=begin    
Notes:
  * _ takes the place of an empty value, memoizing
  * one side builds, other destroys, nothing should be left
    # check values using .all? { |_, v| v.zero? }

=end 
#==============================================================================#
# Write a recursive method that takes in a base 10 number n and
# converts it to a base b number. Return the new number as a string
#
# E.g. base_converter(5, 2) == "101"
# base_converter(31, 16) == "1f"
def base_converter(num, b) # 3 times 
  return num.to_s if [0,1].include?(num)

  digits = %w(0 1 2 3 4 5 6 7 8 9 a b c d e f)
  base_converter(num/b, b) + digits[num % b]
end

# base_converter(num, b) solution
=begin   
Notes:
  %w(0123456789abcdf) 
    * equivalent to ["0123456789abcdef"] as one element, without spaces
    * the array is one element of type string

  %w(0 1 2 3 4 5 6 7 8 9 a b c d e f)
    * equivalent to ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"] as elements separated by a comma   
    * the array is several elements of type string 

  %w and %W are examples of General Delimited Input types, that relate to Arrays. 
  There are other types that include %q, %Q, %r, %x and %i.

  The difference between the upper and lower case version is that it gives us access 
  to the features of single and double quotes. With single quotes and (lowercase) %w, 
  we have no code interpolation (#{someCode}) and a limited range of escape characters 
  that work (\\, \n). With double quotes and (uppercase) %W we do have access to these 
  features.

  * %W and %w allow you to create an Array of strings without using quotes and commas.
  * %r() is another way to write a regular expression.
  * %q() is another way to write a single-quoted string (and can be multi-line, which is useful)
  * %Q() gives a double-quoted string
  * %x() is a shell command
  * %i() gives an array of symbols (Ruby >= 2.0.0)
  * %s() turns foo into a symbol (:foo)

=end 
#==============================================================================#
# Write a monkey patch of binary search:
# E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4
def bsearch(array, target) # 3 times 
  return nil if array.empty?
  mid = array.count / 2 
  left = array[0...mid]
  right = array[mid + 1..-1]

  case target <=> array[mid]
  when 0 
    return mid 
  when -1 
    return bsearch(left, target)
  else 
    sub_answer = bsearch(right, target)
    sub_answer.nil? ? nil : sub_answer + mid + 1 
  end
end

class Array
  def my_bsearch(target) # 3 times 
    return nil if size.zero?
    mid = size / 2 

    case target <=> self[mid]
    when 0
      return mid
    when -1 
      return self.take(mid).my_bsearch(target)
    else
      sub_answer = self.drop(mid + 1).my_bsearch(target)
      sub_answer.nil? ? nil : mid + 1 + sub_answer
    end
  end 
end


# Array#my_bsearch(target) solution
=begin   
Notes:
  * take(n) - returns first (n) elements of an array
  * if n is - , then raises an error  

  * drop(n) - drops first (n) elements from an array and returns the 
  rest of the elements in an array 

  * self.size - alias for Array#length 

  * with <=> spaceship operator the left is all that matters
    # less than the right = - 1
    # equal to the right = 0 
    # greater than the right = 1 

=end 
#==============================================================================#
class Array
  # Write an Array method that returns a bubble-sorted copy of an array. 
  # Do NOT call the built-in Array#sort method in your implementation. 
  def bubble_sort! # 3 times 
    sorted = false 

    until sorted 
      sorted = true 

      (0...self.length - 1).each do |i|
        if self[i] > self[i + 1]
          self[i], self[i + 1] = self[i + 1], self[i]
          sorted = false 
        end 
      end
    end

    self 
  end

  # You are not required to implement this; it's here as a suggestion :-)
  def bubble_sort!(&prc) # 3 times 
    sorted = false 
    prc ||= Proc.new { |a, b| a <=> b }

    until sorted 
      sorted = true 

      (0...self.length - 1).each do |i|
        if prc.call(self[i], self[i + 1]) == 1
          self[i], self[i + 1] = self[i + 1], self[i]
          sorted = false 
        end 
      end
    end

    self 
  end
end

# Array#bubble_sort(&prc) solution
=begin    
Notes:
  * until is the opposite of while
  * when is the opposite of if 
  * (0...self.length - 1) allows us to use |i| as an index
  * the method must start out as false, and be set to true inside the until
  loop
  * if the condition is true, reset the method to false bc it is still not 
  sorted yet 

=end
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
def caesar_cipher(str, shift) # 3 times 
  alpha = ("a".."z").to_a 
  encrypted = ""

  str.split("").each do |char|
    if char == " "
      encrypted += " "
      next 
    end

    idx = alpha.index(char)
    shifted = (idx + shift) % alpha.count 
    encrypted += alpha[shifted]
  end

  encrypted
end

# caesar_cipher(str, shift) solution
=begin   
Notes: 
  * checking for " " as an element allows for sentences 
  * (idx + shift) % #{alphabet}.count 

=end
#==============================================================================#
# Using recursion and the is_a? method, write an Array#deep_dup method that will
# perform a "deep" duplication of the interior arrays.
def deep_dup(arr) # 3 times 
  arr.map { |elm| elm.is_a?(Array) ? deep_dup(elm) : elm }
end

# deep_dup(arr) solution
=begin   
Notes:
  * .is_a?(#{type}) checks a type
  * elm is either an array or an element
    # if it is an array, it will just go inside the next array
    # once it hits the last element, it will return the stack

=end 
#==============================================================================#
# Write a method, `digital_root(num)`. It should Sum the digits of a positive
# integer. If it is greater than 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result, called the
# "digital root". **Do not use string conversion within your method.**
#
# You may wish to use a helper function, `digital_root_step(num)` which performs
# one step of the process.
def digital_root(num) # 3 times
  num < 10 ? num : digital_root(digital_root(num / 10) + (num % 10))
end

# digital_root(num) solution
=begin     
Notes:
  * num % 10 gives us a remainder, to add to the total
  * num / 10 shaves off a number each recursion call
  * the last call to digital_root, ensures the total is not 
  greater than 10  

=end
#==============================================================================#
# Write a method that doubles each element in an array
def doubler(array) # 3 times 
  array.map { |num| num * 2 }
end

# doubler(array) solution
=begin    
Notes:
  * .map quickly solves this problem 

=end
#==============================================================================#
# Write an Array#dups method that will return a hash containing the indices of all
# duplicate elements. The keys are the duplicate elements; the values are
# arrays of their indices in ascending order, e.g.
# [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }
class Array
  def dups # 3 times 
    positions = Hash.new { |h, k| h[k] = [] }

    self.each_with_index do |item, index|
      positions[item] << index 
    end

    postions.select { |key, val| val.count > 1 }
  end
end

# Array#dups solution
=begin   
Notes:
  * keys do not repeat, only values can
  * repeat values, show duplicates
  * .count works the same way as array.length
  * .select is a good way to quickly check values in a hash

=end
#==============================================================================#
# Write a method that returns b^n recursively. 
# Your solution should accept negative values for n.
def exponent(b, n) # 3 times 
  return 1 if n == 0
  if n > 0
    b * exponent(b, n - 1)
  else
    1.0/b * exponent(b, n + 1)
  end
end

# exponent(b, n) solution
=begin    
  Notes:
    * decimals multiplied together get smaller and smaller
    * decimals divided together get bigger and bigger
    * n is either shrinking or growing
    * if n is greater > 0, reduce n 
    * if n is less < 0, increase n 
    
    * b = -4, n = 3 
        # 1.0/4 => 0.25/4 => 0.0625/4 = 0.015625
    
    * b = 4, n = 3
        # 4 * 4 => 16 * 4 = 64 

=end
#==============================================================================#
# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.
def factorials_rec(num) # 3 times 
  return [1] if num == 1 
  facs = factorials_rec(num - 1)
  facs << facs.last * (num - 1)
  facs 
end

# factorials_rec(num) solution
=begin   
Notes:
  * The factorial function (symbol: !) says to multiply all whole numbers from 
  our chosen number down to 1
  * return [1] if num == 1
  * variable = recursive_method(n - 1)
  * variable << variable.last * (n - 1)
  * save to a variable to optimize and create an array
  * return the array

=end
#==============================================================================#
# Write a method that returns the factors of a number in ascending order.
def factors(num) # 3 times 
  return nil if num <= 0 
  return [1] if num == 0
  (1..num).select { |i| num % i == 0 }
end

# factors(num) solution
=begin   
Notes:
  * return nil, if num <= 0 
  * return [1], if num == 0
  * .select returns an array with only elements that meet its conditional
  statement 

=end
#==============================================================================#
# Write a method that finds the sum of the first n fibonacci numbers recursively. 
# Assume n > 0. # 3 times 
def fibs_sum(n) 
  return 0 if n == 0 
  return 1 if n == 1

  fibs_sum(n-1) + fibs_sum(n-2) + 1
end

# fibs_sum(n) solution
=begin    
Notes:
  * return 0 if n == 0
  * return 1 if n == 1
  * + 1 after fib(n-1) + fib(n-2)

=end

#==============================================================================#
# Write a method that finds the sum of the first n fibonacci numbers recursively. 
# Assume n > 0. # 3 times. Use memoization and print in an array
def fibMemo(num, memo={})
  return num if num == 0 || num == 1
  return memo[num] if memo.keys.include?(num)

  memo[num] = fibMemo(num - 1) + fibMemo(nm -2)
  return memo[num]
end

p (0..3).map { |x| fibMemo(x) }


#==============================================================================#
# Write a recursive method that returns the sum of the first n even numbers
# recursively. Assume n > 0.
def first_even_numbers_sum(n) # 3 times 
  return 2 if n == 1
  2 * n + first_even_numbers_sum(n - 1)
end

# first_even_numbers_sum(n) solution
=begin    
Notes:
  * return 2 if n == 1
  * first_even_numbers_sum(n - 1) just keeps reducing n 

=end
#==============================================================================#
# Write a method that takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).

# Example:
# jumble_sort("hello") => "ehllo"
# jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'
def jumble_sort(str, alpha = nil) # 3 times 
  alpha ||= ("a".."z").to_a 
  sorted = false 

  until sorted 
    sorted = true 

    (0...str.length - 1).to_a.each do |i|
      if alpha.index(str[i]) > alpha.index(str[i + 1])
        str[i], str[i + 1] = str[i + 1], str[i]
        sorted = false 
      end 
    end 
  end 

  str 
end

# jumble_sort(str, alphabet = nil) solution
=begin   
Notes:
  * .to_a is a good way to turn a range into an array and use .each on it
    # it is different than .is_a?(Array) which checks a type 

  * We must check the index values of each str[i]
    # alpha.index(str[i]) > alpha.index(str[i] + 1)

=end
#==============================================================================#
# A palindrome is a word or sequence of words that reads the same backwards as
# forwards. Write a method that returns the length of the longest palindrome in
# a given string. If there is no palindrome longer than two letters, return false.
def longest_palindrome(sequence) # 3
  largest = false 
  w = 0 

  while w < sequence.length - 1 
    p = w + 1

    while p < sequence.length 
      curr_seq = sequence[w..p]
      blueberry = curr_seq.length 

      if is_palindrome?(curr_seq)
        largest = blueberry if !largest || blueberry > largest 
      end 
      
      p += 1
    end
    
    w += 1
  end

  largest 
end 

def is_palindrome?(let)
  let == let.reverse 
end 

# longest_palindrome(string) solution
=begin   
Notes:
  * the second inner loop is str.length because it is accounting for i + 1
  * !longest_palindrome is checking for false, bc longest_palindrome must be set 
  to false in order to return false, if there are no palindromes longer than 2
  * there can not be any palindromes less than 2 bc str[i] + str[i + 1] requires
  at leat two elements 
  * needs is_palindrome?(string) as a helper method 

=end
#==============================================================================#
# Write a method that returns the median of elements in an array
# If the length is even, return the average of the middle two elements
class Array
  def median # 3 times  
    return nil if empty?
    sorted = self.sort 
    half = length/2 
    length.odd? ? sorted[half] : (sorted[half] + sorted[half - 1]).fdiv(2)
  end
end

p [4,6,2,4,7,1,3,34,12,98,23,9].median 

# Array#median
=begin   
Notes: 
  * .fdiv - performs division (n being the divisor), returns value as float 
  * must sort the array, self.sort 
  * length.odd?, checks length of array 
    # odd = true, sorted array is divided evenly
    # even = true, sorted array divided evenly + sorted array divided evenly - 1
      then divide the whole thing by 2 .fdiv(2)

=end
#==============================================================================#
# Write a method merge_sort(array), without a proc 
def merge_sort(array) # 3 times 
  return array if array.count <= 1
  mid = array.size / 2 

  left, right = array.take(mid), array.drop(mid)
  sorted_left, sorted_right = merge_sort(left), merge_sort(right)

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged = [] 

  until left.empty? || right.empty? 
    merged << ( left.first < right.first ? left.shift : right.shift )
  end

  merged + left + right 
end

arr = [8,3,5,2,6,8,9,2,5]
p merge_sort(arr)


# Write a method merge_sort(array, &prc), with proc
def merge_sort(array, &prc) # 3
  prc ||= Proc.new { |a, b| a <=> b }
  return array if array.size <= 1
  mid = array.count / 2

  left, right = array.take(mid), array.drop(mid)
  sorted_left, sorted_right = merge_sort(left, &prc), merge_sort(right, &prc)

  merge(sorted_left, sorted_right, &prc)
end

def merge(left, right, &prc)
  merged = [] 

  until left.empty? || right.empty?
    case prc.call(left.first, right.first)
    when - 1 
      merged << left.shift 
    else 
      merged << right.shift 
    end
  end
    
  merged.concat(left)
  merged.concat(right)

  merged 
end

arr = [8,3,5,2,6,8,9,2,5]
p merge_sort(arr)


# Write an Array#merge_sort method; it should not modify 
# the original array, with proc inside a class
class Array 
  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    return self if size <= 1 
    mid = size / 2 
    
    left, right = self.take(mid), self.drop(mid)
    sorted_left, sorted_right, = left.merge_sort(&prc), right.merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  private 
  def self.merge(left, right, &prc)
    merged = [] 
    
    until left.empty? || right.empty? 
      case prc.call(left.first, right.first)
      when - 1
        merged << left.shift 
      else 
        merged << right.shift 
      end 
    end

    merged.concat(left)
    merged.concat(right)

    merged 
  end
end
  
arr = [8,3,5,2,6,8,9,2,5]
p arr.merge_sort { |a, b| b <=> a }


# Array#merge_sort(&prc) solution
=begin   
Notes:
  * .shift(*args) - Removes first element, then returns it
    # shifts all elements down by one. Nil if empty 

  * .drop() - drops first (n) elements from array
      # returns the rest of the elements 
      # n < 0, raises an error 

      # [11] pry(main)> [0,1,2,3].drop(2)
        => [2, 3]

  * .take() - returns first (n) elements from array
      # n < 0, raises an error 
       
      # [10] pry(main)> [0,1,2,3].take(2)
        => [0, 1]
  
  * longer methods like these have several opportunities for spelling
  mistakes, check method names, make sure variables match 

=end
#==============================================================================#
class Array # 3 times 
  def my_all?(&prc)
    self.each { |elm| return false unless prc.call(elm) }
    true 
  end
end

# Array#my_all?(&prc) solution
=begin   
Notes:
  * prc.call(elm), with .each
  * false unless prc 

=end
#==============================================================================#
class Array # 3 times 
  def my_any?(&prc)
    self.each { |elm| return true if prc.call(elm) }
    false 
  end
end

# Array#my_any?(&prc) solution
=begin   
Notes:
  * my_any? is the opposite of my_all? 
  * true if prc.call(elm), with .each

=end
#==============================================================================#
class Hash # 3 times
  # Write a version of my each that calls a proc on each key, value pair
  def my_each(&prc)
    k = 0 
    while k < keys.length 
      prc.call(keys[k], self[keys[k]])
      k += 1 
    end 
  end
end

# Hash#my_each(&prc) solution
=begin    
Notes:
  * .keys - returns a new array populated with keys from this hash

  * .values - returns a new array populated with values from this hash

  Public Class Methods

  Hash[ key, value, ... ] → new_hash
  Hash[ [ [key, value], ... ] ] → new_hash
  Hash[ object ] → new_hash
  Creates a new hash populated with the given objects.

  Similar to the literal { key => value, ... }. In the first form, keys and 
  values occur in pairs, so there must be an even number of arguments.

  The second and third form take a single argument which is either an array 
  of key-value pairs or an object convertible to a hash.

  Hash["a", 100, "b", 200]             #=> {"a"=>100, "b"=>200}  version of this 
  Hash[ [ ["a", 100], ["b", 200] ] ]   #=> {"a"=>100, "b"=>200} <-------
  Hash["a" => 100, "b" => 200]         #=> {"a"=>100, "b"=>200}

=end
#==============================================================================#
# Write a method Array#my_each and Array#my_each with an index, passing in a proc 
class Array # 3 times :)
  def my_each(&prc)
    i = 0 
    while i < self.length 
      prc.call(self[i])
      i += 1
    end
    self 
  end

  def my_each_with_index(&prc)
    i = 0 
    while i < self.length 
      prc.call(self[i], i)
      i += 1
    end
    self 
  end
end

# Array#my_each(&prc)
=begin   
  Notes: 
    * self.length, self[i], i 
    * use while loop

=end
#==============================================================================#
class Array
  # Takes a multi-dimentional array and returns a single array of all the elements
  # using recursion. 
  # [1,[2,3], [4,[5]]].my_flatten(1) => [1,2,3,4,5]
  def my_flatten # 3 
    flattened = [] 
    self.each do |elm|
      elm.is_a?(Array) ? flattened += elm.my_flatten : flattened << elm 
    end 

    flattened 
  end

  # Write a version of flatten that only flattens n levels of an array using 
  # recursion.
  # E.g. If you have an array with 3 levels of nested arrays, and run
  # my_flatten(1), you should return an array with 2 levels of nested
  # arrays
  #
  # [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,[5]]
  def my_controlled_flatten(level = nil) # 3 
    return self if level < 1 
    flattend_result = [] 

    self.each do |elm|
      if elm.is_a?(Array)
        flattend_result += elm.my_controlled_flatten(level - 1)
      else 
        flattend_result << elm 
      end
    end

    flattend_result
  end
end

# Array#my_flatten solution
=begin   
  Notes:
    my_flatten
      * elm.is_a?(Array)
      * flattend += elm.my_flatten - allows us to go into embedded arrays 
      * flattened << elm - once last elm hit, return entire nested array 
    
    my_controlled_flatten(n)
      * set parameter to level with a default of nil 
      * return self if level < n - because that means we hit the last elm 
      * when concatenating reduce level by elm.my_controlled_flatten(level - 1)

=end
#==============================================================================#
class Array
  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(accumulator = nil, &block) # 3
    arr = self 

    if accumulator.nil? 
      accumulator = self.first 
      arr = self.drop(1)
    end 

    arr.each do |elm|
      accumulator = block.call(accumulator, elm)
    end

    accumulator
  end
end

# Array#my_inject(accumulator = nil) solution
=begin   
Notes:
  * pass in &block
  * create array and set it to array 
  * determine, if accumulator.nil? 
      # reset accumulator to first elm - self.first
      # reset array to every additional element - self.drop(2)
  
  * iterate through the unaltered or altered array
      # set acumulator to a block using block.call
      # it will either be the accumulator we set or 
      it will be the elm we are currently iterating 
      thorugh 

=end
#==============================================================================#
# Monkey patch the Array class and add a my_join method. If my_join receives
# no argument, then use an empty string to join the array together.
# ex.
# [1,2,3].my_join => '123'
# [1,2,3].my_join('$') => '1$2$3'
class Array # 3
  def my_join(separator = "")
    joinded = ""
    i = 0 
    self.each do |elm|
      joined << elm.to_s 
      joined << separator unless i == self.length - 1 
      i += 1
    end

    joined 
  end 
end

# Array#my_join(separator = "") solution
=begin   
Notes:
  * << non string item, .to_s must be used
  * counter outside of loop, increment inside .each loop
    # sets counter to iteration of loop 
    # unless i == self.length - 1 stops iteration 

  * to have a different elment (separator) << in after the previous element
    # shuvel each element in separately on a differnt line

=end
#==============================================================================#
class Hash
  # Write a version of merge. This should NOT modify the original hash and 
  # return a combined version of both hashes.
  def my_merge(other_hash) # 3
    dupped = self.dup 

    other_hash.each { |k, v| dupped[k] = v }

    dupped 
  end
end

# Hash#my_merge(other_hash) solution
=begin    
Notes: 
  * .dup - produces a shallow copy of obj—the instance variables of obj are copied, 
  but not the objects they reference. dup copies the tainted state of obj.
  * self.dup will duplicate a hash in terms of it's variables  

=end
#==============================================================================#
# Write a method Array#my_reject that returns an array without the rejected elm
class Array
  def my_reject(&prc) # 3
    accepted = [] 

    self.each { |elm| accepted << elm unless prc.call(elm) }

    accepted 
  end
end

# Array#my_reject(&prc) solution
=begin   
Notes:
  * prc.call(elm) is the element that will not be accepted
  * returns the array without the rejected elm 

=end 
#==============================================================================#
# Write an Array#my_reverse method that reveses the array, without modifying the 
# original array
class Array
  def my_reverse # 3
    opposited = [] 

    self.each { |elm| opposited.unshift(elm) }

    opposited 
  end
end

# Array#my_reverse solution
=begin   
Notes:
  * .unshift(elm) - **adds** objects to the front of self, moving other 
  elements upwards. 

  * .shift - removes the first elment and returns it 

=end
#==============================================================================#
# Write a method Array#my_rotate that rotates the elmements, without modifying
# the original array
class Array
  def my_rotate(positions = 1) # 3
    rotating = postions % size 

    self.drop(rotating) + self.take(rotating)
  end
end

# Array#my_rotate(positions) solution
=begin   
Notes:
  * rotating = positions % self.size 
  * postions has a default of 1
  * .drop(elm) returns the array after the elm has been dropped
  * .take(elm) takes the elm, and adds it to the front  

=end
#==============================================================================#
# Write an Array#my_select(&prc) that returns an array with the elements chosen
# taking in a proc, without modifying the original array 
class Array
  def my_select(&prc) # 3
    chosen_ones = [] 

    self.each { |worthy_elves| chosen_ones << worthy_elves if prc.call(worthy_elves) }

    chosen_ones
  end
end

# Array#my_select(&prc) solution
=begin   
Notes:
  * elm if prc.call(elm) 

=end
#==============================================================================#
# Write an Array#my_zip(*array) method that zips up all the arrays or elements
# inside another array putting the elements of array.my_zip as the first elements
# in order, of each new array 
class Array
  # ex.
  # [1,2,3].my_zip([4,5,6], [7,8,9]) 
  # should return => [[1,4,7], [2,5,8], [3,6,9]]
  def my_zip(*arrays) # 3 
    zipped = [] 

    self.count.times do |i|
      subzip = [self[i]]

      arrays.each { |array| subzip << array[i] }

      zipped << subzip 
    end

    zipped 
  end
end
p [1,2,3].my_zip([4,5,6], [7,8,9]) 

# Array#my_zip(*arrays) solution
=begin   
Notes:
  * inner loop uses outer loop iteration count 
  * self.count gives us the length, then .times iterates that length
  * supzip = [self[i]], self[i] being the first element in the subzip folder
  * array is an elment of arrays
    # array[i], allows us to iterate through each array at only the outer 
    iteration count 
    # we iterate one array at a time passing into the subzip folder, only one 
    element at that outer iteration count 
    # then we call the main zipped folder and shuvel in the subzip folder moving
    on to the next outer iteration count and repeating the process

=end
#==============================================================================#
# Write a recursive function that returns the prime factorization of
# a given number. Assume num > 1
#
# prime_factorization(12) => [2,2,3]
def prime_factorization(num) # 3
  (2..Math.sqrt(num).ceil).to_a.each { |i| return [i] + prime_factorization(num/i) if num % i == 0 }
  [num]
end 

# long verson
def prime_factorization(num) # 3
  return [] if num == 1
  i = 2 

  i += 1 until is_prime?(i) && num % i == 0 
  [i] + prime_factorization(num/i)
end 

def is_prime?(num)
  return if num < 2
  (2...num).none? { |n| num % n == 0 }
end 

# prime_factorization(num) solution 
=begin   
Notes:
  * .ceil if decimal, returns next whole number
  * .floor if decimal, returns current whole number 
  * [i] + prime_factorization(num/i) concatenates each qualifing i into the array
    # we call the recursive method prime_factoriztion(num) to find the rest 

  * num/i reduces num at each recursive call to prime_factorization(num)
  * base case - 1 not prime, return empty array []

  Only iterating up to the square root of num is an optimization, so that we 
  don't check the same numbers again. This is because any factor greater than 
  the square root would have a complementary factor below the square root. 

  Example: The square root of 144 is 12. Factors of 144 below 12 include 
  [1, 2, 3, 6]. The only factors greater than 12, are the complements of these 
  factors => [144, 72, 36, 24]. Therefore it is not necessary to iterate past
  the square root, since if a factor existed we would have already found it by 
  then.

  We also do not need to explicitly check that the factor is prime, because
  by starting at 2, we ensure that the first factor we find is prime. Any factor
  that is not prime, will itself have factors that are also factors of the
  number we are evaluating. This will continue to be true until we in fact reach
  the prime factors.

=end
#==============================================================================#
# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.
def primes(num) # 3
  primes = [] 

  i = 2
  until primes.count >= num
    primes << i if i is_prime?(i)

    i += 1
  end

  primes 
end 

def is_prime?(num)
  return false if num < 2
  (2...num).none? { |n| num % n == 0 }
end

# primes(num) solution
=begin    
Notes:
  * primes.count >= num, ensures we will << "num" times 
  * i = 2 bc it is the first prime number
  * until primes.count >= num, great solution 

=end
#==============================================================================#
# Monkey patch the array class quick sort method. The method should be able to 
# accept a block.
class Array
  def my_quick_sort(&prc) # 3
    prc ||= Proc.new { |a, b| a <=> b }
    return self if size < 2 

    pivot = first 
    left = self[1..-1].select { |elm| prc.call(elm, pivot) == -1 }
    right = self[1..-1].select { |elm| prc.call(elm, pivot) == 1 }
    left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)
  end
end

# Array#my_quick_sort(&prc)
=begin   
Notes: 
  * return self if size < 2, we want to sort till we hit only one number
  * pivot = self.first, left and right are self[1..-1]
  * we are sorting the array on the left, then the right
  * we add them by:
      # left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)
 
=end
#==============================================================================#
# Write a method that returns an array of all the subwords 
# of the string that appear in the dictionary argument. 
# The method does NOT return any duplicates.
class String
  def real_words_in_string(dictionary) # 3
    real = [] 

    (0...self.length).each do |idx|
      (idx...self.length).each do |jdx|
        current = self[idx..jdx]
        next if real.include?(current)

        real << current if dictionary.include?(current)
      end
    end

    real 
  end
end

# String#real_words_in_string(dictionary)
=begin     
Notes:
  * use (0...self.length).each do |idx|
    # (idx)...self.length).each do |jdx|
  
  * self[idx..jdx]
  * next if is a great way to skip something, if it already exits in array
  * if it does not exist, check if it exists in dictionary
    # if it exists in dictionary, << into the array 

=end
#==============================================================================#
# Write a method that returns the sum of all elements in an array recursively
def rec_sum(nums) # 3
  return 0 if nums.empty?
  nums[0] + rec_sum(nums.drop(1))
end

# rec_sum(nums) solution
=begin   
Notes:
  * (n - 1) will not work, nums is an array
  * nums[0] is the first element, add to recursive call
  * (nums.drop(1)) drops the first element and returns the remainder of the array
  constantly reducing the returned array by one 

=end
#==============================================================================#
# Write a recursive method that takes in a string to search and a key string.
# Return true if the string contains all of the characters in the key
# in the same order that they appear in the key.
#
# string_include_key?("cadbpc", "abc") => true
# string_include_key("cba", "abc") => false
def string_include_key?(string, key) # 2
  return true if key.count == 0

  next_key_char = key.chars.first 
  key_index = string.index(next_key_char)

  return false if key_index.nil? 
  string_include_key?(string[key_index+1..-1], key[1..-1])
end

# string_include_key?(string, key) solution
=begin    
Notes:
  * .chars - returns an array of characters in str. 
    # This is a shorthand for str.each_char.to_a.

  return true if key.length == 0 # if we have gotten rid of all the keys, that means the keys showed up in order in the string 

  next_key_char = key.chars.first 
  key_index = string.index(next_key_char) # there is only going to be a key index, if the char exists in the string

  return false if key_index.nil?
  string_include_key?(string[key_index+1..-1], key[1..-1]) # each key_index we delete everything before it at each call 

=end
#==============================================================================#
class String
  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.
  def symmetric_substrings # 3 times 
    symm_subs = [] 

    self.count.times do |start|
      (2..(self.length - start)).to_a.each do |ending|
        substr = self[start...(start + ending)]
        symm_subs << substr if substr == substr.reverse 
      end
    end

    symm_subs
  end
end


# String#symmetric_substrings solution
=begin   
Notes: 
  * self.count.times, starting value
  * (2..(self.length - start)), ending value 
  * self[start...(start + end)], creates substr 
  * starting value keeps increasing 
  * ending value keeps decreasing
  * sub == substr.reverse, checks palindrome 

=end
#==============================================================================#
# Write a method that capitalizes each word in a string like a book title
# Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'
LOWER_CASE = [
  "a",
  "and",
  "of",
  "over",
  "the"
].freeze 

def titleize(title) # 2
  words = title.split 
  book_cover = []
  i = 0 

  words.each do |word|
    if i > 0 && LOWER_CASE.include?(word)
      book_cover << word.downcase 
    else
      book_cover << word.capitalize 
    end

    i += 1
  end 

  book_cover.join(" ")
end

# titleize(title) solution
=begin    
Notes: 
  * .freeze - prevents further modifications to obj. A RuntimeError will be 
  raised if modification is attempted. There is no way to unfreeze a frozen 
  object. 
    # method returns self  

  * you can use i outside of an .each loop and increment it inside the loop
  allowing a second iterator, if you want

  * constants can be accessed outside a method 

=end
#==============================================================================#
class Array
  # Write a method, `Array#two_sum`, that finds all pairs of positions where the
  # elements at those positions sum to zero. The method should return a nested 
  # array of positions.

  # NB: ordering matters. We want each of the pairs to be sorted smaller index
  # before bigger index. We want the array of pairs to be sorted
  # "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)
  def two_sum # 3
    pairs_sorted = [] 

    self.each_index do |m|
      ((m + 1))...self.length).to_a.each do |h|
        pairs_sorted << [m, h] if self[m] + self[h] == 0
      end
    end

    pairs_sorted
  end
end

# Array#two_sum
=begin    
Notes:
  * .each_index is useful, if only an index is needed 
  * ((i + 1)...self.length), quick way to make sure the previous index is always
  before the next index
  * .to_a turns range into an array 

=end
#==============================================================================#

