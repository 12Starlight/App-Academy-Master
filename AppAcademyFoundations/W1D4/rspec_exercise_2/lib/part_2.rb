
# Build Main Method
def palindrome?(str)
  reversed = []
  
  str.split("").reverse_each { |char| reversed << char }

  reversed.join("") == str 
end 


# Build Main Method 
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


# Build Main Method
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