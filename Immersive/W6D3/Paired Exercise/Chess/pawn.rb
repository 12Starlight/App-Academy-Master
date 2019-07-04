require_relative "piece"
require "colorize"

class Pawn < Piece
  attr_reader :symbol, :color 
  def initialize(color)
    @color = color
    @symbol = "♟".colorize(color)
  end
end