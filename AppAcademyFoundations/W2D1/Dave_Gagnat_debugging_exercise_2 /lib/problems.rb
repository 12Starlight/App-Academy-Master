# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

require "byebug"


# Build Main Method 

=begin 
# My Working Solution
def largest_prime_factor(num)
  (2..num).reverse_each do |i|
    
    if prime?(i)
      # debugger
      return i if num % i == 0
    end   
  end   
end
=end 

def largest_prime_factor(num)
  num.downto(2) { |factor| return factor if num % factor == 0 && prime?(factor) }
end 


# Build helper method prime?(num)
# Determines, if a number is prime

=begin 
# My Working Solution
def prime?(num)
  return false if num < 2
  (2...num).each do |i|
    return false if num % i == 0
  end 

  true 
end
=end 
def prime?(num)
  return false if num < 2 
  (2...num).none? { |i| num % i == 0 }
end 


# Build Main Method 

=begin 
# My Working Solution
def unique_chars?(str)
  count = Hash.new(0)
  
  str.each_char do |char|
    count[char] += 1
    return false if count[char] > 1
  end 

  true 
end 
=end

def unique_chars?(str)
  already_seen = []

  str.each_char do |char|
    return false if already_seen.include?(char)
    already_seen << char
  end
  
  true 
end   

# Build Main Method (Tried everything I could think of, could not figure this out!)

=begin 
# My Solution
def dupe_indices(arr)
  count = Hash.new(0)
  elm_hash = Hash.new(0)
  elm_arr = []

  arr.each { |elm| count[elm] += 1 }
  arr.each_with_index do |elm, i|

    # debugger 
    if count[elm] > 1 
      elm_arr << i 
      elm_hash[elm] = elm_arr    
    end

    elm_arr = []
  end 

  return elm_hash
end 
=end 

def dupe_indices(arr)
  indices = Hash.new { |h, k| h[k] = [] }
  arr.each_with_index { |elm, i| indices[elm] << i }
  indices.select { |elm, index| index.length > 1 }
end 


# Build Main Method

=begin 
# My Working Solution
def ana_array(arr1, arr2)
  count1 = Hash.new(0)
  count2 = Hash.new(0)

  arr1.each { |elm| count1[elm] += 1 }
  arr2.each { |elm| count2[elm] += 1 }

  count1 == count2
end 
=end 

def ana_array(arr1, arr2)
  count1 = elm_count(arr1)
  count2 = elm_count(arr2)
  count1 == count2 
end 


# Build helper method elm_count(arr)
# Counts all the elemenents in an array
def elm_count(arr)
  count = Hash.new(0)
  
  arr.each { |elm| count[elm] += 1 }
  
  count 
end 