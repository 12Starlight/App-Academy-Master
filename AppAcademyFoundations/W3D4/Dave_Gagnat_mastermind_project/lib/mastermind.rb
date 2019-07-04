require_relative "code"

class Mastermind
  def initialize(length)
    @secret_code = Code.random(length)
  end 


  # instance methods
  def print_matches(guess)
    puts "exact matches: #{@secret_code.num_exact_matches(guess)}  near matches: #{@secret_code.num_near_matches(guess)}"
  end 

  def ask_user_for_guess
    puts "Enter a code"
    response = gets.chomp
    correct_form = Code.from_string(response)
    self.print_matches(response)
    @secret_code == correct_form 
  end 

end
