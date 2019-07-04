require 'byebug'
class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(accumulator = nil)
    accumulator ||= self[0] 

    self.each do |accumulator, elm|
      index = accumulator + elm
      
      if index < elm 
        index += elm 
      else  
        accumulator = index 
      end 
    end 

  end
end

# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.

def is_prime?(num)
  return false if num < 2
  (2...num).each do |i|
    if num % i == 0 
      return false 
    end 
  end 
  
  true 
end

def primes(num)
  prime_arr = []

  (2..num).each do |i|
    if is_prime?(i)
      prime_arr << i  
    end 
  end  
    
  prime_arr
end

# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  return [1] if num == 1
  facs = factorials_rec(num - 1)
  facs << facs.last * (num - 1) 
  facs
end

class Array

  # Write an Array#dups method that will return a hash containing the indices of all
  # duplicate elements. The keys are the duplicate elements; the values are
  # arrays of their indices in ascending order, e.g.
  # [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups
    dup_elms = Hash.new { |h, k| h[k] = [] }

    self.each_with_index do |item, index|
      dup_elms[item] << index
    end

    dup_elms.select { |key, val| val.count > 1 }
  end
end

class String

  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.

  def symmetric_substrings
    subs = []

    (0...self.length - 1).each_char.with_index do |elm_1, i|
      str1 = self[i]
      str2 = self[i + 1]  

      if str1 == str2 
        subs << [str1, str2]
      end 
    end
    
    subs 
  end
end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
  end

  private
  def self.merge(left, right, &prc)
  end
end
