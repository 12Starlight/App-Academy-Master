require_relative 'piece'
require_relative 'stepable'
require 'colorize'

class King < Piece
  attr_reader :symbol, :color 
  def initialize(color)
    @color = color
    @symbol = "♚".colorize(color)
  end
end 