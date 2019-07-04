
# Build Main Method
def partition(arr, num)
  new_array = Array.new(2) { Array.new([]) }     

  arr.each do |elm|       
    if elm < num 
      new_array[0] << elm 
    else  
      new_array[1] << elm 
    end 
  end 
  
  new_array
end 


# Build Main Method
def merge(hash_1, hash_2)
  new = Hash.new(0)

  hash_1.each do |key_1, val_1|
    new[key_1] = val_1
      
    hash_2.each do |key_2, val_2|
      if hash_2.has_key?(key_1)
        new[key_1] = val_2
      else  
        new[key_2] = val_2
      end 
    end 
  end
  
  new 
end  


# Build Main Method
def censor(sen, curse_words)
  
  words = sen.split 
  
  words.map! do |word|
    if curse_words.include?(word.downcase)
      word = censor_word(word)
    else  
      word 
    end 
  end
  
  words.join(" ")
end


# Build helper method censor_word(word)
# Replaces all vowels in a word with "*"
def censor_word(word)
  vowels = "aeiou"

  censored = word.split("").map do |char|
    if vowels.include?(char.downcase)
      char = "*"
    else   
      char 
    end 
  end 

  censored.join("")
end 
puts censor_word("Coders!")


# Build Main Method
def power_of_two?(num)
  return true if num == 1   
  
  (2..num).each do |i| 
    if i.odd? 
      if num % i == 0  
        return false
      end   
    end   
  end
    
  true 
end

# Quicker Way
def power_of_two?(num)
  return true if num == 1

  (2..num).each do |i| 
    if num == 2 ** i # Raises 2 to the power of i 
      return true
    end
  end 

  false 
end 


