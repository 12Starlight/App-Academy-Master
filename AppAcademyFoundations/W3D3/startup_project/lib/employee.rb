class Employee
  # getters, # setters 
  attr_reader :name, :title 

  def initialize(name, title)
    @name = name 
    @title = title 
    @earnings = 0
  end 

  # class methods


  # instance methods
  def pay(amount)
    @earnings += amount 
  end   

end
