
# Build Main Method
def my_reject(arr, &prc)
  rejected = []

  arr.each do |elm|
    if !prc.call(elm)
      rejected << elm 
    end 
  end
  
  rejected
end 


# Build Main Method
def my_one?(arr, &prc)
  count = 0
  
  arr.each do |elm| 
    if prc.call(elm)
      count += 1   
    end 
  end
  
  # if count == 1
  #   return true 
  # else 
  #   return false  
  # end 
  count == 1 # Automatically returns true or false 
end 


# Build Main Method # I have no idea why this does not work?
def hash_select(hash, &prc)
  new_hash = Hash.new { |h, k| h[k] = 0 }

  hash.each do |k, v| 
    if prc.call(k, v)
      new_hash[k] = v
    end 
  end  

  new_hash
end 


# Build Main Method
def xor_select(arr, prc_1, prc_2)
  new_arr = [] 

  arr.each do |elm|
    prc1 = prc_1.call(elm)
    prc2 = prc_2.call(elm)

    if prc1 && prc2 
      next 
    elsif prc1 || prc2 
      new_arr << elm 
    end 
  end 

  new_arr
end 


# Build Main Method
def proc_count(val, arr)
  count = 0

  arr.each { |prc| count += 1 if prc.call(val) }   
  
  count 
end 