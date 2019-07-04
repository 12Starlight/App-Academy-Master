
# Build Main Method
def proper_factors(num)
  numbers  = []
  
  (0..num).each do |i|  
    if i.positive?
      if i < num && num % i == 0 
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
  perfects = []
  # factors = proper_factors(n)

  i = 1
  while perfects.length < n  
    # factors.each do |factor|
      # sum = aliquot_sum(factor)
    
      if perfect_number?(i)
        perfects << i 
      end 
    # end
    i += 1     
  end

  perfects
end 