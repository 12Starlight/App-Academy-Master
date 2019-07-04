# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  
  # instance methods 

  # My Working Solution
  # def span
  #   if self.length.zero? 
  #     return nil
  #   else    
  #     self.max - self.min 
  #   end 
  # end 

  def span
    return nil if self.empty?
    self.max - self.min 
  end 

  # My Working Solution 
  # def average
  #   if self.length.zero?
  #     return nil 
  #   else
  #     return self.sum / self.length.to_f
  #   end  
  # end 
  def average 
    return nil if self.empty? 
    self.sum / self.length.to_f 
  end

  # My Working Solution
  # def median
  #   sorted = self.sort
  #   even_half = (sorted.length - 1) / 2
  #   odd_half = (sorted.length + 1) / 2

  #   return nil if self.length.zero?

  #   if self.length.odd?    
  #     return sorted[sorted.length / 2.0]
  #   else 
  #     return (sorted[odd_half] + sorted[even_half]) / 2.0 
  #   end 
  # end 
  def median 
    return nil if self.empty? 

    mid_index = self.length / 2 
    sorted = self.sort 
    
    if self.length.odd? 
      return sorted[mid_index]
    else   
      return (sorted[mid_index - 1] + sorted[mid_index]) / 2.0
    end 
  end 

  def counts
    count = Hash.new(0)
    
    self.each { |elm| count[elm] += 1 }

    count 
  end 

  def my_count(val)
    count = 0  

    self.each { |elm| count += 1 if elm == val }

    count 
  end 

  # My Working Solution 
  # def my_index(val)
  #   self.each_with_index do |elm, i|
  #     if val == elm 
  #        return i 
  #     end 
  #   end 

  #     nil 
  # end   
  def my_index(val)
    self.each_with_index { |elm, i| return i if val == elm }
    nil 
  end 

  # My Working Solution 
  # def my_uniq
  #   unique = []
    
  #   self.each do |elm|
  #     if !unique.include?(elm)
  #       unique << elm  
  #     end  
  #   end 
        
  #   unique   
  # end 
  def my_uniq 
    unique = {} 
    self.each { |elm| unique[elm] = true }
    unique.keys
  end 
  
  # My Working Solution 
  # def my_transpose # I have no idea how to solve this problem?
  #   transposed = []
  #   # inner = [] 

  #   i = 0
  #   while transposed.length < self.length 
  #     sub_array = self[i]
  #     inner = [] 

  #     sub_array.each_with_index do |elm, j| 
  #       # inner << sub_array[j]
  #       inner << self[j][i]
  #       # break 
  #     end 

  #     transposed << inner
  #     i += 1
  #   end
    
  #   transposed
  # end 

  # Using while 
  # def my_transpose
  #   transposed = [] 

  #   i = 0 
  #   while transposed.length < self.length 
  #     inner = []
      
  #     self.each_with_index do |elm, j|
  #       inner << self[j][i] 
  #     end 

  #     transposed << inner 
  #     i += 1
  #   end 

  #   transposed
  # end 

  # Using each
  def my_transpose
    transposed = [] 

    (0...self.length).each do |row| # Need to create a range, if you are going to push in self[col][row], otherwise, you will have to use the indices 
      inner = [] 

      (0...self.length).each do |col|
        inner << self[col][row] # So, we are really just flipping the rows and columns to columns and rows which can be done by flipping the indices as well
      end
      
      transposed << inner 
    end 

    transposed
  end 

end
