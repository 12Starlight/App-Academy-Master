# Write a method, ele_replace!(array, hash), that accepts an array and a hash as args.
# The method should mutate the given array by replacing elements with their corresponding values in the hash.
# The method should return the given array.
#
# Note: this method must MUTATE the input array. This means that the object_id of the input array should be identical
# to the object_id of the returned array. The exact object_ids you get back don't matter. We just want the ids
# to be the same before and after calling your method.


# Build Main Method

# My Solution

=begin   
def ele_replace!(array, hash)
  new_elements = []

  hash.each do |key, val|
    new_elements << val
  end
  p new_elements

    # hash.each do |key, val|
    #   if array[i] == key
    #     new_elements << val
    #     break
    #   else 
    #     new_elements << elm
    #     break  
    #   end  
    # end

  hash.each do |key, val|

    array.each_with_index do |elm, i|
      if array[i] == key 
         
        new_elements.each_index do |j|
          array[i] = new_elements[j]
          break
        end        
      else 
        next
      end    
    end   
  end   

  # array.each_index do |i|
  #   array[i] = new_elements[i]
  # end 
  
  array
end

=end

def ele_replace!(array, hash)
  array.map! do |el|
    if hash.has_key?(el)
      hash[el]
    else 
      el  
    end 
  end 
end   

array_1 = [4, 2, 0, 2]
p array_1.object_id         # => 70119569670520
result_1 = ele_replace!(array_1, {2=>"two", 0=>"zero", 5=>"five"})
p result_1                  # => [4, "two", "zero", "five"]
p result_1.object_id        # => 70119569670520


array_2 = ["Matthias", "Simcha", "Mashu", "David"]
p array_2.object_id         # => 70119569668160
result_2 = ele_replace!(array_2, "Matthias"=>"J", "Mashu"=>"D")
p result_2                  # => ["J", "Simcha", "D", "David"]
p result_2.object_id        # => 70119569668160
