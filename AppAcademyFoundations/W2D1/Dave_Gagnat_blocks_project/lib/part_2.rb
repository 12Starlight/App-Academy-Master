
# Build Main Method

=begin 
# My Working Solution
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
=end 
def all_words_capitalized?(words)
  words.all? { |word| word.capitalize == word }
end 


# Build Main Method

=begin 
# My Working Solution
def no_valid_url?(url_arr)
  url_arr.none? do |url|
    url.include?(".com")
  end 
end 
=end 
def no_valid_url?(url_arr)
  valid_endings = [".com", ".net", ".io", ".org"]
  url_arr.none? do |url|
    valid_endings.any? { |ending| url.end_with?(ending) }
  end 
end   


# Build Main Method
def any_passing_students?(arr_students)
  arr_students.any? do |student|
    total = student[:grades].sum
    avg = total/student[:grades].length.to_f
    avg >= 75 
  end 
end   

