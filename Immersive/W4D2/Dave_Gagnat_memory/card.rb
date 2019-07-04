class Card 
  def inititialize(value)
    @value = value 
    @facedown = false 
  end
  
  # intance methods 
  def hide
    @facedown = true 
  end

  def reveal
    @facedown = true 
  end 

  def to_s 
    @value.to_s 
  end   

  def ==(other_card) 
    self.to_s == other_card.to_s 
  end  

end
