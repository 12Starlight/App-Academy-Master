
# Build Main Method
def proper_factors(num)
  numbers  = []
  
  (1...num).each do |i|  
    if i.positive?
      if num % i == 0 # i < num &&  do not need this bc ... means that it will always be less than the num
        numbers << i 
      end
    end  
  end
  
  numbers
end 


# Build Main Method
def aliquot_sum(num)
  factors = proper_factors(num)
  factors.sum
end 


# Build Main Method
def perfect_number?(num)
  if num == aliquot_sum(num)
    return true
  end 

  false 
end 


# Build Main Method # I have no idea how to do this problem?
def ideal_numbers(n)
  # perfects = []
  # factors = proper_factors(n)

  # while perfects.length <= n  
  #   factors.each do |factor|
  #     sum = aliquot_sum(n)
    
  #     if factor == perfect_number?(factor)
  #       perfects << factor
  #     end 
  #   end     
  # end

  perfect_nums = []

  i = 1
  while perfect_nums.length < n 
    perfect_nums << i if perfect_number?(i)
    i += 1
  end 

  perfect_nums
end 