
# Build Main Method

# My Working Solution

=begin 
def palindrome?(str)
  reversed = []
  
  str.split("").reverse_each { |char| reversed << char }

  reversed.join("") == str 
end 

=end 

def palindrome?(str)
  str.each_char.with_index do |char, i|
    if char != str[-i - 1]
      return false
    end
  end 

  true 
end 


# Build Main Method

# My Working Solution

=begin 
def substrings(str)
  new_arr = []

  i = 0
  while i < str.length
      j = i
      while j < str.length 
        word = str[i..j]
        new_arr << word 

        j += 1
      end   

    i += 1  
  end
  
  new_arr 
end 

=end 

def substrings(str)
  new_arr = []

  (0...str.length).each do |first_idx|
    (first_idx...str.length).each do |last_idx|
      word = str[first_idx..last_idx]
      new_arr << word 
    end   
  end
  
  new_arr
end

# Build Main Method

# My Working Solution

=begin 
def palindrome_substrings(str)
  main_substrings = substrings(str)
  new_arr = []

  main_substrings.each do |string|
    if palindrome?(string) && string.length > 1
      new_arr << string 
    end 
  end 

  new_arr
end 

=end 

def palindrome_substrings(str)
  substrings(str).select { |substr| palindrome?(substr) && substr.length > 1 }
end 