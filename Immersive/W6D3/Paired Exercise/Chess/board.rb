require_relative "piece.rb"

class Board

    def initialize
      @grid = Array.new(8) { Array.new(8)}

      (2..5).each do |row|
        (0..7).each do |col|
          @grid[row][col] = nil 
        end
      end 

      
    end

    def [](pos)
      x, y = pos
      @grid[x][y] 
    end

    def []=(pos, value)
      x, y = pos     
      @grid[x][y] = value 
    end
  
end