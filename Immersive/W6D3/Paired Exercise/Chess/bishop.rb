require_relative 'piece'
require_relative 'module_slideable'
class Bishop < Piece
    include Slideable
    attr_reader :color, :symbol
    def initialize(color)
        @symbol = '♟'.colorize(color)
        @color = color
    end
end