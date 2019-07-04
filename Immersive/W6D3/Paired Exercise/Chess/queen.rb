require_relative 'piece'
require_relative 'module_slideable'
class Queen < Piece
  include Slideable
  attr_reader: :symbol :color 
  def initialize(color)
    @color = color
    @symbol = "♛".colorize(color)
  end
end