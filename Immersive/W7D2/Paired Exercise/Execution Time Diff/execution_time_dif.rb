# my_min: Phase I
# compares each element to every other element of the list
# O(n^2) runtime
# O(1) space complexity  
def my_min(arr)
    min = arr.first

    arr.each_with_index do |ele1, i| 
      arr.each_with_index do |ele2, j|
        next if i == j 
        min = ele2 if ele2 < min 
      end
    end

    min
end     

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5


# my_min: Phase II
# iterate through the list just once while keeping track of the minimum
# O(n) runtime 
# O(1) space complexity 
def my_min_once(arr)
  min = arr.first 

  (0...arr.count).each do |i|
    min = arr[i] if arr[i] < min  
  end

  min 
end 

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_once(list)  # =>  -5


# Largest Contiguous Sub-sum 
# O(n^2) runtime 
# O(1) space complexity
def largest_contiguous_subsum(arr)
    max = 0

    (0...arr.count).each do |i|
        sum = arr[i]
        (i + 1...arr.count).each do |j|
            sum += arr[j]
            max = sum if max < sum 
        end 
    end 

    max
end

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8


# O(n) runtime
# 
def largest_contiguous_subsum_once(arr)
    largest_subsum = 0
    current = 0

    arr.each do |elm|
        current += elm
        if largest_subsum < current
            largest_subsum = current
        elsif current < 0
            current = 0       
        end     
    end    

    # (0...arr.count).each do |i|
    #   current_subsum = (largest_subsum + arr[i])
    #   if current_subsum > largest_subsum 
    #     largest_subsum = current_subsum 
    #   elsif current_subsum < 0 
    #     largest_subsum = 0 
    #   end
    # end    

    largest_subsum 
end     

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum_once(list) # => 8 (from [7, -6, 7])