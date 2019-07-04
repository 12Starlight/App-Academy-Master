# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

# Build helper method prime?(num)
# Deterimines, if a number is prime
def prime?(num)
  if num < 2
    return false
  end

  (2...num).each do |i|
    if num % i == 0
      return false
    end
  end

  return true
end
puts prime?(11)
puts "------------"
puts


# Build Main Method

=begin

def coprime?(num_1, num_2)  
  if num_1 > num_2
    bigger = num_1
  else 
    bigger = num_2
  end

  (2..bigger).each do |i|
    # if i dividese both num1 and num2... then return false z
    if num_1 % i == 0 && num_2 % i == 0
      return false
    end       
  end

  return true
end

=end

def coprime?(num_1, num_2)
  (2..num_1).none? { |i| num_1 % i == 0 && num_2 % i == 0 }
end

p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false
