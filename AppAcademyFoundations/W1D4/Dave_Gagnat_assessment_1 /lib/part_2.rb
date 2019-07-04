
# Build Main Method
def element_count(arr)
  count = Hash.new(0)
  
  arr.each do { |elm| count[elm] += 1 } 

  count
end 


# Build Main Method
def char_replace!(str, hash)
  str.each_char.with_index do |char, i|
    if hash.has_key?(char)
      str[i] = hash[char]
    end 
  end 

  str 
end 


# Build Main Method
def product_inject(numbers)
  # (numbers).inject { |acc, el| acc * el }
  arr.inject(:*)
end 