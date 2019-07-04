# Write a method, union, that accepts any number of arrays as arguments.
# The method should return an array containing all elements of the given arrays.


# Build Main Method

=begin 

# My Working Solution

def union(*arr_args)
  return arr_args.flatten
end 

=end

def union(*arr_args)
  arr_args.inject { |acc, array| acc + array }
end

p union(["a", "b"], [1, 2, 3]) # => ["a", "b", 1, 2, 3]
p union(["x", "y"], [true, false], [20, 21, 23]) # => ["x", "y", true, false, 20, 21, 23]