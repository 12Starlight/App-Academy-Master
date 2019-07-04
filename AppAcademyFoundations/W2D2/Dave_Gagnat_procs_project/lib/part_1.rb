
# Build Main Method
def my_map(arr, &prc)
  # array.map(&prc) # "&"" The way how to convert it back to a proc
  
  new_array = []

  arr.each { |elm| new_array << prc.call(elm)}

  new_array
end 


# Build Main Method
def my_select(arr, &prc)
  new_array = []
  
  arr.each { |elm| new_array << elm if prc.call(elm) } 
  
  new_array
end 


# Build Main Method
def my_count(arr, &prc)
  count = 0

  arr.each { |elm| count += 1 if prc.call(elm) }

  count 
end 


# Build Main Method
def my_any?(arr, &prc)
  arr.each do |elm|  
    if prc.call(elm)
      return true 
    end 
  end 

  false 
end 


# Build Main Method
def my_all?(arr, &prc)
  arr.each do |elm|
    if !prc.call(elm)
      return false
    end
  end
  
  true 
end 


# Build Main Method
def my_none?(arr, &prc)
  arr.each do |elm|
    if prc.call(elm)
      return false 
    end 
  end
  
  true 
end 

