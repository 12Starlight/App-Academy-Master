class Bootcamp
  def initialize(name, slogan, student_capacity)
    @name = name
    @slogan = slogan
    @student_capacity = student_capacity
    @teachers = [] 
    @students = []
    @grades = Hash.new { |h, k| h[k] = [] }
  end 

  # getters
  def name
    @name
  end 

  def slogan
    @slogan
  end 

  def teachers
    @teachers
  end 

  def students 
    @students 
  end 


  # setters


  # instance methods
  def hire(teacher)
    @teachers << teacher 
  end 

  def enroll(student)
    if @students.length < @student_capacity
      @students << student
      return true 
    elsif @students.length == @student_capacity
      return false 
    end  
  end 

  def enrolled?(student)
    @students.include?(student)
  end 

  def student_to_teacher_ratio
    @students.length / @teachers.length  
  end 

  def add_grade(student, grade)
    if @students.include?(student)
      @grades[student] << grade 
        return true
    else  
      return false   
    end   
  end   

  def num_grades(student)
    @grades[student].length
  end 

  def average_grade(student)    
    grades = @grades[student]

    if grades == [] || enrolled?(student) == false 
      return nil 
    else
      grades.sum / grades.length
    end 

  end 


end
