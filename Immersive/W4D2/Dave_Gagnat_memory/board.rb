require_realative "card.rb"

class Board 
  def initialize(size=4)
    @size = size 
    @board = Array.new(@size.pow(2))
  end 

  # instance methods 
  def populate
    num = @board/2
    cards = (2...num + 2).to_a 

    cards.each do |card|
      @board.concat([card, card]
    end

    @board.shuffle 
  end

  def display_board()
    @board.each_slice(@size) do |row|
      puts row.join(" ")
    end
  end
end