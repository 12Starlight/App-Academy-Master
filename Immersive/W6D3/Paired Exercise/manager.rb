require_relative "employee"

class Manager < Employee

  # def initialize
  #     @employees = [Darren, Shawna, David]
  # end 
  attr_accessor :salary, :employees, :bonus

  def initialize(name, title, salary, boss = nil)
    @employees = []
    @boss = self 
    super(name, title, salary, boss)
  end
  
  def add_bonus(multiplier)
    total_salary = 0

    @employees.each do |employee|
      total_salary += employee.salary 
    end

    @bonus = total_salary * multiplier
  end

  def add_subordinates(*subordinates)
    subordinates.each { |sub| @employees << sub }
  end
end

ned = Manager.new("Ned", "Founder", 1000000)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
david = Employee.new("David", "TA", 10000, ned)
shawna = Employee.new("Shawna", "TA", 12000, ned)


ned.add_subordinates(darren, david, shawna)
darren.add_subordinates(david, shawna)

p ned.add_bonus(5) # => 500_000
p darren.add_bonus(4) # => 88_000
p david.add_bonus(3) # => 30_000
