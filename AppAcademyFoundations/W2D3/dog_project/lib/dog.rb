class Dog
  def initialize(name, breed, age, bark, favorite_foods)
    @name = name
    @breed = breed
    @age = age
    @bark = bark 
    @favorite_foods = favorite_foods
  end 

  # getters
  def name
    @name
  end 

  def breed
    @breed 
  end 

  def age
    @age 
  end 

  def favorite_foods
    @favorite_foods
  end 


  # setters
  def age=(number)
    @age = number 
  end 


  # instance methods
  def bark
    if @age > 3
      return @bark.upcase
    else 
      return @bark.downcase
    end 
  end 

  def favorite_food?(food)
    # altered = @favorite_foods.map { |item| item.downcase }
    # altered.include?(food.downcase) 
    @favorite_foods.map(&:downcase).include?(food.downcase)
  end 
end
