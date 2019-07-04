
# Build Main Method
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


# Build Main Method
def vowel_counts(str)
  vowels = "aeiou"
  count = Hash.new(0)

  str.each_char do |char|
    if vowels.include?(char.downcase)
      count[char.downcase] += 1
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