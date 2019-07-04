require "employee"

class Startup
  # getters, # setters
  attr_reader :name, :funding, :salaries, :employees 

  def initialize(name, funding, salaries)
    @name = name 
    @funding = funding 
    @salaries = salaries # hash containing "title" => "salary" pairs 
    @employees = []
  end 

  # instance methods 
  def valid_title?(title)
    @salaries.has_key?(title)
  end 

  # class methods
  def >(new_startup) # can be called s1 > s2 # "." notation is not necessary
    self.funding > new_startup.funding 
  end 

  def hire(employee_name, title)
    if self.valid_title?(title)
      employee_1 = Employee.new(employee_name, title)
      @employees << employee_1
    else  
      begin
        raise "An Error has occured, Invalid title!"       
      rescue InvalidTitleError => exception
        exception.message   
        exception.backtrace.inspect 
      end
    end 
  end   

  def size
    @employees.length 
  end 

  def pay_employee(employee)
    amount_owed = self.salaries[employee.title]

    if @funding >= amount_owed
      employee.pay(amount_owed)
      @funding -= amount_owed
    else  
      begin
        raise "An error has occured, Not enough funds :("
      rescue InvalidFundsError => exception
        exception.message 
        exception.backtrace.inspect     
      end  
    end 
  end   

  def payday 
    @employees.each { |employee| self.pay_employee(employee) }
  end 

  def average_salary
    total = 0 
    @employees.each { |employee| total += @salaries[employee.title] }
    total / @employees.length 
  end 
  
  def close 
    @employees = []
    @funding = 0 
  end 

  def acquire(bought_company)
    # add funding
    @funding += bought_company.funding 

    # meging salaries
    bought_company.salaries.each do |title, salary|
      if !@salaries.has_key?(title)
        @salaries[title] = salary
      end 
    end 

    # hire employees
    @employees += bought_company.employees
    
    # close the other startup 
    bought_company.close 
  end   

end
