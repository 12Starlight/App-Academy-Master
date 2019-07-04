
# Build Main Method
def all_words_capitalized?(words)
  # if words.any?(&:downcase)
  #   return false
  # elsif words.all?(&:capitalize)
  #   return true  
  # end 

  # true == words.all?(&:capitalize) 
  words.all? do |word|
    words.include?(word.capitalize) 
  end   
end 


# Build Main Method
def no_valid_url?(url_arr)
  url_arr.none? do |url|
    url.include?(".com")
  end 
end 


# Build Main Method
def any_passing_students?(arr_students)
  arr_students.any? do |student|
    total = student[:grades].sum
    avg = total/student[:grades].length
    avg >= 75 
  end 
end   

