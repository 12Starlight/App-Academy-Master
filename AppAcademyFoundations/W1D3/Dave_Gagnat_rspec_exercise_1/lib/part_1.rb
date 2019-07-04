
# Build Main Method
def average(num_1, num_2)
  (num_1 + num_2) / 2.0
end 


# Build Main Method
def average_array(arr)
  arr.sum / arr.length.to_f 
end 


# Build Main Method
def repeat(str, num)
  str * num
end


# Build Main Method
def yell(str)
  str.upcase + "!"
end 


# Build Main Method

# My Working Solution

=begin 
def alternating_case(str)
  new_str = []

  str.split.each_with_index do |word, i|
    if i.even?
      new_str << word.upcase
    else  
      new_str << word.downcase
    end 
  end
  
  new_str.join(" ")
end 

=end 

def alternating_case(str)
  words = str.split

  new_word = words.map.with_index do |char, i|
    if i.even?
      char.upcase
    else
      char.downcase
    end 
  end
  
  new_word.join(" ")
end 