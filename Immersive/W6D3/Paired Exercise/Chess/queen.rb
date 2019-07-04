require_relative "piece"
require_relative "slidable"
require "colorize"

class Queen < Piece
  include Slidable
  attr_reader :symbol, :color 
  def initialize(color)
    @color = color
    @symbol = "♛".colorize(color)
  end
end