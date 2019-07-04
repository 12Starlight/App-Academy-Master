class Passenger 
  
  # getters, # setters
  attr_reader :name 
  
  def initialize(name)
    @name = name 
    @flight_numbers = []
  end 

  
  # instance methods 
  def has_flight?(flight_num) 
    @flight_numbers.any? { |num| num == flight_num.upcase }
  end 

  def add_flight(flight_num)
    if !has_flight?(flight_num)
      @flight_numbers << flight_num.upcase 
    end 
  end   

end 