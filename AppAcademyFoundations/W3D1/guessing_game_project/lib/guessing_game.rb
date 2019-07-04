class GuessingGame
  def initialize(min, max)
    @min = min
    @max = max 
    @secret_num = rand(min..max)
    @num_attempts = 0 
    @game_over = false 
  end 

  # getters 
  def num_attempts
    @num_attempts
  end 

  def game_over?
    @game_over
  end 


  # setters


  # instance methods
  def check_num(num)
    @num_attempts += 1

    if num == @secret_num
      puts "you win"
      @game_over = true 
    elsif num > @secret_num
      puts "too big"
    else  
      puts "too small"
    end 
  end 

  def ask_user
    puts "Enter a number"

    response = gets.chomp.to_i
    check_num(response)
  end 
end
