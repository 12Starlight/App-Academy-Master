class Room
  def initialize(capacity)
    @capacity = capacity 
    @occupants = [] 
  end 

  # getters

  def capacity
    @capacity 
  end 

  def occupants
    @occupants
  end 


  # setters 


  # instance methods
  def full?
    @occupants.length == @capacity
  end 

  def available_space
    @capacity - @occupants.length
  end 

  def add_occupant(name)
    if !self.full?
      @occupants << name 
      return true 
    end 

    false 
  end 

  # class methods 

end
