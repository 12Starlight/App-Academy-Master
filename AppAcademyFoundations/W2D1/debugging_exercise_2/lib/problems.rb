# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

require "byebug"

# Build Main Method
def largest_prime_factor(num)
  (2..num).reverse_each do |i|
    
    if prime?(i)
      # debugger
      return i if num % i == 0
    end   
  end   
end 

# Build helper method prime?(num)
# Determines, if a number is prime
def prime?(num)
  return false if num < 2
  (2...num).each do |i|
    return false if num % i == 0
  end 

  true 
end  


# Build Main Method 
def unique_chars?(str)
  count = Hash.new(0)
  
  str.each_char do |char|
    count[char] += 1
    return false if count[char] > 1
  end 

  true 
end 


# Build Main Method (Tried everything I could think of, could not figure this out!)
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


# Build Main Method
def ana_array(arr1, arr2)
  count1 = Hash.new(0)
  count2 = Hash.new(0)

  arr1.each { |elm| count1[elm] += 1 }
  arr2.each { |elm| count2[elm] += 1 }

  count1 == count2
end 