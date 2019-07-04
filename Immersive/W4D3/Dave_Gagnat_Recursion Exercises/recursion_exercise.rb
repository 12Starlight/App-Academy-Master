require "byebug"

# Warmup

# Write a recursive method, range, that takes a start and an end and returns
# an array of all numbers in that range, exclusive. For example, range(1, 5)
# should return [1, 2, 3, 4]. If end < start, you can return an empty array.

# Write both a recursive and iterative version of sum of an array.

def range_recursive(start, finish)
  return [] if start >= finish  
  [start] + range_recursive(start + 1, finish) 
end

p "Warmup Recursive"
p range_recursive(1, 5) #=> [1, 2, 3, 4]
p range_recursive(5, 1) #=> []
p range_recursive(4, 9) #=> [4, 5, 6, 7, 8]
p range_recursive(12, 16) #=> [12, 13, 14, 15]
p range_recursive(7, 13) #=> [8, 9, 10, 11, 12]
p "---------------------"

def range_iterative(start, finish)
  return [] if start >= finish 
  (start...finish).each.to_a
end

p "Warmup Iterative"
p range_iterative(1, 5) #=> [1, 2, 3, 4]
p range_iterative(5, 1) #=> []
p range_iterative(4, 9) #=> [4, 5, 6, 7, 8]
p range_iterative(12, 16) #=> [12, 13, 14, 15]
p range_iterative(7, 13) #=> [8, 9, 10, 11, 12]
p "---------------------"

# Exponentiation

# Write two versions of exponent that use two different recursions:

# recursion 1
# exp(b, 0) = 1
# exp(b, n) = b * exp(b, n - 1)

def exp_1(base, power)
  return 1 if power == 0 
  base * exp_1(base, power - 1)
end

p "Exp_1"
p exp_1(0, 0) #=> 1
p exp_1(0, 1) #=> 0
p exp_1(1, 0) #=> 1
p exp_1(1, 1) #=> 1
p exp_1(1, 2) #=> 1
p exp_1(2, 0) #=> 1
p exp_1(2, 1) #=> 2
p exp_1(2, 2) #=> 4
p exp_1(2, 5) #=> 32
p exp_1(3, 3) #=> 27
p exp_1(4, 4) #=> 256
p "---------------------"

# recursion 2
# exp(b, 0) = 1
# exp(b, 1) = b
# exp(b, n) = exp(b, n / 2) ** 2             [for even n]
# exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]

def exp_2(base, power)
    return 1 if power == 0 
    power.even? ? exp_2(base, power / 2) ** 2 : base * (exp_2(base, (power - 1) / 2) ** 2)
end

p "Exp_2"
p exp_2(0, 0) #=> 1
p exp_2(0, 1) #=> 0
p exp_2(1, 0) #=> 1
p exp_2(1, 1) #=> 1
p exp_2(1, 2) #=> 1
p exp_2(2, 0) #=> 1
p exp_2(2, 1) #=> 2
p exp_2(2, 2) #=> 4
p exp_2(2, 5) #=> 32
p exp_2(3, 3) #=> 27
p exp_2(4, 4) #=> 256
p "---------------------"

# Deep dup

# The #dup method doesn't make a deep copy:

# robot_parts = [
#   ["nuts", "bolts", "washers"],
#   ["capacitors", "resistors", "inductors"]
# ]

# robot_parts_copy = robot_parts.dup

# # shouldn't modify robot_parts
# robot_parts_copy[1] << "LEDs"
# # but it does
# robot_parts[1] # => ["capacitors", "resistors", "inductors", "LEDs"]

# When we dup an Array, it creates a new array to hold the elements, but doesn't
# recursively dup any arrays contained therein. So the dup method creates one 
#new array, but just copies over references to the original interior arrays.

# Sometimes you want a shallow dup and sometimes you want a deep dup. Ruby keeps
# things simple by giving you shallow dup, and letting you write deep dup
# yourself.

# Using recursion and the is_a? method, write an Array#deep_dup method that will
# perform a "deep" duplication of the interior arrays.

# Note: For simplicity's sake, we are only going to ensure the deep duplication
# of arrays. Don't worry about deep-duping (or regular-duping) other types of
# mutable objects (like strings, hashes, instances of custom classes, etc.),
# since this would require that we implement a deep dup method for each of those
# classes, as well.

# It's okay to iterate over array elements using the normal each for this one
# :-)

# You should be able to handle "mixed" arrays. For instance: [1, [2], [3, [4]]].

robot_parts = [
  ["nuts", "bolts", "washers"],
  ["capacitors", "resistors", "inductors"]
]

nums_arr = [1, [2], [3, [4]]]

# def deep_dup(array)
#     deep_copy = []

#     array.each do |ele|
#         if ele.instance_of?(Array)
#             deep_copy << deep_dup(ele)
#         else
#             deep_copy << ele
#         end
#     end

#     deep_copy
# end

def deep_dup(array)
  array.map { |elm| elm.is_a?(Array) ? deep_dup(elm) : elm }
end 


p "Deep dup"
# p deep_dup(robot_parts)
robot_parts_copy = deep_dup(robot_parts)
robot_parts_copy[0] << ["test"]
p robot_parts
p robot_parts_copy
p deep_dup(nums_arr)
p "---------------------"

# Fibonacci

# Write a recursive and an iterative Fibonacci method. The method should take in
# an integer n and return the first n Fibonacci numbers in an array.

# You shouldn't have to pass any arrays between methods; you should be able to
# do this just passing a single argument for the number of Fibonacci numbers
# requested.

def fib_recurseive(n)
  return [0, 1].take(n) if n <= 2 
  prev_fibs = fib_recurseive(n - 1)
  prev_fibs << prev_fibs[-1] + prev_fibs[-2]
end

p "Fibonacci recursive"
p fib_recurseive(0)
p fib_recurseive(1)
p fib_recurseive(2)
p fib_recurseive(3)
p fib_recurseive(5)
p fib_recurseive(8)
p fib_recurseive(12)
p fib_recurseive(30)
p "---------------------"

def fib_iterative(n)
  return [0, 1].take(n) if n <= 2
  
  fibs = [0, 1]
  while fibs.length < n 
    fibs << fibs[-1] + fibs[-2]
  end

  fibs 
end

p "Fibonacci iterative"
p fib_iterative(0)
p fib_iterative(1)
p fib_iterative(2)
p fib_iterative(3)
p fib_iterative(5)
p fib_iterative(8)
p fib_iterative(12)
p fib_iterative(30)
p "---------------------"

# Binary Search

# The binary search algorithm begins by comparing the target value to the value
# of the middle element of the sorted array. If the target value is equal to the
# middle element's value, then the position is returned and the search is
# finished. If the target value is less than the middle element's value, then
# the search continues on the lower half of the array; or if the target value is
# greater than the middle element's value, then the search continues on the
# upper half of the array. This process continues, eliminating half of the
# elements, and comparing the target value to the value of the middle element of
# the remaining elements - until the target value is either found (and its
# associated element position is returned), or until the entire array has been
# searched (and "not found" is returned).

# Write a recursive binary search: bsearch(array, target). Note that binary
# search only works on sorted arrays. Make sure to return the location of the
# found object (or nil if not found!). Hint: you will probably want to use
# subarrays.

# def bsearch(array, target)
#   return nil if array.empty?
#   half_length = array.length / 2 
#   middle = array[half_length]
#   left_half = array[0...half_length]
#   right_half = array[half_length + 1..-1]

#   if middle == target
#     return half_length
#   elsif middle > target    
#     bsearch(left_half, target)
#   else   
#     if bsearch(right_half, target).nil?
#       nil 
#     else   
#       bsearch(right_half, target) + half_length + 1 
#     end 
#   end   
# end

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

p "Binary Search"
p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
p "---------------------"

# Merge Sort

# Implement a method merge_sort that sorts an Array:

# The base cases are for arrays of length zero or one. Do not use a length-two
# array as a base case. This is unnecessary.

# You'll want to write a merge helper method to merge the sorted halves.
=begin   
Notes:
  * .shift(*args) - Removes first element, then returns it
    # shits all elements down by one. Nil if empty 

  * .drop() - drops first (n) elements from array
      # returns the rest of the elements 
      # n < 0, raises an error 

      # [11] pry(main)> [0,1,2,3].drop(2)
        => [2, 3]

  * .take() - returns first (n) elements from array
      # n < 0, raises an error 
       
      # [10] pry(main)> [0,1,2,3].take(2)
        => [0, 1]

=end 


# merge_sort(array) solution 

def merge_sort(array) # without proc 
  return array if array.count <= 1
  mid = array.size / 2 

  left, right = array.take(mid), array.drop(mid)
  sorted_left, sorted_right = merge_sort(left), merge_sort(right)

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged = [] 

  until 
    left.empty? || right.length.zero? 
      merged << ((left.first < right.first) ? left.shift : right.shift )
  end

  merged + left + right 
end

def merge_sort(array, &prc) # with proc 
  prc ||= Proc.new { |a, b| a <=> b }
  return array if array.count <= 1
  mid = array.size / 2

  left, right = array.take(mid), array.drop(mid)
  sorted_left, sorted_right = merge_sort(left, &prc), merge_sort(right, &prc)

  merge(sorted_left, sorted_right, &prc)
end 

def merge(left, right, &prc)
  merged = [] 

  until 
    left.empty? || right.length.zero? 
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

class Array 
  def merge_sort(&prc) # with a proc inside a class
    prc ||= Proc.new { |a, b| a <=> b }
    return self if size <= 1
    mid = size / 2

    left, right = self.take(mid), self.drop(mid)
    sorted_left, sorted_right = left.merge_sort(&prc), right.merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end 

  def self.merge(left, right, &prc)
    merged = [] 

    until 
      left.empty? || right.length.zero? 
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


p "Merge Sort" 
p merge_sort([1,5,3,7,4,8,9,3,5])
p merge_sort([23, 65, 87, 21, 78, 34])
p merge_sort(["a", 5, "34",7, "x", 81, "t", "A", 5])
p merge_sort([1.2, 5.3, 3.9, 7.7, 4.2, 8.1, 9.3, 3.6, 5.6])
p "---------------------"

# Array Subsets

# Write a method subsets that will return all subsets of an array.

# Hint: For subsets([1, 2, 3]), there are two kinds of subsets:

# Those that do not contain 3 (all of these are subsets of [1, 2]).
# For every subset that does not contain 3, there is also a corresponding
# subset that is the same, except it also does contain 3.

def subsets(array)

end

p "Array Subsets"
# p subsets([]) # => [[]]
# p subsets([1]) # => [[], [1]]
# p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# p subsets([1, 2, 3]) # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
p "---------------------"

# Permutations

# Write a recursive method permutations(array) that calculates all the
# permutations of the given array. For an array of length n there are n!
# different permutations. So for an array with three elements we will have
# 3 * 2 * 1 = 6 different permutations.

def permutations(array)

end

p "Permutations"

# p permutations([1, 2, 3]) # => [[1, 2, 3], [1, 3, 2],
                          #     [2, 1, 3], [2, 3, 1],
                          #     [3, 1, 2], [3, 2, 1]]
p "---------------------"