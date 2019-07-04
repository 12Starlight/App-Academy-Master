
# Build Main Method
def select_even_nums(arr)
  arr.select(&:even?)
end 


# Build Main Method 
def reject_puppies(arr_hash)
  arr_hash.reject { |hash| hash["age"] < 3 } 
end 


# Build Main Method 
def count_positive_subarrays(two_arr)
  total = []

  two_arr.each do |sub_arr| 
    total << sub_arr.sum
  end
  
  total.count(&:positive?)
end 


# Build Main Method
def aba_translate(word)
  vowels = "aeiou"
  new_word = word.split("").map do |char|
    if vowels.include?(char)
      char + "b" + char 
    else  
      char 
    end 
  end
  
  new_word.join("")
end 


# Build Main Method
def aba_array(sentence)
  sentence.map { |word| aba_translate(word) }
end 