# Write a method, max_inject(arr), that accepts any amount of numbers arguments and returns
# the largest number. Solve this using the built-in inject.


# Build Main Method

=begin      

# My Working Solution

def max_inject(*arr_args)

  max = arr_args.inject do |acc, el|
    if acc > el
      acc
    else 
      el
    end
  end

  return max
end

=end

def max_inject(*arr_args)
  arr_args.inject do |max, el|
    if el > max  
      el 
    else 
      max  
    end 
  end
end

p max_inject(1, -4, 0, 7, 5)  # => 7
p max_inject(30, 28, 18)      # => 30