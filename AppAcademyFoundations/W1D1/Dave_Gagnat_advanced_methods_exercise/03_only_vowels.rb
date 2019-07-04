# Write a method, `only_vowels?(str)`, that accepts a string as an arg.
# The method should return true if the string contains only vowels.
# The method should return false otherwise.

# Build Main Method

=begin 

# My Working Solution

def only_vowels?(str)
  vowels = "aeiouAEIOU"
  
  str.each_char do |char|
    if !vowels.include?(char)
      return false
    end
  end

  return true
end

=end

def only_vowels?(str)
  vowels = "aeiouAEIOU"
  str.split("").all? { |char| vowels.include?(char) }
end

p only_vowels?("aaoeee")  # => true
p only_vowels?("iou")     # => true
p only_vowels?("cat")     # => false
p only_vowels?("over")    # => false