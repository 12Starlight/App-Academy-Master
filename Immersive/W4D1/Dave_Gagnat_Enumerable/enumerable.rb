
# # Build Main Method 
# # My Each

require "byebug"

class Array
    
    def my_each(&prc) 
        i = 0
        while i < self.length    
            prc.call(self[i])
            
            i += 1
        end

        self
    end
end
# # Examples
# # calls my_each twice on the array, printing all the numbers twice.
# return_value = [1, 2, 3].my_each do |num|
#   puts num
# end.my_each do |num|
#   puts num
# end
# # => 1
#      2
#      3
#      1
#      2
#      3

# p return_value  # => [1, 2, 3]


# # Build Main Method
# # My Select 
class Array 
  def my_select(&prc)
    new_array = [] 

    self.my_each do |element| 
      new_array << element if prc.call(element)
    end 

    new_array
  end 
end 
# # Examples 
# a = [1, 2, 3]
# p a.my_select { |num| num > 1 } # => [2, 3]
# p a.my_select { |num| num == 4 } # => []


# # Build Main Method 
# # My Reject 
class Array 
  def my_reject(&prc)
    new_array = [] 

    self.my_each do |element|
      new_array << element if !prc.call(element)
    end

    new_array
  end 
end 
# # Examples 
# a = [1, 2, 3]
# p a.my_reject { |num| num > 1 } # => [1]
# p a.my_reject { |num| num == 4 } # => [1, 2, 3]


# # Build Main Method 
# # My Any 
class Array 
  def my_any?(&prc)
    self.my_each do |ele| 
      return true if prc.call(ele)
    end

    false 
  end

  def my_all?(&prc)
    self.my_each do |ele|
      return false if !prc.call(ele)
    end

    true 
  end
end
# Examples 
# p a.my_any? { |num| num > 1 } # => true
# p a.my_any? { |num| num == 4 } # => false
# p a.my_all? { |num| num > 1 } # => false
# p a.my_all? { |num| num < 4 } # => true


# # Build Main Method 
# # My Flatten
class Array
    def my_flatten
        return self if self.none? { |ele| ele.is_a?(Array) }
        
        flattened = []

        self.my_each do |subarr|
            if subarr.is_a?(Array)   
              flattened += subarr.my_flatten
            else   
              flattened << subarr
            end 
        end

        flattened
    end
end 
# # Examples 
# p [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]

# Build Main Method
# My Zip
class Array
    def my_zip(*args)
        new_arr = []
        # args = [arg1, arg2]
        self.each_with_index do |el, i|
            subarr = []
            subarr << el  

            args.each do |arg|         
                subarr << arg[i]
            end
            new_arr << subarr
        end
       new_arr
    end
end
# Examples
# a = [ 4, 5, 6 ]
# b = [ 7, 8, 9 ]
# p [1, 2, 3].my_zip(a, b) # => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
# p a.my_zip([1,2], [8])   # => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
# p [1, 2].my_zip(a, b)    # => [[1, 4, 7], [2, 5, 8]]

# c = [10, 11, 12]
# d = [13, 14, 15]
# p [1, 2].my_zip(a, b, c, d)    # => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]


# Build Main Method 
# My Rotate 
class Array 
  def my_rotate(num=1)
    rotated_array = self.dup   # self.clone
    
    # self.each { |el| rotated_array << el }
    # debugger 
    if num > 0  
        num.times do 
            temp = rotated_array.shift 
            rotated_array.push(temp)
        end
    else
      (-num).times do  
        temp = rotated_array.pop
        rotated_array.unshift(temp) 
      end 
    end 
    rotated_array 
  end
end 
a = [ "a", "b", "c", "d" ]
p a.my_rotate         #=> ["b", "c", "d", "a"]
p a.my_rotate(2)      #=> ["c", "d", "a", "b"]
p a.my_rotate(-3)     #=> ["b", "c", "d", "a"]
p a.my_rotate(15)     #=> ["d", "a", "b", "c"]


# Build Main Method 
# My Join
class Array 
    def my_join(str = nil)
      str.nil? ? self.join("") : self.join(str)
    end     
end
#  Examples
a = [ "a", "b", "c", "d" ]
p a.my_join         # => "abcd"
p a.my_join("$")    # => "a$b$c$d"


# Build Main Method 
# My Reverse 
class Array 
  def my_reverse 
    reversed = [] 

    i = self.length - 1 
    while i >= 0 
      reversed << self[i]

      i -= 1
    end
    
    reversed
  end
 
  # def my_reverse
  #   return self if self.length == 0 
  #   self[0].my_reverse += self[1..-1].my_reverse 
  # end 
end 
p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
p [ 1 ].my_reverse               #=> [1]