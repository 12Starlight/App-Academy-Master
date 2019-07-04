class Hangman
  DICTIONARY = ["cat", "dog", "bootcamp", "pizza"]

  def initialize
    @secret_word = Hangman.random_word
    @guess_word = Array.new(@secret_word.length, "_")  
    @attempted_chars = [] 
    @remaining_incorrect_guesses = 5 
  end 

  # getters 
  def guess_word
    @guess_word 
  end 

  def attempted_chars
    @attempted_chars
  end 

  def remaining_incorrect_guesses
    @remaining_incorrect_guesses
  end 


  # setters


  # instance methods
  def already_attempted?(char)
    @attempted_chars.include?(char)   
  end 

  def get_matching_indices(char)
    indicies = []
    
    @secret_word.each_char.with_index do |letter, i|
      if char == letter 
        indicies << i   
      end 
    end 

    indicies 
  end 
  
  def fill_indices(char, idx_arr)
    idx_arr.each { |idx| @guess_word[idx] = char }
  end 

  def try_guess(char)
    result = already_attempted?(char)
    idx = get_matching_indices(char)
    fill_indices(char, idx)

    if result 
      puts "that has already been attempted :("
      return false 
    elsif get_matching_indices(char) == []
      @remaining_incorrect_guesses -= 1
    end 
  
    @attempted_chars << char 
    return true 
  end 

  def ask_user_for_guess
    puts "Enter a char:"
    response = gets.chomp
    try_guess(response)
  end 

  def win? 
    @guess_word.each_with_index { |char, i| return false if char != @secret_word[i] }

    puts "WINNER CHICKEN DINNER :))))"
    true 
  end 

  def lose?
    if @remaining_incorrect_guesses == 0 
      puts "LOSE Wha wha whaaaaaa"
      return true 
    else  
      return false 
    end 
  end 

  def game_over?
    win = win? 
    lose = lose?

    if win || lose
      puts @secret_word
      return true
    end 
    
    false 
  end 


  # class methods 
  def Hangman.random_word
    DICTIONARY.sample
  end 

end
