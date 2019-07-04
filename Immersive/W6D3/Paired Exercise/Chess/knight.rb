require_relative 'piece.rb'
class Knight < Piece
  attr_reader: :symbol :color 
  def initialize(color)
    @color = color
    @symbol = "♞".colorize(color)
  end
end 