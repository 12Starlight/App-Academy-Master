require_relative "piece"
require_relative "stepable"
require "colorize"

class Knight < Piece
  include Stepable
  attr_reader :symbol, :color 
  def initialize(color)
    @color = color
    @symbol = "♞".colorize(color)
  end
end 