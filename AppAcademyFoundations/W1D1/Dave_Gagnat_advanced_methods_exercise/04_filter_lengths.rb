# Write a method, filter_lengths(strings, length), that accepts an array of strings
# and a length as args. The method should return an array containing the strings
# that have at least the given length. The length argument should be optional; if no length
# is passed in, then 5 should be used as the length.


# Build Main Method

=begin 

# My Working Solution

def filter_lengths(arr, num=5)
  length = []
  
  arr.each do |str|
    if str.length >= num
      length << str
    end
  end

  return lengthz
end

=end

def filter_lengths(strings, length=5)
  strings.select { |word| word.length >= length }
end

p filter_lengths(["pear", "dragonfruit", "fig", "clementine"], 4)   # => ["pear", "dragonfruit", "clementine"]
p filter_lengths(["pear", "dragonfruit", "fig", "clementine"])      # => ["dragonfruit", "clementine"]
p filter_lengths(["cat", "dog", "capybara", "mouse"], 7)            # => ["capybara"]
p filter_lengths(["cat", "dog", "capybara", "mouse"])               # => ["capybara", "mouse"]