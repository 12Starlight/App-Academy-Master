# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".


# Build helper method count_char(str)
# Counts all chars in a str, returns a hash
def count_char(str)
  count = Hash.new(0)
  
  str.each_char { |char| count[char] += 1 }  
  
  count 
end
puts count_char("Coders!!!!")

# Build Main Method
def compress_str(str)
  compressed = ""
  count = 1

  str.each_char.with_index do |char, i|
    next_char = str[i + 1]

    if i != str.length 
      if char == next_char
        compressed += ""
        count += 1
      elsif char != next_char && count > 1
        compressed += count.to_s
        compressed += char
        count = 1
      else
        compressed += char 
      end 
    end 
  end

  compressed
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
