class Employee
    attr_reader :salary, :name, :bonus
  def initialize(name, title, salary, boss)
    @name = name 
    @title = title 
    @salary = salary 
    @boss = boss 
  end

  # instance methods
  def add_bonus(multiplier)
    @bonus = @salary * multiplier
  end

end