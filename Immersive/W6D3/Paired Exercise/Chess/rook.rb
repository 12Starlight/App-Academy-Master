require_relative "piece"
require_relative "slidable"
require "colorize"

class Rook < Piece
include Slidable
  attr_reader :symbol, :color 
  def initialize(color)
    @color = color
    @symbol = "♜".colorize(color)
  end

  def move_dirs
    horizontal_dirs
  end
end