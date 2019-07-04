require "byebug"

class Array
  # Write a new `Array#merge_sort` method; it should not modify the
  # array it is called on, but create a new sorted array.
  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    return self if size <= 1 
    mid = size / 2

    left, right = self.take(mid), self.drop(mid)
    sorted_left, sorted_right = left.merge_sort(&prc), right.merge_sort(&prc)

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

class Array
  # Write a new `Array#pair_sum(target)` method that finds all pairs of
  # positions where the elements at those positions sum to the target.

  # NB: ordering matters. I want each of the pairs to be sorted
  # smaller index before bigger index. I want the array of pairs to be
  # sorted "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)

  def pair_sum(target)
    pairs = [] 

    (0...self.length).each do |i|
      ((i + 1)...self.length).each do |j|
        pairs << [i, j] if self[i] + self[j] == target 
      end
    end
    pairs 
  end
end

class Array
  # Write a method that flattens an array to the specified level. If no level
  # is specified, it should entirely flatten nested arrays.

  # Examples:
  # Without an argument:
  # [["a"], "b", ["c", "d", ["e"]]].my_flatten = ["a", "b", "c", "d", "e"]

  # When given 1 as an argument:
  # (Flattens the first level of nested arrays but no deeper)
  # [["a"], "b", ["c", "d", ["e"]]].my_flatten(1) = ["a", "b", "c", "d", ["e"]]

  def my_flatten(level = nil, &prc)
    prc ||= { |a, b| a <=> b } 
    return self if level < 1 
    flattened = []

    self.each do |elm|
      case elm.is_a?(Array)
      when 0 
        return self 
      when - 1  
      end

        flattend += elm.my_flatten(level - 1)
      else
        flattend << elm 
      end
    end
    flattened 
  end
end

class String
  # Write a `String#symmetric_substrings` method that returns all
  # substrings which are equal to their reverse image ("abba" ==
  # "abba"). We should only include substrings of length > 1.

  def symmetric_substrings
    symm_str = [] 

    (0...self.length - 1).to_a.each do |start|
      (2..(self.length - start)).to_a.each do |ending|
        substr = self[start...(start + ending)]
        symm_str << substr if substr == substr.reverse 
      end
    end
    symm_str 
  end
end

def is_prime?(num)
  return false if num < 2 
  (2...num).none? { |i| num % i == 0 }
end

# Write a method that returns the nth prime number
def nth_prime(n)
  return nil if n == 0
  # debugger 
  primes = []

  i = 2
  until primes.length >= n 
    if is_prime?(i)
      primes << i   
    end
    i += 1
  end

  primes.last  
end

class Array
  # Write a method that calls a passed block for each element of the array
  def my_each(&prc)
    i = 0
    while i < self.count
      prc.call(self[i])
      i += 1
    end
    self 
  end
end

class Array
  # Write an array method that returns an array made up of the
  # elements in the array that return `true` from the given block
  def my_select(&prc)
    the_chosen = []

    self.each { |little_darfs| the_chosen << little_darfs if prc.call(little_darfs) }

    the_chosen
  end
end

