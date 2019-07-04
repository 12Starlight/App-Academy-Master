
# Build Main Method

# My Working Solution

=begin 
def hipsterfy(word)
  vowels = "aeiouAEIOU"
  reversed = word.reverse!

  reversed.each_char.with_index do |char, i|
    if vowels.include?(char)
      reversed[i] = ""
      break
    end 
  end 

  word.reverse! 
end 

=end

def hipsterfy(word)
  vowels = "aeiouAEIOU"

  i = word.length - 1
  while i >= 0
    char = word[i]

    if vowels.include?(char)
      return word = word[0...i] + word[i + 1..-1]
    end 
    i -= 1

  end   

  word   
end  


# Build Main Method
def vowel_counts(str)
  vowels = "aeiou"
  count = Hash.new(0)

  str.downcase.each_char do |char| # .downcase can go before .each_char 
    if vowels.include?(char)
      count[char] += 1
    end
  end 

  count 
end 


# Build Main Method
def caesar_cipher(message, num)
  new_message = ""
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  non_alphabet = "1234567890 _-!?@%,"

  message.each_char do |char|
    if non_alphabet.include?(char) 
      new_message += char 
    else      
      old = alphabet.index(char)
      idx = (old + num) % alphabet.length 
      shifted = alphabet[idx]
      new_message += shifted
    end  
  end
  
  new_message
end 

p caesar_cipher("apple", 1)

# Updated
def caesar_cipher(message, num)
  new_message = ""
  alphabet = ("a".."z").to_a # Creates an array, from chars specified 

  message.each_char do |char|
    old = alphabet.index(char)
    
    if old == nil # Not a character in the alphabet, so we just push the origninal char  
      new_message += char 
    else      
      idx = (old + num) % alphabet.length 
      shifted = alphabet[idx]
      new_message += shifted
    end  
  end
  
  new_message
end  

p caesar_cipher("apple", 1)