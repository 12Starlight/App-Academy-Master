# Write a method, peak_finder(arr), that accepts an array of numbers as an arg.
# The method should return an array containing all of "peaks" of the array.
# An element is considered a "peak" if it is greater than both it's left and right neighbor.
# The first or last element of the array is considered a "peak" if it is greater than it's one neighbor.


# Build Main Method

=begin    

# My Working Solution

def peak_finder(array)
  peaks = []

  if array[0] > array[1]
    peaks << array[0]
  end

  (0...array.length - 1).each do |i|
    left = array[i - 1]
    right = array[i + 1]
    current = array[i]
    
    if left < current && current > right 
      peaks << current
    end 
  end

  if array[-1] > array[-2]
    peaks << array[-1]
  end

  peaks 
end

=end 

def peak_finder(arr)
  peaks = []

  arr.each_index do |i|
    left = arr[i - 1]
    right = arr[i + 1]
    elm = arr[i]

    if i == 0 && elm > right
      peaks << elm
    elsif i == arr.length - 1 && elm > left
      peaks << elm
    elsif elm > left && elm > right # very important how the order of this last conditional is writen, you must make sure the current element is greater than the last element, so the last element will not be included in the iteration
      peaks << elm
    end 
  end
  
  peaks 
end 

p peak_finder([1, 3, 5, 4])         # => [5]
p peak_finder([4, 2, 3, 6, 10])     # => [4, 10]
p peak_finder([4, 2, 11, 6, 10])    # => [4, 11, 10]

