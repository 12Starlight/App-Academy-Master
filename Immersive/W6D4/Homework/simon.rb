class Simon
  COLORS = %w(red blue green yellow) # => [red, blue, green, yellow]

  # getters, # setters 
  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  # instance methods
  def play
    take_turn until @game_over == true
    game_over_message
    reset_game
  end

  def take_turn
    if @game_over == false
      show_sequence
      require_sequence
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color| 
      puts color
      sleep(0.5)
      system("clear")
      sleep(0.25)
    end
  end
  
  def require_sequence
    i = 0
    while i < @seq.length
      puts "Enter color"
      guess = gets.chomp
      @game_over = true if  @seq[i] != guess
      i += 1
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "You got that right"
  end

  def game_over_message
    puts "You Lose"
    puts "Your sequence reached #{@sequence_length} colors!!!!!!!"
  end

  def reset_game
    self.sequence_length = 1
    @game_over = false
    @seq = []
    
  end
end

if $PROGRAM_NAME == __FILE__
  game = Simon.new
  game.play
end

# def team_build
#   "we are awesome!"
# end 