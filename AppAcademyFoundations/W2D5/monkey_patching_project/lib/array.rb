# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  
  # instance methods 
  def span
    if self.length.zero? 
      return nil
    else    
      self.max - self.min 
    end 
  end 

  def average
    if self.length.zero?
      return nil 
    else
      return self.sum / self.length.to_f
    end  
  end 

  def median
    sorted = self.sort
    even_half = (sorted.length - 1) / 2
    odd_half = (sorted.length + 1) / 2

    return nil if self.length.zero?

    if self.length.odd?    
      return sorted[sorted.length / 2.0]
    else 
      return (sorted[odd_half] + sorted[even_half]) / 2.0 
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

  def my_index(val)
    self.each_with_index do |elm, i|
      if val == elm 
         return i 
      end 
    end 

      nil 
  end   

  def my_uniq
    unique = []
    
    self.each do |elm|
      if !unique.include?(elm)
        unique << elm  
      end  
    end 
        
    unique   
  end 
  
  def my_transpose # I have no idea how to solve this problem?
    transposed = []
    inner = [] 

    i = 0
    while transposed.length < self.length 
      sub_array = self[i]
      # inner = [] 

      sub_array.each_with_index do |elm, j| 
        inner << sub_array[j]
        break 
      end 

      transposed << inner
      i += 1
    end
    
    transposed
  end 

end
