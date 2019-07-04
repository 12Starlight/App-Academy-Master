# Back in the good old days, you used to be able to write a darn near
# uncrackable code by simply taking each letter of a message and incrementing it
# by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
# to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
# will take a message and an increment amount and outputs the encoded message.
# Assume lowercase and no punctuation. Preserve spaces.
#
# To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
# the position of a letter in the array, you may use `Array#find_index`.

# Build Main Method
require "byebug"

def caesar_cipher(str, shift)
  words = str.split 
  new_sen = []

  words.each do |word|
    shifted = caesar_cipher_word(word, shift)
    new_sen << shifted
  end 

  new_sen.join(" ")
end

# Build Helper Method caesar_cipher_word(word, shift)
# Ciphers, one word according to the amount of shift 
def caesar_cipher_word(word, shift)
  alpha = ("a".."z").to_a
  chars = word.split("")
  new_array = []

  # debugger 
  chars.each do |char|
    idx = alpha.index(char)
    shifted = (idx + shift) % alpha.length
    new_char = alpha[shifted]
    new_array << new_char
  end
  
  new_array.join("")
end 


# Write a method, `digital_root(num)`. It should Sum the digits of a positive
# integer. If it is greater than 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result, called the
# "digital root". **Do not use string conversion within your method.**
#
# You may wish to use a helper function, `digital_root_step(num)` which performs
# one step of the process.

# Example:
# digital_root(4322) => digital_root(11) => (2)
# cannot use, return summed.digits.count + 1 
require "byebug"

def digital_root(num)
  result = num  

  while result >= 10 
    total = 0 
    current = result 
    
    while current >= 10  
      last_digit = current % 10 
      total += last_digit 
      current /= 10
    end 

    total += current  
    result = total 
  end 

  result  
end 

def digital_root(num)
  return num if num < 10
  digits_sum = num % 10 + digital_root(num / 10)   
  digital_root(digits_sum)
end


# Jumble sort takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).

# Example:
# jumble_sort("hello") => "ehllo"
# jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

# def jumble_sort(str, alphabet = nil)
#   alphabet ||= ("a".."z").to_a
#   positions = ""
  
#   str.each_char do |char|
#     idx = alphabet.index(char)
#     shifted = idx % alphabet.length
#     positions += alphabet[shifted]
#   end 
    
#   positions
# end

# def jumble_sort(str, alphabet = nil)
#   return str.split("").sort.join if alphabet.nil?
#   str.split("").sort_by { |char| alphabet.index(char) }.join
# end

# def jumble_sort(str, alphabet = nil)
#   debugger 
#   # conditionally assign the alphabet if it isn't given
#   alphabet ||= ("a".."z").to_a
#   # ruby's sort_by takes a block for how to compare array elements 
#   # (in this case, the string's chars)
#   # check out the documentation for sort_by and they have some examples that explain it well
#   sorted_chars = str.chars.sort_by do |char| 
#     # we choose to sort the chars by their index in our alphabet
#     alphabet.index(char) 
#   end
#   # sorted_chars is an array, so we need to join it
#   sorted_chars.join
# end

# def jumble_sort_without_sort_by(str, alphabet = nil)
#   alphabet ||= ("a".."z").to_a
#   # For this one, I know the alphabet is in the same order
#   # as the result string that I eventually want to return
#   # So I'm going to:
#   # - count how many times each character appears in the string using a counter hash
#   # - iterate through the characters in the alphabet (which is in the correct order)
#   # - see how many times each alphabet character appeared (using the hash)
#   # - add that character to the result string that many times
#   # - return the result string 

#   # initialize counter hash with a default of 0
#   counter = Hash.new(0)
#   # iterate through str chars
#   str.chars.each do |char|
#     # increment the counter at that char's key by one
#     counter[char] += 1
#   end
#   # initialize an empty result string
#   result = ""
#   # iterate through the alphabet
#   alphabet.each do |letter|
#     # see how many times that letter is in str
#     counter[letter].times do
#       # shovel the letter into result that many times
#       result << letter
#     end
#   end
#   # after iterating through the alphabet, I should have seen 
#   # every letter in order, and shoveled it into my final result 
#   # however many times it showed up in my original string

#   # return result
#   result
  
# end


def jumble_sort(str, alphabet = nil)
  alphabet ||= ("a".."z").to_a
  sorted_chars = str.chars.sort_by do |char| 
    alphabet.index(char) 
  end
  sorted_chars.join
end

def jumble_sort_without_sort_by(str, alphabet = nil)
  alphabet ||= ("a".."z").to_a
  counter = Hash.new(0)
  str.chars.each do |char|
    counter[char] += 1
  end
  result = ""
  alphabet.each do |letter|
    counter[letter].times do
      result << letter
    end
  end
  result
end

class Array
  # Write a method, `Array#two_sum`, that finds all pairs of positions where the
  # elements at those positions sum to zero.

  # NB: ordering matters. I want each of the pairs to be sorted smaller index
  # before bigger index. I want the array of pairs to be sorted
  # "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)

  def two_sum
    pairs = []

    self.each_with_index do |num_1, i|
      self.each_with_index do |num_2, j|
        if num_1 + num_2 == 0 && i < j 
          pairs << [i, j]
        end 
      end 
    end 

    pairs 
  end
end

class String
  # Returns an array of all the subwords of the string that appear in the
  # dictionary argument. The method does NOT return any duplicates.

  def real_words_in_string(dictionary)
    count = Hash.new(1)

    dictionary.each do |word|
      if self.include?(word)
        count[word] += 1
      end 
    end 

    count.keys 
  end
end

# Write a method that returns the factors of a number in ascending order.

def factors(num)
  fac_arr = [] 

  (1..num).each do |i|
    if num % i == 0 
      fac_arr << i  
    end 
  end

  fac_arr
end
